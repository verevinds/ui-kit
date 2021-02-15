import React, { SetStateAction, useEffect, useState } from 'react';
import ReactImageUploading from 'react-images-uploading';
import type { ImageListType } from 'react-images-uploading';
import './imageuploadingview.css';
import { Button } from '../../atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Slider from '../../atoms/Slider/Slider';

export type ImageUploadingViewProps = {
  initialImages: ImageListType;
  callback: (value: SetStateAction<never[]>) => void;
};
export const ImageUploadingView = ({ initialImages, callback }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(initialImages);
  }, [initialImages]);

  const maxNumber = 69;

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
      dataURLKey='data_url'
    >
      {({ imageList, onImageUpdate, onImageRemove }) => (
          <Slider slidesPerView='auto' spaceBetween={10} className='upload-view' navigation={
            {
              disabledClass: 'upload-view__arrow-disabled',
            }
          }>
            {imageList.map((image, index) => (
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
            ))}
          </Slider>
      )}
    </ReactImageUploading>
  );
};

export default ImageUploadingView;
