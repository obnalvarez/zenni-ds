import React from 'react';
import { storiesOf } from '@storybook/react';

import { Primary } from '../components/Placeholder';

const stories = storiesOf ('Placeholder', module);

stories.add('Default', () => {
    return (<Primary/>);
});