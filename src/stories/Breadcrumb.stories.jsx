import React from 'react';
import { storiesOf } from '@storybook/react';

import { Primary } from '../components/Breadcrumb';

const stories = storiesOf ('Breadcrumb', module);

stories.add('Primary', () => {
    return (<Primary/>);
});