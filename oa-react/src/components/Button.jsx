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
  console.log(props)

  return (
    <div className={'btn-wrapper ' + (props.className ? props.className : '')}>
      <button className='v-oa-btn'>{props.children}</button>
      <button
        {...props}
        className={'oa-btn ' + (props.className ? props.className : '')}>
        {props.children}
      </button>
    </div>
  )
}

export default Button
