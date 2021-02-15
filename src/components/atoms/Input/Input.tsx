import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'transparent'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light';
  icon?: JSX.Element;
}

export const Input = ({ variant }) => {
  return (
    <div className={`inpt inpt-${variant}`}>
      <input className={'inpt__input'} />
      <button type='button' className={'inpt__button'}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default Input;
