import React, {useState, useEffect, useRef} from 'react'
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
        <i className='dropdown-arrow fas fa-angle-down'></i>
      )}
    </>
  )
  return (
    <div
      className={
        'dropdown-wrapper ' + (props.className ? props.className : '')
      }>
      <div className='virtual-dropdown'>{title}</div>
      <div
        {...props}
        className={'dropdown ' + (isOpen ? 'list-open' : '')}
        ref={wrapperRef}
        onClick={evt => {
          // if (props.noPop) {
          //   return
          // }
          setIsOpen(!isOpen)
        }}>
        <div
          className={'dropdown-title ' + (isOpen ? 'pressed' : '')}
          onClick={evt => {
            // if (!props.noPop) {
            //   return
            // }
            setIsOpen(!isOpen)
          }}>
          {title}
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
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default DropDown
