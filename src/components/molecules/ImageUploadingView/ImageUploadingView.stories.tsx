import { Story } from '@storybook/react/types-6-0';
import type { ImageUploadingViewProps } from './ImageUploadingView';
import ImageUploadingView from './ImageUploadingView';
import React, { useState } from 'react';
import ImageUploadingAdd from '../../atoms/ImageUploadingAdd/ImageUploadingAdd';

export default {
  title: 'ImageUploadingView',
  component: ImageUploadingView,
  argTypes: { callback: { action: 'clicked' } },
};

const Template: Story<ImageUploadingViewProps> = args => {
  const [state, setState] = useState([]);
  return (
    <div style={{ ['backgroundColor']: 'aqua' }}>
      <ImageUploadingAdd callback={setState} initialImages={state} />
      <ImageUploadingView {...args} initialImages={state} callback={setState} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};
