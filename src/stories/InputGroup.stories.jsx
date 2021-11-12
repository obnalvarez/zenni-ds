import React from 'react';
import { storiesOf } from '@storybook/react';

import { EmailAdd, RadioGroup } from '../components/InputGroup';

const stories = storiesOf ('InputGroup', module);

stories.add('Email Add', () => {
    return (<EmailAdd/>);
});

stories.add('Radio Group', () => {
    return (<RadioGroup/>);
});



