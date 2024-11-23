import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaSlack, FaBars } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.pageYOffset / totalScroll) * 100
      setScrollProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ]

  // @ts-ignore
  const dropdownItems = [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Our Team', href: '/team' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQs', href: '/faq' }
  ]

  return (
    <nav className="bg-white py-4 sticky top-0 z-50">
      <div className="h-1 bg-gray-200 absolute bottom-0 left-0 w-full">
        <div 
          className="h-full bg-primary transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <FaSlack className="text-primary text-3xl mr-2" />
            <h1 className="text-primary text-2xl font-bold">Vide Digital</h1>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary"
          >
            <FaBars className="h-6 w-6" />
          </button>

          <div className={`lg:flex items-center space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-dark hover:text-primary'
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header