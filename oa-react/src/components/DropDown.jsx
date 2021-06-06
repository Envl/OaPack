import React, { useEffect, useRef, useState } from 'react'

import PropTypes from 'prop-types'

const DropDown = props => {
  const [isOpen, setIsOpen] = useState(props.isOpen ? true : false)

  let wrapperRef = useRef(null)

  const handleClickOutside = evt => {
    if (wrapperRef && !wrapperRef.current.contains(evt.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    // if (!props.noPop) {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
    // }
  }, [])

  const title = (
    <>
      {props.name}
      {props.icon ? (
        props.icon
      ) : (
        <svg
          style={{
            width: '.625em',
            height: '1em',
            verticalAlign: '-0.125em',
            fontSize: 'inherit',
          }}
          class="svg-inline--fa fa-angle-down fa-w-10 dropdown-arrow"
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
          ></path>
        </svg>
      )}
    </>
  )
  return (
    <div
      className={'dropdown-wrapper ' + (props.className ? props.className : '')}
    >
      <div className="virtual-dropdown">{title}</div>
      <div
        {...props}
        className={'dropdown ' + (isOpen ? 'list-open' : '')}
        ref={wrapperRef}
        onClick={evt => {
          // if (props.noPop) {
          //   return
          // }
          setIsOpen(!isOpen)
        }}
      >
        <div
          className={'dropdown-title ' + (isOpen ? 'pressed' : '')}
          onClick={evt => {
            // if (!props.noPop) {
            //   return
            // }
            setIsOpen(!isOpen)
          }}
        >
          {title}
        </div>
        {props.children && (
          <div
            className={'dropdown-list ' + (isOpen ? '' : 'hide-list')}
            onClick={evt => {
              props.onClick && props.onClick(evt)
            }}
          >
            {props.children}
          </div>
        )}
      </div>
    </div>
  )
}
DropDown.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default DropDown
