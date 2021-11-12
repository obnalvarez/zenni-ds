import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

import 'bootstrap/dist/css/bootstrap.min.css'; 


export * from './components/Accordion';
export * from './components/Breadcrumb';
export * from './components/CloseButton';
export * from './components/Dropdown';
export * from './components/Image';
export * from './components/InputGroup';
export * from './components/Navbar';
export * from './components/Placeholder';
export * from './components/Toast';
export * from './components/Tooltip';