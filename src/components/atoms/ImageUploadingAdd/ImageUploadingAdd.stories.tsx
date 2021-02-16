
import { Story } from '@storybook/react/types-6-0';
import type { ImageUploadingAddProps } from './';
import ImageUploadingAdd from './';
import React from 'react';


export default {
  title: 'ImageUploadingAdd',
  component: ImageUploadingAdd,
  argTypes: { callback: { action: 'clicked', } },
};

const Template: Story<ImageUploadingAddProps> = args => <ImageUploadingAdd {...args} />;
export const Default = Template.bind({});

Default.args = {
};
