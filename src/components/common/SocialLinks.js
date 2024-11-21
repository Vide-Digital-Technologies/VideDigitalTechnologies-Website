import { jsx as _jsx } from "react/jsx-runtime";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const SocialLinks = ({ variant = 'primary', className = '' }) => {
    const links = [
        { icon: FaFacebookF, href: '#' },
        { icon: FaTwitter, href: '#' },
        { icon: FaInstagram, href: '#' },
        { icon: FaLinkedinIn, href: '#' }
    ];
    const variants = {
        primary: 'border-primary text-primary hover:bg-primary hover:text-white',
        light: 'border-white text-white hover:bg-white hover:text-primary'
    };
    return (_jsx("div", { className: `flex space-x-3 ${className}`, children: links.map((link, index) => (_jsx("a", { href: link.href, className: `w-10 h-10 border rounded-full flex items-center justify-center transition-colors duration-300 ${variants[variant]}`, target: "_blank", rel: "noopener noreferrer", children: _jsx(link.icon, { className: "w-4 h-4" }) }, index))) }));
};
export default SocialLinks;
