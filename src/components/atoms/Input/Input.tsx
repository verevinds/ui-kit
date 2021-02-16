import React, { InputHTMLAttributes, useState } from 'react';
import { FieldError, UseFormMethods } from 'react-hook-form';
import 'focus-visible';
import cn from 'classnames';
import './input.css';

export type CustomError = FieldError | undefined;
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
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
  error?: string;
  text?: string;
} & Pick<UseFormMethods<{}>, 'register'>;

export const Input = (props, ref) => {
  const { variant, onClick, error, icon, text, ...restProps } = props;
  const [focus, setFocus] = useState(false);

  return (
    <div className='inpt-wrapper'>
      <div
        className={cn(
          'inpt',
          `inpt-${variant}`,
          focus && 'inpt-focus',
          error && 'inpt-error',
        )}
      >
        <input
          {...restProps}
          className={cn('inpt__input', restProps.className, 'js-focus-visible')}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {(icon || text) && (
          <button type='button' className={'inpt__button'} onClick={onClick}>
            <span className='inpt__icon'>{icon}</span>
            <span className='inpt__text'>{text}</span>
          </button>
        )}
      </div>
      {error && <label className={'inpt__label'}>{`*${error}`}</label>}
    </div>
  );
};

export default Input;
