import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variation: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variation: 'primary',
  size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variation: 'secondary',
  size: 'medium',
};

export const Danger = Template.bind({});
Danger.args = {
  variation: 'danger',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  variation: 'primary',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  variation: 'primary',
  size: 'large',
};
