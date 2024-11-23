import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AppRoutes from './routes'
import { useScrollPosition } from './hooks/useScrollPosition'
import BackToTop from './components/common/BackToTop'
import { AnimatePresence } from 'framer-motion'

function App() {
  const scrollPosition = useScrollPosition()

  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <AppRoutes />
        </AnimatePresence>
        {scrollPosition > 300 && <BackToTop />}
      </Layout>
    </Router>
  )
}

export default App