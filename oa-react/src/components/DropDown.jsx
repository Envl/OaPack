import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import './_DropDown.scss'
import {Triangle} from './Icons'
const DropDown = props => {
  const [isOpen, setIsOpen] = useState(props.isOpen ? true : false)

  let wrapperRef = useRef(null)

  const handleClickOutside = evt => {
    if (wrapperRef && !wrapperRef.current.contains(evt.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (!props.noPop) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className={'dropdown '}
      ref={wrapperRef}
      onClick={evt => {
        // props.onClick && props.onClick(evt)
        if (props.noPop) {
          return
        }
        setIsOpen(!isOpen)
      }}>
      <div className='dropdown-wrapper'>
        <div
          className='dropdown-title'
          onClick={evt => {
            if (!props.noPop) {
              return
            }
            setIsOpen(!isOpen)
          }}>
          <span>{props.title}</span>
          <span className='dropdown-icon'>
            {props.icon ? (
              props.icon
            ) : (
              <Triangle className='dropdown-triangle' />
            )}
          </span>
        </div>
        {props.children && (
          <div
            className={'dropdown-list ' + (isOpen ? '' : 'hide-list')}
            onClick={evt => {
              props.onClick && props.onClick(evt)
            }}>
            {props.children}
          </div>
        )}
      </div>
    </div>
  )
}
DropDown.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default DropDown
