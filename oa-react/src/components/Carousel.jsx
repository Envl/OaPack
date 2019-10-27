import React, {useState} from 'react'

function styleCalc(currentIndex, length) {
  let l = []
  for (let i = 0; i < length; i++) {
    l.push(`translateY(${(i - currentIndex) * 100}%)`)
  }
  return l
}
const Carousel = props => {
  const [currentIndex, setIndex] = useState(0)
  // const contents = [0, 1, 2, 3]
  const contents =
    typeof props.children == 'object' ? [props.children] : props.children
  console.log(contents, 'sss', [].push(props.children), props.children)
  const [styleList, setStyleList] = useState(
    styleCalc(0, contents && contents.length),
  )

  return (
    <div
      {...props}
      className={`oa-carousel ${props.className ? props.className : ''}`}>
      <div className='carousel-indicators'>
        {contents &&
          contents.map((item, index) => (
            <div
              className={`carousel-indicator indicator-${index} ${
                index == currentIndex ? 'current-indi' : ''
              }`}
              key={`carousel-indicator-${index}`}
              onMouseEnter={evt => {
                const i = evt.target.className.match('indicator-(.* )')[1]
                setIndex(i)
                console.log('new i', i)
                const tmp = styleCalc(i, contents.length)
                setStyleList(tmp)
              }}></div>
          ))}
      </div>
      {contents &&
        contents.map((item, index) => (
          <div
            className={`carousel-item item-${index}`}
            key={`carousel-item-${index}`}
            style={{
              transform: styleList[index],
            }}>
            {item}
          </div>
        ))}
    </div>
  )
}

export default Carousel
