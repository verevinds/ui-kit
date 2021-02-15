import React from 'react';
import SwiperCore, {
  Autoplay,
  Controller,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import './slider.css';

SwiperCore.use([
  EffectFade,
  Pagination,
  Scrollbar,
  Navigation,
  Controller,
  Autoplay,
]);

const Slider: React.FunctionComponent<Swiper> = props => {
  const { children } = props;

  return (
      <Swiper {...props}>
        {React.Children.map(children, child => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
  );
};

export default Slider;
