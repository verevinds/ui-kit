import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import ReactImageUploading, {
  ImageType,
  ImageUploadingPropsType,
} from 'react-images-uploading';
import type { ImageListType } from 'react-images-uploading';
import './imageuploadingview.scss';
import { Button } from '../../atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import SwiperCore, { Navigation, Pagination, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ExportInterface } from 'react-images-uploading/dist/typings';

SwiperCore.use([Pagination, Navigation, Virtual]);

export type ImageUploadingViewProps = {
  initialImages: ImageListType;
  callback: (value: SetStateAction<never[]>) => void;
  acceptType?: string[];
  maxNumber?: number;
};
export const ImageUploadingView: React.FC<ImageUploadingViewProps> = ({
  initialImages,
  callback,
  acceptType = ['jpg', 'jpeg', 'webp', 'avif'],
  maxNumber = 69,
}) => {
  const [images, setImages] = useState<ImageListType>([]);

  useEffect(() => {
    setImages(initialImages);
  }, [initialImages]);

  const onChange = (imageList: ImageListType) => {
    if (callback) callback(imageList as never[]);
    setImages(imageList as never[]);
  };
  const renderItem = useCallback(
    ({
      onImageUpdate,
      onImageRemove,
    }: Pick<ExportInterface, 'onImageRemove' | 'onImageUpdate'>) => (
      image: ImageType,
      index: number,
    ) => (
      <SwiperSlide key={image['data_url']} virtualIndex={index}>
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
    ),
    [],
  );

  const renderSwiper: ImageUploadingPropsType['children'] = useCallback(
    ({ imageList, onImageUpdate, onImageRemove }: ExportInterface) => (
      <Swiper
        spaceBetween={10}
        slidesPerView='auto'
        watchOverflow={true}
        navigation
        pagination={{ clickable: true }}
        className='upload-view'
        virtual
      >
        {imageList.map(renderItem({ onImageUpdate, onImageRemove }))}
      </Swiper>
    ),
    [renderItem],
  );

  return (
    <ReactImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      acceptType={acceptType}
      dataURLKey='data_url'
    >
      {renderSwiper}
    </ReactImageUploading>
  );
};

export default ImageUploadingView;
