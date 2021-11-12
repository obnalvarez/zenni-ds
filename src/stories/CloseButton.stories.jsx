import React from 'react';
import { storiesOf } from '@storybook/react';

import { Primary } from '../components/CloseButton';

const stories = storiesOf ('CloseButton', module);

stories.add('Primary', () => {
    return (<Primary/>);
});


