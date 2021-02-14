/* eslint-disable react/button-has-type */
import './button.css';
import 'focus-visible';

import cn from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
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
};

const Button: React.FC<ButtonProps> = props => {
  const { children, variant = 'primary', icon } = props;
  return (
    <button
      className={cn('btn', `btn-${variant}`, 'js-focus-visible')}
      {...props}
    >
      {icon && <span className={cn(children && 'btn-icon')}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
