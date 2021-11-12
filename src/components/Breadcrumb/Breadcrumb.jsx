import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'


import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Breadcrumb.css';

export const Primary = () => {
    return (<><Breadcrumb>
        <FontAwesomeIcon icon={faHome} />
        <Breadcrumb.Item href="#">Page 1</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Page 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Page 3</Breadcrumb.Item>
      </Breadcrumb></>);
}