import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import ReactImageUploading, {
  ImageUploadingPropsType,
} from 'react-images-uploading';
import type { ImageListType } from 'react-images-uploading';
import './imageuploadingview.css';
import { Button } from '../../atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import SwiperCore, {
  Autoplay,
  Controller,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([EffectFade, Pagination, Navigation]);

export type ImageUploadingViewProps = {
  initialImages: ImageListType;
  callback: (value: SetStateAction<never[]>) => void;
  acceptType?: string[];
  maxNumber?: number;
};
export const ImageUploadingView = ({
  initialImages,
  callback,
  acceptType = ['jpg', 'jpeg', 'webp', 'avif'],
  maxNumber = 69,
}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(initialImages);
  }, [initialImages]);

  const onChange = (imageList: ImageListType) => {
    if (callback) callback(imageList as never[]);
    setImages(imageList as never[]);
  };

  return (
    <ReactImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      acceptType={acceptType}
      dataURLKey='data_url'
    >
      {({ imageList, onImageUpdate, onImageRemove }) => (
        <Swiper
          spaceBetween={10}
          slidesPerView='auto'
          watchOverflow={true}
          navigation
          pagination={{ clickable: true }}
          className='upload-view'
        >
          {imageList.map((image, index) => (
            <SwiperSlide>
              <div key={image.dataURL} className='upload-view__image-item'>
                <img
                  src={image['data_url']}
                  alt=''
                  height='150'
                  width='150'
                  className='upload-view__image'
                />
                <div className='upload-view__btn-wrapper'>
                  <Button
                    type='button'
                    onClick={() => onImageUpdate(index)}
                    className='upload-view__btn upload-view__btn-upload'
                    variant='outline-primary'
                    icon={<FontAwesomeIcon icon={faPen} />}
                  />
                  <Button
                    type='button'
                    onClick={() => onImageRemove(index)}
                    className='upload-view__btn upload-view__btn-remove'
                    variant='outline-danger'
                    icon={<FontAwesomeIcon icon={faTrash} />}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </ReactImageUploading>
  );
};

export default ImageUploadingView;
