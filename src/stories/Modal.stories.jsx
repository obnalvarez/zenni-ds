import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalComponent from '../components/Modal';

export default {
  title: 'Modal',
  component: ModalComponent,
  argTypes: {
    fullscreen: {
      options: [true, false],
      control: 'boolean',
    },
    closeMessage: {
      options: [true, false],
      control: 'boolean',
    }

  }
};

const Template = (args) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <button onClick={handleShow}>Open Modal</button>
      <ModalComponent show={showModal} hide={handleClose} {...args} />
    </>
  );
};


const childComponent = () => (
  <h1>I'm the modal content</h1>
);

export const Default = Template.bind({});
Default.args = {
  children: childComponent(),
  modalTitle: 'Here we are',
  fullscreen: false,
  closeMessage: false,
}