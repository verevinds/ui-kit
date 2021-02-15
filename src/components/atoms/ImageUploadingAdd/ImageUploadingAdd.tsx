import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import type { ImageListType } from 'react-images-uploading';
import ReactImageUploading from 'react-images-uploading';
import './imageuploadingadd.css';

export type ImageUploadingAddProps = {
  initialImages?: ImageListType;
  callback: Dispatch<SetStateAction<never[]>>;
  acceptType?: string[];
  maxNumber?: number;
};

export const ImageUploadingAdd: React.FC<ImageUploadingAddProps> = ({
  initialImages,
  callback,
  acceptType = ['jpg', 'jpeg', 'webp', 'avif'],
  maxNumber = 69,
}) => {
  const [images, setImages] = useState<ImageListType>([]);

  useEffect(() => {
    if (initialImages) setImages(initialImages);
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
      dataURLKey='data_url'
    >
      {({ onImageUpload, isDragging, dragProps }) => (
        <div className='upload-add'>
          <button
            type='button'
            style={isDragging ? { color: 'red' } : undefined}
            onClick={onImageUpload}
            {...dragProps}
            className={'upload-add__btn-drop-drag-click'}
          >
            <span className={'upload-add__btn-drop-drag'}>Перетащите сюда</span>
            <span className={'upload-add__btn-text'}>или</span>
            <span className={'upload-add__btn-click'}>Нажмите</span>
          </button>
        </div>
      )}
    </ReactImageUploading>
  );
};

export default ImageUploadingAdd;
