import React from 'react';
import { storiesOf } from '@storybook/react';


import { Primary } from '../components/Card';

const stories = storiesOf ('Card', module);

stories.add('Primary', () => {
    return (<Primary/>);
});