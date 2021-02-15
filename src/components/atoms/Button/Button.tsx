/* eslint-disable react/button-has-type */
import 'focus-visible';
import './button.css';

import cn from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'transparent'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-warning'
    | 'outline-danger'
    | 'outline-info'
    | 'outline-light';
  icon?: JSX.Element;
}

export const Button: React.FC<ButtonProps> = props => {
  const { children, variant = 'primary', icon, className } = props;
  return (
    <button
      {...props}
      className={cn(
        'btn',
        `btn-${variant}`,
        'js-focus-visible',
        className && className,
      )}
    >
      {icon && <span className={cn(children && 'btn-icon')}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
export default Button;
