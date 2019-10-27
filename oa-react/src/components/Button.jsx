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
    <button
      {...props}
      onMouseDown={evt => {
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
            ? 'oa-toggle oa-toggle-on'
            : 'oa-toggle oa-toggle-off'
          : ''
      } ${props.className ? props.className : ''}`}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
}
Button.defaultProps = {
  type: 'button',
}

export default Button
