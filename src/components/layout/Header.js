import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSlack, FaBars } from 'react-icons/fa';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' }
    ];
    // @ts-ignore
    const dropdownItems = [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Our Team', href: '/team' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'FAQs', href: '/faq' }
    ];
    return (_jsx("nav", { className: "bg-white py-4", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsxs(Link, { to: "/", className: "flex items-center", children: [_jsx(FaSlack, { className: "text-primary text-3xl mr-2" }), _jsx("h1", { className: "text-primary text-2xl font-bold", children: "Vide Digital" })] }), _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "lg:hidden text-primary", children: _jsx(FaBars, { className: "h-6 w-6" }) }), _jsx("div", { className: `lg:flex items-center space-x-8 ${isOpen ? 'block' : 'hidden'}`, children: navigation.map((item) => (_jsx(Link, { to: item.href, className: `${location.pathname === item.href
                                ? 'text-primary'
                                : 'text-dark hover:text-primary'} transition-colors duration-200`, children: item.name }, item.name))) })] }) }) }));
};
export default Header;
