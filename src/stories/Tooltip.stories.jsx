import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Tooltip, TooltipComponent }  from '../components/Tooltip';

export default {
  title: 'Tooltip',
  component: TooltipComponent,
  argTypes: {
    tooltipColor: {
      options: ['white', 'black'],
      control: {
        type: 'select',
      },
    },
    placement: {
      options: ['bottom', 'top', 'right', 'left'],
      control: {
        type: 'select',
      },
    },
    borders: {
      options: [true, false],
      control: {
        type: 'boolean',
      },
    }
  }
};

const Template = (args) => (
  <TooltipComponent {...args} />
);

const renderChild = () => (
  <h2 style={{ margin: '250px 0 0 250px' }}>Hover over me</h2>
);


export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  tooltipMessage: 'Hello friend, time to hack!',
  children: renderChild(),

}