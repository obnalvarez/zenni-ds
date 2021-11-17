import React from 'react';
import  Offcanvas  from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Offcanvas.css';

export const OffcanvasComponent = ({ show, hide, placement = 'start', children }) => {
  return (
    <>
      <Offcanvas show={show} onHide={hide} backdrop={false} placement={placement}>
        <Offcanvas.Header>
          <span className="span-to-center-title"></span>
          <Offcanvas.Title>Offcanvas title</Offcanvas.Title>
          <button onClick={hide} className="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {children}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

