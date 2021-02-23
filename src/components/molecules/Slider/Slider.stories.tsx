import { Story } from '@storybook/react/types-6-0';
import Slider from './Slider';
import React, { useState } from 'react';
import ImageUploadingAdd from '../../atoms/ImageUploadingAdd';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

export default {
  title: 'Slider',
  component: Slider,
  argTypes: { callback: { action: 'clicked' } },
};

const Template = args => (
  <div style={{ width: '500px', backgroundColor: '#000' }}>
    <Slider {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {};
