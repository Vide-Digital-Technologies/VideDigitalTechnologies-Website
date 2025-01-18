import { useState, useEffect, ReactNode } from 'react'
import Spinner from '../common/Spinner'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Add a timeout to prevent infinite loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Force load after 2 seconds

    // Cleanup
    return () => clearTimeout(timer)
  }, [])

  // Add error boundary
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout