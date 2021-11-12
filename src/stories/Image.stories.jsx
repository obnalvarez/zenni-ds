import React from 'react';
import { storiesOf } from '@storybook/react';

import { Hero } from '../components/Image';


const stories = storiesOf ('Image', module);

stories.add('Hero', () => {
    return (<Hero/>);
});





