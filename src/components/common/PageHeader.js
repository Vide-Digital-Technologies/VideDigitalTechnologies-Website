import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const PageHeader = ({ title, breadcrumbs }) => {
    return (_jsx("div", { className: "bg-light py-16", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "text-center", children: [_jsx("h1", { className: "text-4xl font-bold text-dark mb-4", children: title }), _jsx("nav", { children: _jsx("ol", { className: "flex items-center justify-center space-x-2", children: breadcrumbs.map((item, index) => (_jsxs("li", { className: "flex items-center", children: [index > 0 && _jsx("span", { className: "mx-2 text-body", children: "/" }), item.path === '#' ? (_jsx("span", { className: "text-body", children: item.label })) : (_jsx(Link, { to: item.path, className: `${index === breadcrumbs.length - 1
                                            ? 'text-primary'
                                            : 'text-body hover:text-primary'} transition-colors`, children: item.label }))] }, index))) }) })] }) }) }));
};
export default PageHeader;
