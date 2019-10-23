import React, {useState, useEffect, useRef} from 'react'

const Card = props => {
  return <div className='oa-card'>{props.children}</div>
}

const Button = props => {
  console.log(props)

  return (
    <div className='btn-wrapper'>
      <button className='v-oa-btn'>{props.children}</button>
      <button
        className={'oa-btn ' + (props.className ? props.className : '')}
        {...props}>
        {props.children}
      </button>
    </div>
  )
}

export default Button
