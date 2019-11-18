// scss
import './dist/index.css'

import DropDown from './dist/DropDown'
import Button, {Card} from './dist/Button'
import FilterGroup from './dist/FilterGroup'
import Carousel from './dist/Carousel'
import CubeMenu from './dist/CubeMenu' // mount FontAwesome script
import {Sidebar, SidebarItem, SidebarInjector} from './dist/Sidebar'

if (
  typeof window !== 'undefined' &&
  !document.head.querySelector('#fa-script')
) {
  const script = document.createElement('script')
  script.src = 'https://use.fontawesome.com/releases/v5.11.2/js/all.js'
  script.id = 'fa-script'
  script.async = true
  script.defer = true
  document.head.appendChild(script)
}

export {
  DropDown,
  Button,
  Card,
  FilterGroup,
  Carousel,
  CubeMenu,
  Sidebar,
  SidebarInjector,
  SidebarItem,
}
