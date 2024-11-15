import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  onChange: (e) => console.log(e.target.checked),
  disabled: false,
  id: 'checkbox1',
  children: 'Default Checkbox',
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  onChange: (e) => console.log(e.target.checked),
  disabled: false,
  id: 'checkbox2',
  children: 'Checked Checkbox',
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  onChange: (e) => console.log(e.target.checked),
  disabled: true,
  id: 'checkbox3',
  children: 'Disabled Checkbox',
};
