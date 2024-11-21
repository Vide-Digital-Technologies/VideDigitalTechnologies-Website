import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaRocket, FaChartLine, FaUsers, FaCogs } from 'react-icons/fa';
import Section from '../common/Section';
const features = [
    {
        icon: FaRocket,
        title: 'Results-Driven',
        description: 'Our strategies are focused on delivering measurable ROI and sustainable business growth.'
    },
    {
        icon: FaChartLine,
        title: 'Data Analytics',
        description: 'Make informed decisions with comprehensive data analysis and performance tracking.'
    },
    {
        icon: FaUsers,
        title: 'Expert Team',
        description: 'Work with seasoned digital marketing professionals and creative specialists.'
    },
    {
        icon: FaCogs,
        title: 'Custom Solutions',
        description: 'Tailored digital strategies designed to meet your specific business objectives.'
    }
];
const Features = () => {
    return (_jsx(Section, { className: "bg-light", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: features.map((feature, index) => (_jsxs("div", { className: "bg-white p-8 rounded-lg hover:bg-primary group transition-colors duration-300", children: [_jsx(feature.icon, { className: "text-4xl text-primary group-hover:text-white mb-4" }), _jsx("h3", { className: "text-xl font-bold text-dark group-hover:text-white mb-4", children: feature.title }), _jsx("p", { className: "text-body group-hover:text-white/90", children: feature.description })] }, index))) }) }));
};
export default Features;
