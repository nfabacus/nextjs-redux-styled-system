import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './index';
// import {storiesOf} from '@storybook/react';

export default {
  title: 'Buttons'
};

export const Buttons = () => {
  return (
    <div>
      <h1>Buttons</h1>
      <p>This is a description about the buttons.</p>
    </div>
  )
};

export const ButtonWithText = () => <Button onClick={action('clicked')}>Click Me!!</Button>;
export const ButtonWithText2 = () => <Button onClick={action('clicked')}>Click Me!!</Button>;

// storiesOf('My Button', module).add("default", () => <Button>Yo!</Button>);