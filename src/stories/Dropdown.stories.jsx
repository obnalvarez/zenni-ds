import React from 'react';
import { storiesOf } from '@storybook/react';

import { Primary, TextOnly } from '../components/Dropdown';

const stories = storiesOf ('Dropdown', module);

stories.add('Form', () => {
    return (<Primary/>);
});

stories.add('TextOnly', () => {
    return (<TextOnly/>);
});

stories.add('Hover Popover', () => {
    return (<Dropdown/>);
});

stories.add('Frame Finder Sort', () => {
    return (<Dropdown/>);
});

stories.add('Text Only', () => {
    return (<Dropdown/>);
});

stories.add('Top Label', () => {
    return (<Dropdown/>);
});

stories.add('Disabled', () => {
    return (<Dropdown/>);
});



