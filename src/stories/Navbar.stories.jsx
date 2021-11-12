import React from 'react';
import { storiesOf } from '@storybook/react';

import { Default } from '../components/Navbar';

const stories = storiesOf ('Navbar', module);

stories.add('Default', () => {
    return (<Default/>);
});