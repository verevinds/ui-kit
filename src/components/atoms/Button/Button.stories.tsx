import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template: Story<ButtonProps> = args => <Button {...args} />;
export const Default = Template.bind({});

Default.args = {
  children: 'Отправить',
  type: 'button',
  disabled: false,
};

export const Empty = Template.bind({});

Empty.args = {
  disabled: false,
};

export const ButtonWithIcon = Template.bind({});

ButtonWithIcon.args = {
  children: 'Отправить',
  type: 'button',
  icon: <FontAwesomeIcon icon={faTrash} />,
  disabled: false,
};
export const ButtonWithIconAndNoText = Template.bind({});

ButtonWithIconAndNoText.args = {
  type: 'button',
  icon: <FontAwesomeIcon icon={faTrash} />,
  disabled: false,
};
