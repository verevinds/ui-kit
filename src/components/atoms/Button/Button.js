import 'focus-visible';
import './button.css';
import cn from 'classnames';
import React from 'react';
export const Button = props => {
    const { children, variant = 'primary', icon, className } = props;
    return (React.createElement("button", Object.assign({}, props, { className: cn('btn', `btn-${variant}`, 'js-focus-visible', className && className) }),
        icon && React.createElement("span", { className: cn(children && 'btn-icon') }, icon),
        React.createElement("span", null, children)));
};
export default Button;
//# sourceMappingURL=Button.js.map