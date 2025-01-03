import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Contact Us', path: '/contact', isButton: true },
  ]

  return (
    <header
      className={`fixed left-0 w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'top-0 bg-white/95 backdrop-blur-md shadow-lg py-0.5'
          : `${window.innerWidth >= 768 ? 'top-[32px]' : 'top-0'} bg-black/20 backdrop-blur-sm py-0.5`
      }`}
    >
      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-primary"
        initial={{ width: "0%" }}
        animate={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
        transition={{ duration: 0.1 }}
      />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-h-[1.75rem] sm:min-h-[2.5rem]">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center -ml-4"
          >
            <div className="relative w-[220px] sm:w-[220px] md:w-[240px] h-[60px] sm:h-[100px]">
              <img 
                src={logo}
                alt="Vide Digital" 
                className={`absolute 
                  h-[150px] sm:h-[130px] md:h-[150px] lg:h-[170px] 
                  w-[220px] sm:w-[220px] md:w-[260px] lg:w-[280px] 
                  -top-[75%] sm:-top-[30%] 
                  -left-4 sm:-left-2 
                  object-contain transition-all duration-300 ${
                  isScrolled 
                    ? 'brightness-100 scale-[0.95] sm:scale-[0.95]'
                    : 'brightness-0 invert scale-100'
                }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    item.isButton 
                      ? `ml-4 px-6 py-2.5 bg-primary text-white hover:bg-primary/90`
                      : isScrolled
                        ? isActive
                          ? 'text-primary bg-primary/5'
                          : 'text-dark hover:text-primary hover:bg-primary/5'
                        : 'text-white hover:text-white hover:bg-white/20'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-1 rounded-md transition-colors ${
              isScrolled
                ? 'text-dark hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 overflow-hidden"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="container mx-auto py-4"
            >
              <div className="flex flex-col space-y-1 px-4">
                {menuItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-300 ${
                        item.isButton
                          ? "mt-4 bg-primary text-white hover:bg-primary/90 text-center"
                          : isActive
                            ? 'text-primary bg-primary/5'
                            : 'text-dark hover:text-primary hover:bg-gray-50'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              {/* Add contact information in mobile menu */}
              <div className="mt-8 pt-6 border-t border-gray-100 px-4">
                <div className="space-y-4">
                  <a 
                    href="tel:+918660735813"
                    className="flex items-center space-x-3 text-gray-600 hover:text-primary transition-colors"
                  >
                    <FaPhone className="text-primary" />
                    <span>+91 86607 35813</span>
                  </a>
                  <a 
                    href="mailto:videdigitaltechnologies@gmail.com"
                    className="flex items-center space-x-3 text-gray-600 hover:text-primary transition-colors"
                  >
                    <FaEnvelope className="text-primary" />
                    <span>videdigitaltechnologies@gmail.com</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4 mt-6">
                  {[
                    { icon: FaFacebookF, href: '#' },
                    { icon: FaTwitter, href: '#' },
                    { icon: FaLinkedinIn, href: '#' },
                    { icon: FaInstagram, href: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <social.icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header