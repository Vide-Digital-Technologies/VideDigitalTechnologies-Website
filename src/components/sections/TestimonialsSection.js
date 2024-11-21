import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { FaStar } from 'react-icons/fa';
const testimonials = [
    {
        name: 'Sarah Chen',
        position: 'CEO, TechStart Inc.',
        image: '/images/testimonial-1.jpg',
        rating: 5,
        text: 'Vide Digital transformed our online presence completely. Their SEO strategy helped us increase organic traffic by 200% in just 6 months.'
    },
    {
        name: 'Michael Rodriguez',
        position: 'Marketing Director, GrowthBox',
        image: '/images/testimonial-2.jpg',
        rating: 5,
        text: 'Their data-driven approach to digital marketing and creative content strategy helped us achieve unprecedented growth in our target markets.'
    },
    {
        name: 'Emily Thompson',
        position: 'Founder, EcoStyle',
        image: '/images/testimonial-3.jpg',
        rating: 5,
        text: 'Working with Vide Digital has been transformative for our e-commerce business. Their expertise in PPC and social media marketing drove significant ROI.'
    }
];
const TestimonialsSection = () => {
    return (_jsxs(Section, { className: "bg-light", children: [_jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [_jsx("h4", { className: "text-primary font-bold mb-2", children: "Testimonials" }), _jsx("h1", { className: "text-4xl font-bold text-dark mb-4", children: "Client Success Stories" }), _jsx("p", { className: "text-body", children: "See how we've helped businesses achieve their digital marketing goals" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: testimonials.map((testimonial, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, className: "bg-white p-6 rounded-lg shadow-sm", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("img", { src: testimonial.image, alt: testimonial.name, className: "w-16 h-16 rounded-full object-cover mr-4" }), _jsxs("div", { children: [_jsx("h3", { className: "text-dark font-bold", children: testimonial.name }), _jsx("p", { className: "text-body text-sm", children: testimonial.position })] })] }), _jsx("div", { className: "flex text-primary mb-3", children: [...Array(testimonial.rating)].map((_, i) => (_jsx(FaStar, {}, i))) }), _jsx("p", { className: "text-body", children: testimonial.text })] }, index))) })] }));
};
export default TestimonialsSection;
