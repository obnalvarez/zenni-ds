import React from 'react';
import { Dropdown, DropdownButton, ButtonGroup, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Dropdown.css';

export const Primary = () => {
    return (<> <Dropdown as={ButtonGroup}>
      <Button className={'dropdown-button-drop-down'} >Split Button</Button>
    
      <Dropdown.Toggle split id="dropdown-split-basic" />
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> </>);
}

export const TextOnly = () => {
  return (
    <>
    <Dropdown as={ButtonGroup}>
      <Button className={'btn-textonly'}>Split Button</Button>
    
      <Dropdown.Toggle split className={'btn-textonly'} id="dropdown-split-basic" />
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> </>);
}