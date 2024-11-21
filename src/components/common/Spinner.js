import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Spinner = () => {
    return (_jsx("div", { className: "fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center", children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" }), _jsx("span", { className: "sr-only", children: "Loading..." })] }) }));
};
export default Spinner;
