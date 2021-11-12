import React from 'react';
import { Alerts } from "../components/Alert"

export default {
title: 'Alert',
component: Alerts,

argTypes: {
variant: {
options: ['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'dark'],

control: { type: 'select' } 
},
label: 'Alerts',
URL: "https://www.zennioptical.com/"
},
};
const Template = (args) => <Alerts {...args} />;
export const Primary = Template.bind({});

Primary.args = {
additionalContent: false,
closeButton: false,
buttonTitle: "Close Me",

dismissible: false,
header: false,
title: "Header Title",
Link: false,
label: 'This is primary alert. Please check it out.',
URL: "https://www.zennioptical.com/",
Paragraph1: "This is the content in the paragraph 1.",
Paragraph2: "This is the content in the paragraph 2."
};