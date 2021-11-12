import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Link} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 

export const Default  = () => {
    return (<><Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home"><img
        src="https://static.zennioptical.com/dev/image/site/logo/zenni-logo.png"
        width="150"
        height="30"
        className="d-inline-block align-top"
        alt="Zenni"
      /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">WOMEN</Nav.Link>
          <Nav.Link href="#link">MEN</Nav.Link>
          <Nav.Link href="#home">KIDS</Nav.Link>
          <Nav.Link href="#link">FEATURED</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></>);
}