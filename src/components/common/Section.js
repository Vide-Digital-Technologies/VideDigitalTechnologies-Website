import { jsx as _jsx } from "react/jsx-runtime";
import { twMerge } from 'tailwind-merge';
import Container from './Container';
const Section = ({ children, className = '', containerClassName = '' }) => {
    return (_jsx("section", { className: twMerge('py-16 lg:py-24', className), children: _jsx(Container, { className: containerClassName, children: children }) }));
};
export default Section;
