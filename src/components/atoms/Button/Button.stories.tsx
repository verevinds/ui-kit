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

export const Empty = Template.bind({});

Empty.args = {};

export const Default = Template.bind({});

Default.args = {
  children: 'Отправить',
  type: 'button',
};

export const ButtonWithIcon = Template.bind({});

ButtonWithIcon.args = {
  children: 'Отправить',
  type: 'button',
  icon: <FontAwesomeIcon icon={faTrash} />,
};
export const ButtonWithIconAndNoText = Template.bind({});

ButtonWithIconAndNoText.args = {
  type: 'button',
  icon: <FontAwesomeIcon icon={faTrash} />,
};
