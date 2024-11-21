import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
const contactDetails = [
    {
        icon: FaPhone,
        title: 'Phone',
        details: ['+1 (234) 567-8900', '+1 (234) 567-8901']
    },
    {
        icon: FaEnvelope,
        title: 'Email',
        details: ['info@videdigital.com', 'support@videdigital.com']
    },
    {
        icon: FaMapMarkerAlt,
        title: 'Location',
        details: ['123 Digital Avenue', 'New York, NY 10001']
    },
    {
        icon: FaClock,
        title: 'Working Hours',
        details: ['Mon - Fri: 9:00 - 18:00', 'Sat: By Appointment']
    }
];
const ContactInfo = () => {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "bg-light p-8 rounded-lg", children: [_jsx("h2", { className: "text-2xl font-bold text-dark mb-6", children: "Contact Information" }), _jsx("div", { className: "space-y-6", children: contactDetails.map((item, index) => (_jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4", children: _jsx(item.icon, { className: "text-xl text-primary" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-bold text-dark mb-2", children: item.title }), item.details.map((detail, i) => (_jsx("p", { className: "text-body", children: detail }, i)))] })] }, index))) })] }));
};
export default ContactInfo;
