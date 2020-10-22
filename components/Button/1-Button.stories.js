import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './index';

export default {
  title: 'Buttons',
  component: Button,
  // parameters: {
  //   docs: {
  //     storyDescription: "Buttons with variants",
  //   },
  // },
  argTypes: {
    variant: { description: 'primary, info, warning, danger' },
  },
};

const Template = (args) => <Button onClick={action('clicked')} {...args}>{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Button'
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  children: 'Button'
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Button'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Button'
};

