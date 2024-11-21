import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import PageHeader from '../components/common/PageHeader';
import AboutSection from '../components/sections/AboutSection';
import TeamSection from '../components/sections/TeamSection';
import Features from '../components/home/Features';
const About = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageHeader, { title: "About Us", breadcrumbs: [
                    { label: 'Home', path: '/' },
                    { label: 'About', path: '/about' }
                ] }), _jsx(AboutSection, {}), _jsx(Features, {}), _jsx(TeamSection, {})] }));
};
export default About;
