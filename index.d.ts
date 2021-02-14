declare module '@verevinds/ui-kit/components/atoms/Button/Button' {
  import 'focus-visible';
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
  const Button: React.FC<ButtonProps>;
  export default Button;
}
declare module '@verevinds/ui-kit/index' {
  import Button from '@verevinds/ui-kit/components/atoms/Button/Button';

  export { Button };
}
declare module '@verevinds/ui-kit' {
  import main = require('@verevinds/ui-kit/src/index');

  export = main;
}
