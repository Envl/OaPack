import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

export function SidebarItem({brief, detail, to, className, ...props}) {
  return (
    <>
      <a
        {...props}
        href={to}
        className={`sidebar-item-brief  ${
          typeof window !== 'undefined'
            ? window.location.pathname === to
              ? 'sidebar-active'
              : ''
            : ''
        } ${className ? className : ''}`}>
        {brief}
      </a>
      <a
        {...props}
        href={to}
        className={`sidebar-item-detail ${
          typeof window !== 'undefined'
            ? window.location.pathname === to
              ? 'sidebar-active'
              : ''
            : ''
        }  ${className ? className : ''}`}>
        {detail ? detail : brief}
      </a>
    </>
  )
}

export function SidebarInjector({children, items, ...props}) {
  const [hideBar, setHideBar] = useState(false)
  let isScrollDown = false
  let lastY = 0
  let lastFlag = true
  useEffect(() => {
    function scrollHandler(params) {
      isScrollDown = window.pageYOffset > lastY
      lastY = window.pageYOffset
      if (isScrollDown !== lastFlag) {
        //update state
        lastFlag = isScrollDown
        console.log(isScrollDown)
        setHideBar(isScrollDown)
      }
    }
    // scroll detect
    console.log(window.innerWidth, 'sds')
    if (window.innerWidth < 768) {
      window.addEventListener('scroll', scrollHandler)
    }
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])
  return (
    <div className='element-with-sidebar'>
      <div
        className={`oa-sidebar ${props.className ? props.className : ''} ${
          hideBar ? 'thin-bar' : ''
        }`}>
        {items}
      </div>
      <div className='sidebar-placeholder'></div>
      <div>{children}</div>
    </div>
  )
}

SidebarInjector.propTypes = {
  items: PropTypes.object.isRequired,
}
