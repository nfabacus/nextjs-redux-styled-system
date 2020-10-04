import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './index';
// import {storiesOf} from '@storybook/react';

export default {
  title: 'Buttons'
};

const Template = (args) => <Button {...args}>Click</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};

export const ButtonWithText = () => <Button onClick={action('clicked')}>Click Me!!</Button>;
export const ButtonWithText2 = () => <Button onClick={action('clicked')}>Click Me!!</Button>;

// storiesOf('My Button', module).add("default", () => <Button>Yo!</Button>);