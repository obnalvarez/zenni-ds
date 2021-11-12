import React from "react";
import { Badges } from "../components/Badge";

export default {
    title: 'Badge',
    component: Badges,

    argTypes: {
    variant: {
    options: ['Cyan Background', 'Gray Background', 'White background with border', 'White background without border'],

    control: { type: 'select' } 

    },
    label: 'Add Prism Values',
    },
};
const Template = (args) => <Badges {...args} />;

export const Primary = Template.bind({});

Primary.args = {
label: 'Add Prism Values',
};