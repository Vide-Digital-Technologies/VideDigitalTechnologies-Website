import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaTag } from 'react-icons/fa';
const categories = [
    { name: 'Life Insurance', count: 15 },
    { name: 'Health Insurance', count: 12 },
    { name: 'Auto Insurance', count: 8 },
    { name: 'Home Insurance', count: 10 },
    { name: 'Business Insurance', count: 5 }
];
const recentPosts = [
    {
        title: 'Understanding Life Insurance Policies',
        date: 'March 15, 2024',
        image: '/images/blog-1.jpg'
    },
    {
        title: 'How to Choose the Right Health Coverage',
        date: 'March 10, 2024',
        image: '/images/blog-2.jpg'
    },
    {
        title: 'Top Tips for Auto Insurance',
        date: 'March 5, 2024',
        image: '/images/blog-3.jpg'
    }
];
const tags = [
    'Insurance', 'Health', 'Life', 'Auto', 'Home', 'Business',
    'Coverage', 'Protection', 'Family', 'Investment'
];
const Sidebar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (_jsxs("div", { className: "space-y-8", children: [_jsx("div", { className: "bg-light p-6 rounded-lg", children: _jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", placeholder: "Search...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full px-4 py-2 pr-10 rounded-lg border border-gray-200 focus:border-primary focus:outline-none" }), _jsx(FaSearch, { className: "absolute right-3 top-3 text-body" })] }) }), _jsxs("div", { className: "bg-light p-6 rounded-lg", children: [_jsx("h3", { className: "text-xl font-bold text-dark mb-4", children: "Categories" }), _jsx("ul", { className: "space-y-3", children: categories.map((category, index) => (_jsx("li", { children: _jsxs(Link, { to: `/blog/category/${category.name.toLowerCase()}`, className: "flex items-center justify-between text-body hover:text-primary transition-colors", children: [_jsx("span", { children: category.name }), _jsxs("span", { children: ["(", category.count, ")"] })] }) }, index))) })] }), _jsxs("div", { className: "bg-light p-6 rounded-lg", children: [_jsx("h3", { className: "text-xl font-bold text-dark mb-4", children: "Recent Posts" }), _jsx("div", { className: "space-y-4", children: recentPosts.map((post, index) => (_jsxs(Link, { to: "/blog", className: "flex items-start space-x-4 group", children: [_jsx("img", { src: post.image, alt: post.title, className: "w-20 h-20 object-cover rounded" }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-dark group-hover:text-primary transition-colors", children: post.title }), _jsx("p", { className: "text-sm text-body", children: post.date })] })] }, index))) })] }), _jsxs("div", { className: "bg-light p-6 rounded-lg", children: [_jsx("h3", { className: "text-xl font-bold text-dark mb-4", children: "Tags" }), _jsx("div", { className: "flex flex-wrap gap-2", children: tags.map((tag, index) => (_jsxs(Link, { to: `/blog/tag/${tag.toLowerCase()}`, className: "px-3 py-1 bg-white rounded text-body hover:text-primary transition-colors", children: [_jsx(FaTag, { className: "inline-block mr-1 text-xs" }), tag] }, index))) })] })] }));
};
export default Sidebar;
