declare module '@verevinds/ui-kit/components/atoms/Button/Button' {
  import './button.css';
  import 'focus-visible';
  import React, { ButtonHTMLAttributes } from 'react';
  export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
      variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-warning' | 'outline-danger' | 'outline-info' | 'outline-light';
      icon?: JSX.Element;
  };
  const Button: React.FC<ButtonProps>;
  export default Button;

}
declare module '@verevinds/ui-kit/components/atoms/Button/Button.stories' {
  import { Story } from '@storybook/react/types-6-0';
  import React from 'react';
  import { ButtonProps } from '@verevinds/ui-kit/components/atoms/Button/Button';
  const _default: {
      title: string;
      component: React.FC<ButtonProps>;
  };
  export default _default;
  export const Default: Story<ButtonProps>;
  export const Empty: Story<ButtonProps>;
  export const ButtonWithIcon: Story<ButtonProps>;
  export const ButtonWithIconAndNoText: Story<ButtonProps>;

}
declare module '@verevinds/ui-kit/components/atoms/Button/index' {
  export { default } from '@verevinds/ui-kit/components/atoms/Button/Button';

}
declare module '@verevinds/ui-kit/index' {
  import Button from '@verevinds/ui-kit/components/atoms/Button/index';
  export { Button };

}
declare module '@verevinds/ui-kit' {
  import main = require('@verevinds/ui-kit/src/index');
  export = main;
}