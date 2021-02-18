import React, { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import 'focus-visible';
import cn from 'classnames';
import './checkbox.scss';

export type CustomError = FieldError | undefined;
export type CheckboxProps = InputHTMLAttributes<Element> & {
  variant?:
    | 'transparent'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light';
  isSwitch?: boolean;
};

export const Checkbox: React.FC<CheckboxProps> = props => {
  const {
    id,
    variant = 'primary',
    title,
    name,
    className,
    isSwitch,
    type ='checkbox',
    ...restProps
  } = props;

  return (
    <>
      <input
        id={id ?? name}
        type={type}
        {...restProps}
        className={cn(isSwitch && 'switch', className)}
      />
      <label htmlFor={id ?? name}> {title}</label>
    </>
  );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
