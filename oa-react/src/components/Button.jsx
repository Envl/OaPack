import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

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
          if (props.type === 'toggle') {
            props.onClick && props.onClick({...evt, isToggleOn: !pressed})
            setPressed(!pressed)
          } else {
            props.onClick && props.onClick(evt)
          }
        }}
        className={`oa-btn ${
          props.type === 'toggle'
            ? pressed
              ? 'oa-toggle-on'
              : 'oa-toggle-off'
            : ''
        } ${props.className ? props.className : ''}`}>
        {props.children}
      </button>
    </div>
  )
}

Button.propTypes = {
  type: PropTypes.string,
}
Button.defaultProps = {
  type: 'button',
}

export default Button
