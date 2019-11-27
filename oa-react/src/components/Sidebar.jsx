import React, {useState} from 'react'
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
  return (
    <div className='element-with-sidebar'>
      <div className={`oa-sidebar ${props.className ? props.className : ''}`}>
        {items}
      </div>
      <div className='sidebar-placeholder'></div>
      {children}
    </div>
  )
}

SidebarInjector.propTypes = {
  items: PropTypes.object.isRequired,
}
