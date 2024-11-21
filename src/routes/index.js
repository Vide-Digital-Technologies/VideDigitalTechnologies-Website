import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import NotFound from '../pages/NotFound';
const AppRoutes = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/services", element: _jsx(Services, {}) }), _jsx(Route, { path: "/blog", element: _jsx(Blog, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/faq", element: _jsx(FAQ, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }));
};
export default AppRoutes;
