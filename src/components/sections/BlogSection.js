import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../common/Section';
const blogPosts = [
    {
        image: '/images/blog-1.jpg',
        category: 'Insurance',
        date: 'Jan 01, 2024',
        title: 'How to choose the right insurance plan',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    // Add more blog posts
];
const BlogSection = () => {
    return (_jsxs(Section, { children: [_jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [_jsx("h4", { className: "text-primary font-bold mb-2", children: "Our Blog" }), _jsx("h1", { className: "text-4xl font-bold text-dark mb-4", children: "Latest Blog & News" }), _jsx("p", { className: "text-body", children: "Stay updated with our latest insights and news about insurance and financial planning." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: blogPosts.map((post, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, className: "bg-light rounded-lg overflow-hidden group", children: [_jsxs("div", { className: "relative overflow-hidden", children: [_jsx("img", { src: post.image, alt: post.title, className: "w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" }), _jsx("div", { className: "absolute bottom-0 left-0 bg-white px-4 py-2", children: _jsx("span", { className: "text-primary font-medium", children: post.category }) })] }), _jsxs("div", { className: "p-6", children: [_jsx("p", { className: "text-body mb-2", children: post.date }), _jsx("h3", { className: "text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors", children: post.title }), _jsx("p", { className: "text-body mb-4", children: post.excerpt }), _jsx(Link, { to: "/blog", className: "text-dark font-medium hover:text-primary transition-colors", children: "Read More \u2192" })] })] }, index))) })] }));
};
export default BlogSection;
