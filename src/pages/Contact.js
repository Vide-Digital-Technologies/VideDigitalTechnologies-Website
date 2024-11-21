import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import PageHeader from '../components/common/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';
const Contact = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageHeader, { title: "Contact Us", breadcrumbs: [
                    { label: 'Home', path: '/' },
                    { label: 'Contact', path: '/contact' }
                ] }), _jsx("div", { className: "container mx-auto px-4 py-16", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-2", children: _jsx(ContactForm, {}) }), _jsx(ContactInfo, {})] }) }), _jsx(Map, {})] }));
};
export default Contact;
