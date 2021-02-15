import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Story } from '@storybook/react/types-6-0';
import type { InputProps } from './Input';
import Input from './Input';
import React from 'react';

export default {
  title: 'Button',
  component: Input,
};

const Template: Story<InputProps> = args => <Input {...args} />;
export const Default = Template.bind({});

Default.args = {
  disabled: false,
  className: 'addClass',
  variant: 'primary',
};

export const Empty = Template.bind({});

Empty.args = {
  disabled: false,
};
