import { jsx as _jsx } from "react/jsx-runtime";
import { twMerge } from 'tailwind-merge';
const Container = ({ children, className = '' }) => {
    return (_jsx("div", { className: twMerge('container mx-auto px-4', className), children: children }));
};
export default Container;
