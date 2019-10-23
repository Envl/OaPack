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
    if (!document.head.querySelector('#fa-script')) {
      const script = document.createElement('script')
      script.src = 'https://use.fontawesome.com/releases/v5.11.2/js/all.js'
      script.id = 'fa-script'
      document.head.appendChild(script)
    }
    if (!props.noPop) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className={'dropdown ' + (props.className ? props.className : '')}
      ref={wrapperRef}
      onClick={evt => {
        if (props.noPop) {
          return
        }
        setIsOpen(!isOpen)
      }}>
      <div className={'dropdown-wrapper ' + (isOpen ? 'list-open' : '')}>
        <div
          className={'dropdown-title ' + (isOpen ? 'pressed' : '')}
          onClick={evt => {
            if (!props.noPop) {
              return
            }
            setIsOpen(!isOpen)
          }}>
          {props.title}
          {props.icon ? (
            props.icon
          ) : (
            <i className='dropdown-arrow fas fa-angle-down'></i>
          )}
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
