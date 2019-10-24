import React, {useState, useEffect, useRef} from 'react'

export const Card = props => {
  return (
    <div
      {...props}
      className={'oa-card ' + (props.className ? props.className : '')}>
      {props.children}
    </div>
  )
}

const Button = props => {
  const [pressed, setPressed] = useState(false)
  return (
    <div className={'btn-wrapper ' + (props.className ? props.className : '')}>
      <button className='v-oa-btn'>{props.children}</button>
      <button
        {...props}
        onClick={evt => {
          props.onClick && props.onClick(evt)
          if (props.toggle) {
            setPressed(!pressed)
          }
        }}
        className={`oa-btn ${pressed ? 'oa-btn-on' : 'oa-btn-off'} ${
          props.className ? props.className : ''
        }`}>
        {props.children}
      </button>
    </div>
  )
}

export default Button
