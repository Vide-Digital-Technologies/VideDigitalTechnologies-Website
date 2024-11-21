import { jsx as _jsx } from "react/jsx-runtime";
import { twMerge } from 'tailwind-merge';
const Button = ({ variant = 'primary', size = 'md', rounded = false, children, className = '', ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200';
    const variants = {
        primary: 'bg-primary text-white hover:bg-dark',
        light: 'bg-light text-primary hover:bg-dark hover:text-white',
        dark: 'bg-dark text-white hover:bg-light hover:text-primary'
    };
    const sizes = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3'
    };
    const classes = twMerge(baseStyles, variants[variant], sizes[size], rounded ? 'rounded-full' : 'rounded-lg', className);
    return (_jsx("button", { className: classes, ...props, children: children }));
};
export default Button;
