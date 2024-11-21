import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { FaCheck } from 'react-icons/fa';
const plans = [
    {
        name: 'Starter',
        price: 999,
        features: [
            'Social Media Management',
            'Basic SEO Optimization',
            'Monthly Content Calendar',
            'Basic Analytics Reports',
            'Email Support'
        ],
        recommended: false
    },
    {
        name: 'Professional',
        price: 1999,
        features: [
            'Everything in Starter',
            'Advanced SEO Strategy',
            'Content Marketing',
            'PPC Campaign Management',
            'Dedicated Account Manager'
        ],
        recommended: true
    },
    {
        name: 'Enterprise',
        price: 3999,
        features: [
            'Everything in Professional',
            'Custom Web Development',
            'Advanced Analytics',
            'Brand Strategy',
            'Priority Support'
        ],
        recommended: false
    }
];
const PricingSection = () => {
    return (_jsxs(Section, { children: [_jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [_jsx("h4", { className: "text-primary font-bold mb-2", children: "Pricing Plans" }), _jsx("h1", { className: "text-4xl font-bold text-dark mb-4", children: "Choose Your Insurance Plan" }), _jsx("p", { className: "text-body", children: "Select the perfect insurance plan that fits your needs and budget" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: plans.map((plan, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, className: `bg-white p-8 rounded-lg ${plan.recommended ? 'ring-2 ring-primary' : ''}`, children: [plan.recommended && (_jsx("span", { className: "bg-primary text-white px-4 py-1 rounded-full text-sm mb-6 inline-block", children: "Recommended" })), _jsx("h3", { className: "text-2xl font-bold text-dark mb-4", children: plan.name }), _jsxs("div", { className: "mb-6", children: [_jsxs("span", { className: "text-4xl font-bold text-primary", children: ["$", plan.price] }), _jsx("span", { className: "text-body", children: "/month" })] }), _jsx("ul", { className: "space-y-4 mb-8", children: plan.features.map((feature, i) => (_jsxs("li", { className: "flex items-center text-body", children: [_jsx(FaCheck, { className: "text-primary mr-2" }), feature] }, i))) }), _jsx("button", { className: "w-full bg-primary text-white py-3 rounded-lg hover:bg-dark transition-colors", children: "Get Started" })] }, index))) })] }));
};
export default PricingSection;
