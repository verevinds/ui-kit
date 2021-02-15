import 'focus-visible';
import './button.css';
import React, { ButtonHTMLAttributes } from 'react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'transparent' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-warning' | 'outline-danger' | 'outline-info' | 'outline-light';
    icon?: JSX.Element;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
