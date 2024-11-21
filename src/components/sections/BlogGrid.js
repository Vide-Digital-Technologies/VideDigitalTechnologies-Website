import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const blogPosts = [
    {
        id: 1,
        title: 'The Future of Digital Marketing in 2024',
        excerpt: 'Explore emerging trends and technologies shaping the digital marketing landscape and how businesses can stay ahead.',
        image: '/images/blog-1.jpg',
        category: 'Digital Marketing',
        date: 'March 15, 2024',
        author: 'Sarah Chen'
    },
    {
        id: 2,
        title: 'Maximizing ROI with Social Media Marketing',
        excerpt: 'Learn effective strategies to improve your social media marketing return on investment and engage your target audience.',
        image: '/images/blog-2.jpg',
        category: 'Social Media',
        date: 'March 10, 2024',
        author: 'Mike Anderson'
    }
];
const BlogGrid = ({ currentPage, onPageChange }) => {
    const postsPerPage = 6;
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    return (_jsxs("div", { children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8", children: blogPosts.map((post, index) => (_jsxs(motion.article, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, className: "bg-white rounded-lg overflow-hidden shadow-sm", children: [_jsxs("div", { className: "relative overflow-hidden", children: [_jsx("img", { src: post.image, alt: post.title, className: "w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300" }), _jsx("div", { className: "absolute bottom-0 left-0 bg-primary text-white px-4 py-2", children: post.category })] }), _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center text-body mb-4", children: [_jsx("span", { children: post.date }), _jsx("span", { className: "mx-2", children: "\u2022" }), _jsx("span", { children: post.author })] }), _jsx("h3", { className: "text-xl font-bold text-dark mb-3 hover:text-primary transition-colors", children: _jsx(Link, { to: `/blog/${post.id}`, children: post.title }) }), _jsx("p", { className: "text-body mb-4", children: post.excerpt }), _jsx(Link, { to: `/blog/${post.id}`, className: "text-primary font-medium hover:text-dark transition-colors", children: "Read More \u2192" })] })] }, post.id))) }), totalPages > 1 && (_jsx("div", { className: "flex justify-center space-x-2", children: [...Array(totalPages)].map((_, index) => (_jsx("button", { onClick: () => onPageChange(index + 1), className: `w-10 h-10 rounded-full ${currentPage === index + 1
                        ? 'bg-primary text-white'
                        : 'bg-light text-dark hover:bg-primary hover:text-white'} transition-colors`, children: index + 1 }, index))) }))] }));
};
export default BlogGrid;
