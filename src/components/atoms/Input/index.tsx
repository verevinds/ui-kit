import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { FieldError, UseFormMethods } from 'react-hook-form';
import 'focus-visible';
import cn from 'classnames';
import './input.scss';

export type CustomError = FieldError | undefined;
export type InputProps = InputHTMLAttributes<Element> & {
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
  register?: Pick<UseFormMethods<{}>, 'register'>;
};

export const Input: React.FC<InputProps> = props => {
  const {
    onClick,
    error,
    icon,
    text,
    title,
    className,
    name,
    id,
    type,
    placeholder,
    variant,
    ...restProps
  } = props;
  const [focus, setFocus] = useState(false);
  const [noEmpty, toggleNoEmpty] = useState(false);
  useEffect(()=>{
    if(restProps.value)
      setFocus(true)
  },[restProps.value])
  return (
    <div className={cn('inpt-wrapper', className)}>
      <div
        className={cn(
          'inpt',
          variant && `inpt-${variant}`,
          focus && 'inpt-focus',
          error && 'inpt-error',
        )}
      >
        <input
          id={id}
          name={name}
          className={cn(
            'inpt__input',
            'js-focus-visible',
            (focus || noEmpty) && title && 'inpt__input-focus',
            (icon || text) && 'inpt__input-with-btn',
          )}
          placeholder={title ? undefined : placeholder}
          onFocus={() => setFocus(true)}
          onBlur={({ target }) => {
            const { value } = target;

            if (value) toggleNoEmpty(true);
            else toggleNoEmpty(false);

            setFocus(false);
          }}
          autoComplete='off'
          type={type}
          {...restProps}
        />
        {title && (
          <label
            htmlFor={id}
            className={cn(
              'inpt__title',
              (focus || noEmpty) && 'inpt__title-focus',
            )}
          >
            {title}
          </label>
        )}
        {(icon || text) && (
          <button
            type='button'
            className={cn(
              'inpt__button',
              focus && title && 'inpt__button-focus',
            )}
            onClick={onClick}
          >
            <span className={cn('inpt__icon', text && 'inpt__icon-with-text')}>
              {icon}
            </span>
            <span className='inpt__text'>{text}</span>
          </button>
        )}
      </div>
      {error && <label className={'inpt__label'}>{`*${error}`}</label>}
    </div>
  );
};

Input.displayName = 'Input';

export default Input;
