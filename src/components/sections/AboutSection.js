import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { FaUsers, FaCheckCircle, FaAward } from 'react-icons/fa';
import Section from '../common/Section';
const stats = [
    {
        icon: FaUsers,
        count: '1234',
        title: 'Team Members',
        delay: 0.1
    },
    {
        icon: FaCheckCircle,
        count: '1234',
        title: 'Happy Clients',
        delay: 0.3
    },
    {
        icon: FaAward,
        count: '1234',
        title: 'Awards Win',
        delay: 0.5
    }
];
const AboutSection = () => {
    return (_jsx(Section, { className: "bg-light", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center", children: [_jsx(motion.div, { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.5 }, children: _jsx("img", { src: "/images/about.jpg", alt: "About Us", className: "rounded-lg w-full" }) }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsx("h4", { className: "text-primary font-bold mb-2", children: "About Us" }), _jsx("h1", { className: "text-4xl font-bold text-dark mb-4", children: "We Help Our Clients To Grow Their Business" }), _jsx("p", { className: "text-body mb-4", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: stats.map((stat, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: stat.delay }, className: "text-center p-6 bg-white rounded-lg", children: [_jsx(stat.icon, { className: "text-primary text-3xl mx-auto mb-3" }), _jsx("h1", { className: "text-dark text-3xl font-bold mb-2", children: stat.count }), _jsx("p", { className: "text-body", children: stat.title })] }, index))) })] })] }) }));
};
export default AboutSection;
