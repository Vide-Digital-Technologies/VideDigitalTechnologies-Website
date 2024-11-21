import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import BlogGrid from '../components/sections/BlogGrid';
import Sidebar from '../components/blog/Sidebar';
const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (_jsxs(_Fragment, { children: [_jsx(PageHeader, { title: "Latest Blog", breadcrumbs: [
                    { label: 'Home', path: '/' },
                    { label: 'Blog', path: '/blog' }
                ] }), _jsx("div", { className: "container mx-auto px-4 py-16", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-2", children: _jsx(BlogGrid, { currentPage: currentPage, onPageChange: setCurrentPage }) }), _jsx(Sidebar, {})] }) })] }));
};
export default Blog;
