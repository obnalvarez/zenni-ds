import React from 'react';
import { Modal } from 'react-bootstrap';
import './Modal.css';

export const ModalComponent = ({ show, hide, modalTitle, closeMessage = false, fullscreen = false, children }) => {
  return (
    <>
      <Modal size="lg" show={show} onHide={hide} fullscreen={fullscreen}>
        <Modal.Header bsPrefix={fullscreen ? "modal-header-css-full" : 'modal-header-css'}>
          <Modal.Title>{modalTitle}</Modal.Title>
          <button onClick={hide} className="close-button">
            {closeMessage && <span>CLOSE</span>}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  )
}
