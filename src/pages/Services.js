import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import PageHeader from '../components/common/PageHeader';
import ServicesGrid from '../components/sections/ServicesGrid';
import PricingSection from '../components/sections/PricingSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
const Services = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageHeader, { title: "Our Services", breadcrumbs: [
                    { label: 'Home', path: '/' },
                    { label: 'Services', path: '/services' }
                ] }), _jsx(ServicesGrid, {}), _jsx(PricingSection, {}), _jsx(TestimonialsSection, {})] }));
};
export default Services;
