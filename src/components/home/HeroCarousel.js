import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlayCircle } from 'react-icons/fa';
const slides = [
    {
        title: 'Welcome To Vide Digital',
        heading: 'Transform Your Digital Presence',
        description: 'We help businesses grow through innovative digital marketing strategies, web development, and creative solutions that drive real results.',
        image: '/images/carousel-1.jpg'
    },
    {
        title: 'Digital Marketing Excellence',
        heading: 'Data-Driven Growth Solutions',
        description: 'Leverage our expertise in SEO, social media, and content marketing to reach your target audience and achieve measurable business growth.',
        image: '/images/carousel-2.jpg'
    }
];
const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, []);
    return (_jsx("div", { className: "relative h-screen", children: slides.map((slide, index) => (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: currentSlide === index ? 1 : 0 }, transition: { duration: 0.5 }, className: `absolute inset-0 ${currentSlide === index ? 'z-10' : 'z-0'}`, children: _jsx("div", { className: "relative h-full bg-primary", children: _jsx("div", { className: "container mx-auto px-4 h-full", children: _jsx("div", { className: "flex items-center h-full", children: _jsx("div", { className: "w-full lg:w-1/2", children: _jsxs(motion.div, { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { delay: 0.2 }, className: "text-white", children: [_jsx("h4", { className: "text-lg font-bold uppercase mb-4", children: slide.title }), _jsx("h1", { className: "text-5xl lg:text-6xl font-bold mb-6", children: slide.heading }), _jsx("p", { className: "text-lg mb-8", children: slide.description }), _jsxs("div", { className: "flex flex-wrap gap-4", children: [_jsxs("button", { className: "bg-white text-primary px-6 py-3 rounded-full flex items-center hover:bg-light transition-colors", children: [_jsx(FaPlayCircle, { className: "mr-2" }), " Watch Video"] }), _jsx("button", { className: "bg-dark text-white px-6 py-3 rounded-full hover:bg-light hover:text-primary transition-colors", children: "Learn More" })] })] }) }) }) }) }) }, index))) }));
};
export default HeroCarousel;
