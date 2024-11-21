import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import Section from '../common/Section';
import SocialLinks from '../common/SocialLinks';
const team = [
    {
        name: 'John Smith',
        position: 'CEO & Founder',
        image: '/images/team-1.jpg'
    },
    {
        name: 'Sarah Johnson',
        position: 'Insurance Expert',
        image: '/images/team-2.jpg'
    },
    {
        name: 'Michael Brown',
        position: 'Financial Advisor',
        image: '/images/team-3.jpg'
    },
    {
        name: 'Emily Davis',
        position: 'Customer Relations',
        image: '/images/team-4.jpg'
    }
];
const TeamSection = () => {
    return (_jsxs(Section, { children: [_jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [_jsx("h4", { className: "text-primary font-bold mb-2", children: "Our Team" }), _jsx("h1", { className: "text-4xl font-bold text-dark mb-4", children: "Meet Our Expert Team" }), _jsx("p", { className: "text-body", children: "Our dedicated team of professionals is here to help you with all your insurance needs" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: team.map((member, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, className: "group", children: [_jsxs("div", { className: "relative overflow-hidden rounded-lg mb-4", children: [_jsx("img", { src: member.image, alt: member.name, className: "w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-300" }), _jsx("div", { className: "absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: _jsx(SocialLinks, { variant: "light" }) })] }), _jsxs("div", { className: "text-center", children: [_jsx("h3", { className: "text-xl font-bold text-dark mb-1", children: member.name }), _jsx("p", { className: "text-body", children: member.position })] })] }, index))) })] }));
};
export default TeamSection;
