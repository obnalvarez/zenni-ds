import React from 'react';
import Toast  from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ToastComponent = ({ show, close, toastTitle = '', messageOnRight = '', children }) => {
  return (
    <>
      <Toast show={show} onClose={close}>
        <Toast.Header>
          <strong className="me-auto">{toastTitle}</strong>
          <small>{messageOnRight}</small>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  )
}
