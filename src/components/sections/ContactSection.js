import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
const contactInfo = [
    {
        icon: FaPhone,
        title: 'Phone Number',
        details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
        icon: FaEnvelope,
        title: 'Email Address',
        details: ['info@lifesure.com', 'support@lifesure.com']
    },
    {
        icon: FaMapMarkerAlt,
        title: 'Office Location',
        details: ['123 Insurance Street', 'New York, NY 10001']
    }
];
const ContactSection = () => {
    return (_jsxs(Section, { className: "bg-light", children: [_jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [_jsx("h4", { className: "text-primary font-bold mb-2", children: "Contact Us" }), _jsx("h1", { className: "text-4xl font-bold text-dark mb-4", children: "Get In Touch With Us" }), _jsx("p", { className: "text-body", children: "Have questions? We're here to help. Contact us through any of these channels." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: contactInfo.map((info, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, className: "bg-white p-8 rounded-lg text-center", children: [_jsx("div", { className: "w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6", children: _jsx(info.icon, { className: "text-2xl text-primary" }) }), _jsx("h3", { className: "text-xl font-bold text-dark mb-4", children: info.title }), info.details.map((detail, i) => (_jsx("p", { className: "text-body", children: detail }, i)))] }, index))) })] }));
};
export default ContactSection;
