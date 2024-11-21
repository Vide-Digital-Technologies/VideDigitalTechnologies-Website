import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "bg-light p-8 rounded-lg", children: [_jsx("h2", { className: "text-2xl font-bold text-dark mb-6", children: "Send Us a Message" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsx("input", { type: "text", placeholder: "Your Name", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), className: "w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:outline-none", required: true }), _jsx("input", { type: "email", placeholder: "Your Email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), className: "w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:outline-none", required: true })] }), _jsx("input", { type: "text", placeholder: "Subject", value: formData.subject, onChange: (e) => setFormData({ ...formData, subject: e.target.value }), className: "w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:outline-none", required: true }), _jsx("textarea", { placeholder: "Message", value: formData.message, onChange: (e) => setFormData({ ...formData, message: e.target.value }), className: "w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:outline-none h-32 resize-none", required: true }), _jsx("button", { type: "submit", className: "bg-primary text-white px-8 py-3 rounded-lg hover:bg-dark transition-colors", children: "Send Message" })] })] }));
};
export default ContactForm;
