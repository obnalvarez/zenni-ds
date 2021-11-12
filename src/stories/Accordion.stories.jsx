import React from 'react';
import { storiesOf } from '@storybook/react';


import { Primary } from '../components/Accordion';

const stories = storiesOf ('Accordion', module);

stories.add('Primary', () => {
    return (<Primary/>);
});