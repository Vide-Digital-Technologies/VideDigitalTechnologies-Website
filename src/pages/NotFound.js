import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
const NotFound = () => {
    return (_jsx("div", { className: "min-h-[60vh] flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-9xl font-bold text-primary mb-8", children: "404" }), _jsx("h2", { className: "text-4xl font-bold text-dark mb-4", children: "Page Not Found" }), _jsx("p", { className: "text-body mb-8", children: "The page you are looking for might have been removed or is temporarily unavailable." }), _jsxs(Link, { to: "/", className: "inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-dark transition-colors", children: [_jsx(FaHome, { className: "mr-2" }), "Back to Home"] })] }) }));
};
export default NotFound;
