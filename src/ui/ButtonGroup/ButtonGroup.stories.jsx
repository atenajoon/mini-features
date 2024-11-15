import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
};

const Template = (args) => (
  <ButtonGroup {...args}>
    <Button
      variation="primary"
      size="medium"
      onClick={() => console.log('Primary clicked')}
    >
      Primary
    </Button>
    <Button
      variation="secondary"
      size="medium"
      onClick={() => console.log('Secondary clicked')}
    >
      Secondary
    </Button>
    <Button
      variation="danger"
      size="medium"
      onClick={() => console.log('Danger clicked')}
    >
      Danger
    </Button>
  </ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {};
