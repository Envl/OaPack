// scss
import './dist/_index.scss' // components

import DropDown from './dist/components/DropDown'
import Button, {Card} from './dist/components/Button'
import FilterGroup from './dist/components/FilterGroup'
import Carousel from './dist/components/Carousel'
import CubeMenu from './dist/components/CubeMenu' // mount FontAwesome script

if (!document.head.querySelector('#fa-script')) {
  const script = document.createElement('script')
  script.src = 'https://use.fontawesome.com/releases/v5.11.2/js/all.js'
  script.id = 'fa-script'
  script.async = true
  script.defer = true
  document.head.appendChild(script)
}

export {DropDown, Button, Card, FilterGroup, Carousel, CubeMenu}
