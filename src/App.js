import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AppRoutes from './routes';
import { useScrollPosition } from './hooks/useScrollPosition';
import BackToTop from './components/common/BackToTop';
function App() {
    const scrollPosition = useScrollPosition();
    return (_jsx(Router, { children: _jsxs(Layout, { children: [_jsx(AppRoutes, {}), scrollPosition > 300 && _jsx(BackToTop, {})] }) }));
}
export default App;
