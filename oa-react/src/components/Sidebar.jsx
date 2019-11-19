import React, {useState} from 'react'
import PropTypes from 'prop-types'

export function SidebarItem({brief, detail, to}) {
  return (
    <>
      <a
        href={to}
        className={`sidebar-item-brief  ${
          window.location.pathname == to ? 'sidebar-active' : ''
        }`}>
        {brief}
      </a>
      <a
        href={to}
        className={`sidebar-item-detail ${
          window.location.pathname == to ? 'sidebar-active' : ''
        }`}>
        {detail ? detail : brief}
      </a>
    </>
  )
}
export const Sidebar = ({children, items}) => {
  return (
    <div className={`oa-sidebar ${props.className ? props.className : ''}`}>
      {children}
    </div>
  )
}

export function SidebarInjector({sidebar, children}) {
  return (
    <div className='element-with-sidebar'>
      {sidebar}
      <div className='sidebar-placeholder'></div>
      {children}
    </div>
  )
}

SidebarInjector.propTypes = {
  sidebar: PropTypes.object.isRequired,
}
