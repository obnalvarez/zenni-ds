import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastComponent } from '../components/Toast';

export default {
  title: 'Toast',
  component: ToastComponent,
};

const Template = (args) => (
  <ToastComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  show: true,
  toastTitle: 'Toast Title',
  messageOnRight: 'Little time',
  children: 'Toast Content Lorem ipsum',
}