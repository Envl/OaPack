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
  const fk = [0, 1, 2, 3]
  const [styleList, setStyleList] = useState(styleCalc(0, fk.length))

  return (
    <div className='oa-carousel'>
      {fk.map((d, index) => (
        <div
          className={`carousel-item item-${index}`}
          key={`carousel-item-${index}`}
          style={{transform: styleList[index]}}>
          {d}
        </div>
      ))}
      <div className='carousel-indicators'>
        {fk.map((item, index) => (
          <div
            className={`carousel-indicator-${index}`}
            key={`carousel-indicator-${index}`}
            onMouseEnter={evt =>
              // console.log(evt.target.className.match('indicator-(.*)')[1])
              {
                const tmp = styleCalc(
                  evt.target.className.match('indicator-(.*)')[1],
                  fk.length,
                )
                setStyleList(tmp)
                console.log(tmp)
              }
            }>
            {index}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
