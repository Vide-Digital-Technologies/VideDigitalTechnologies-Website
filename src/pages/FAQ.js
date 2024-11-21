import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import PageHeader from '../components/common/PageHeader';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
const FAQ = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageHeader, { title: "FAQs", breadcrumbs: [
                    { label: 'Home', path: '/' },
                    { label: 'Pages', path: '#' },
                    { label: 'FAQs', path: '/faq' }
                ] }), _jsx(FAQSection, {}), _jsx(ContactSection, {})] }));
};
export default FAQ;
