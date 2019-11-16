// scss
import './_index.scss'
// components
import DropDown from './components/DropDown'
import Button, {Card} from './components/Button'
import FilterGroup from './components/FilterGroup'
import Carousel from './components/Carousel'
import CubeMenu from './components/CubeMenu'
import {Sidebar, SidebarItem, SidebarInjector} from './components/Sidebar'

// mount FontAwesome script
if (!document.head.querySelector('#fa-script')) {
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
