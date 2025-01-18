import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowUp, FaWhatsapp } from 'react-icons/fa'
import logo from '../../assets/logo.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const services = {
    marketing: [
      { name: 'Social Media Marketing', path: '/services#social' },
      { name: 'Search Engine Optimization', path: '/services#seo' },
      { name: 'Content Marketing', path: '/services#content' },
      { name: 'Email Marketing', path: '/services#email' },
      { name: 'PPC Advertising', path: '/services#ppc' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Services', path: '/services' },
      { name: 'Terms & Conditions', path: '/terms' },
      { name: 'Contact Us', path: '/contact' }
    ],
    solutions: [
      { name: 'Brand Strategy', path: '/services#brand' },
      { name: 'Digital Presence', path: '/services#digital' },
      { name: 'Content Creation', path: '/services#content' },
      { name: 'Analytics & Reporting', path: '/services#analytics' }
    ]
  }

  const socialLinks = [
    { icon: FaInstagram, href: 'https://www.instagram.com/vide.digital.technologies/', label: 'Instagram' },
    { icon: FaTwitter, href: 'https://x.com/videdigitech', label: 'Twitter' },
    { icon: FaWhatsapp, href: 'http://wa.me/918660735813', label: 'WhatsApp' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/vide-digital-technologies/', label: 'LinkedIn' }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-dark to-darker">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6 -my-16">
              <img 
                src={logo} 
                alt="Vide Digital" 
                className="h-48 brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-8">
              Empowering businesses through innovative digital marketing solutions. Transform your online presence and achieve sustainable growth with our expert strategies.
            </p>
            <div className="space-y-4">
              <a 
                href="tel:+918660735813"
                className="flex items-center text-gray-400 hover:text-primary transition-colors"
              >
                <FaPhone className="mr-3 text-primary" />
                +91 86607 35813
              </a>
              <a 
                href="mailto:videdigitaltechnologies@gmail.com"
                className="flex items-center text-gray-400 hover:text-primary transition-colors"
              >
                <FaEnvelope className="mr-3 text-primary" />
                videdigitaltechnologies@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {services.company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.marketing.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-lg font-bold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {services.solutions.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Vide Digital. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer