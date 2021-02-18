import { Story } from '@storybook/react/types-6-0';
import type { CheckboxProps } from '.';
import Checkbox from '.';
import React, { useEffect, useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />
export const Default = Template.bind({});

Default.args = {
  id: 'd1',
  disabled: false,
  className: 'addClass',
  variant: 'primary',
  title: 'В наличии',
  name:'1',
  isSwitch: false
};

export const Empty = Template.bind({});
Empty.args = {
};
export const Radio = Template.bind({});
Radio.args = {
  type: 'radio',
  name:'1',
  title: 'В наличии',
};