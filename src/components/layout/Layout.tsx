import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Topbar from './Topbar'
import { useLocation } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout