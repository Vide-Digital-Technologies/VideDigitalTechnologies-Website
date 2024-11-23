import { useState, useEffect, ReactNode } from 'react'
import Spinner from '../common/Spinner'
import Header from './Header'
import Footer from './Footer'
import Topbar from './Topbar'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading && <Spinner />}
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