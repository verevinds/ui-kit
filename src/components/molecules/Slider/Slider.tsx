import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';

export default function Slider() {
  const [isPoint, toggleIsPoint] = useState(false);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const ref = useRef(null);
  // useEffect(() => {
  //   console.log({ startX });
  // }, [startX]);
  // useEffect(() => {
  //   console.log({ endX });
  // }, [endX]);

  useEffect(() => {
    const move = parseInt(Number(startX) - Number(endX)) / 2;
    console.log({ move });
    // window.scrollTo({
    //   left: -move,
    //   behavior: 'smooth',
    // });
    ref.current.scrollTo(scrollLeft + move, 0);
    console.dir(ref.current.scrollLeft);
    // ref.current.scrollLeft = ref.current.scrollLeft - move;
  }, [startX, endX]);

  const handlePointerDown = e => {
    setScrollLeft(ref.current.scrollLeft);
    setStartX(e.pageX);
    setEndX(e.pageX);
    toggleIsPoint(true);
  };
  const handlePointerOut = () => toggleIsPoint(false);
  const onMouseMove = e => {
    if (isPoint) setEndX(e.pageX);

    // setCoordinate({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };
  return (
    <div
      className='slider-wrapper'
      onMouseDown={handlePointerDown}
      onMouseUp={handlePointerOut}
      onPointerMove={onMouseMove}
      ref={ref}
    >
      <button className='slick-arrow prev'>
        <svg
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          data-icon='chevron-left'
          className='svg-inline--fa fa-chevron-left fa-w-10 '
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
        >
          <path
            fill='currentColor'
            d='M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z'
          ></path>
        </svg>
      </button>
      <div
        className='swiper-slide'
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerOut}
        onPointerMove={onMouseMove}
      >
        <a className='view__item' href='/catalog/view/manwear'>
          Мужская одежда
        </a>
      </div>
      <div
        className='swiper-slide'
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerOut}
        onPointerMove={onMouseMove}
      >
        <a className='view__item' href='/catalog/view/womanwear'>
          Женская одежда
        </a>
      </div>
      <div
        className='swiper-slide'
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerOut}
        onPointerMove={onMouseMove}
      >
        <a className='view__item view__active' href='/catalog/view/childwear'>
          Детская одежда
        </a>
      </div>
      <div
        className='swiper-slide'
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerOut}
        onPointerMove={onMouseMove}
      >
        <a className='view__item' href='/catalog/view/headwear'>
          Головные уборы
        </a>
      </div>
      <div
        className='swiper-slide'
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerOut}
        onPointerMove={onMouseMove}
      >
        <a className='view__item' href='/catalog/view/size_plus'>
          Одежда size+
        </a>
      </div>
      <div
        className='swiper-slide'
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerOut}
        onPointerMove={onMouseMove}
      >
        <a className='view__item' href='/catalog/view/tableware'>
          Посуда
        </a>
      </div>
      <div
        className='swiper-slide'
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerOut}
        onPointerMove={onMouseMove}
      >
        <a className='view__item' href='/catalog/view/accessory'>
          Аксессуары
        </a>
      </div>
      <div className='swiper-slide'>
        <a className='view__item' href='/catalog/view/cases'>
          Чехлы для телефонов
        </a>
      </div>
      <div className='swiper-slide'>
        <a className='view__item' href='/catalog/view/interior'>
          Товары для интерьера
        </a>
      </div>
      <div className='swiper-slide'>
        <a className='view__item' href='/catalog/view/odezhda'>
          Одежда
        </a>
      </div>
      <div className='swiper-slide'>
        <a className='view__item' href='/catalog/view/school'>
          Школа
        </a>
      </div>
      <button className='slick-arrow next'>
        <svg
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          data-icon='chevron-right'
          className='svg-inline--fa fa-chevron-right fa-w-10 '
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
        >
          <path
            fill='currentColor'
            d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'
          ></path>
        </svg>
      </button>
    </div>
  );
}
