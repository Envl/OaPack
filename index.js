import {copyToClipboard as iOSCopy} from './vallina-js/iOS_tools'
import * as ui from './oa-react/dist/exports'

const OaTest = () => console.log('Oh! a package!')

export {iOSCopy, ...ui,OaTest}
