import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaStar } from 'react-icons/fa';
import Section from '../common/Section';
const testimonials = [
    {
        name: 'Sarah Chen',
        profession: 'CEO, TechStart Inc.',
        image: '/images/testimonial-1.jpg',
        rating: 5,
        text: 'Vide Digital transformed our online presence completely. Their SEO strategy helped us increase organic traffic by 200% in just 6 months.'
    },
    {
        name: 'Michael Rodriguez',
        profession: 'Marketing Director, GrowthBox',
        image: '/images/testimonial-2.jpg',
        rating: 5,
        text: 'Their data-driven approach to digital marketing and creative content strategy helped us achieve unprecedented growth.'
    }
];
const Testimonials = () => {
    return (_jsxs(Section, { children: [_jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [_jsx("h4", { className: "text-primary font-bold mb-4", children: "Success Stories" }), _jsx("h1", { className: "text-4xl font-bold text-dark mb-6", children: "Client Testimonials" }), _jsx("p", { className: "text-body", children: "See how we've helped businesses achieve their digital marketing goals and drive growth." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: testimonials.map((testimonial, index) => (_jsx("div", { className: "bg-light rounded-lg overflow-hidden", children: _jsxs("div", { className: "flex p-6", children: [_jsx("div", { className: "w-1/3", children: _jsx("img", { src: testimonial.image, alt: testimonial.name, className: "w-full h-full object-cover rounded" }) }), _jsxs("div", { className: "w-2/3 pl-6", children: [_jsx("h4", { className: "text-dark font-bold mb-1", children: testimonial.name }), _jsx("p", { className: "text-body mb-3", children: testimonial.profession }), _jsx("div", { className: "flex text-primary mb-3", children: [...Array(5)].map((_, i) => (_jsx(FaStar, { className: i < testimonial.rating ? 'text-primary' : 'text-body' }, i))) }), _jsx("p", { className: "text-body", children: testimonial.text })] })] }) }, index))) })] }));
};
export default Testimonials;
