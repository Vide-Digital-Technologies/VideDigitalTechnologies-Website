import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaSlack, FaBars } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

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
    <nav className="bg-white py-4">
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