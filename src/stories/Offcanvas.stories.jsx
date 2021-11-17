import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OffcanvasComponent } from "../components/Offcanvas"

export default {
  title: 'Offcanvas',
  component: OffcanvasComponent,

  argTypes: {
    placement: {
      options: ['start', 'end'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => (
  <OffcanvasComponent {...args} />
);


const childComponent = () => (
  <h3>I'm the Offcanvas content</h3>
);

export const Default = Template.bind({});
Default.args = {
  show: true,
  children: childComponent(),
}