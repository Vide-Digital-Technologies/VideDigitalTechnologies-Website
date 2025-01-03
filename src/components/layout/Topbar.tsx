import { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Topbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const socialLinks = [
    { icon: FaFacebookF, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaLinkedinIn, href: '#' },
    { icon: FaInstagram, href: '#' }
  ]

  return (
    <div 
      className={`fixed w-full top-0 bg-dark text-white py-2 md:py-3 transition-all duration-500 z-50 hidden md:block ${
        isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Contact Info - Improved mobile layout */}
          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm">
            <a 
              href="tel:+918660735813" 
              className="flex items-center gap-2 hover:text-primary transition-colors bg-white/10 px-3 py-1.5 rounded-full"
            >
              <FaPhone className="text-primary" />
              <span className="hidden sm:inline">+91 86607 35813</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a 
              href="mailto:videdigitaltechnologies@gmail.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors bg-white/10 px-3 py-1.5 rounded-full"
            >
              <FaEnvelope className="text-primary" />
              <span className="hidden sm:inline">videdigitaltechnologies@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            <div className="hidden md:flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <span>Bengaluru, Karnataka</span>
            </div>
          </div>

          {/* Social Links - Improved mobile styling */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors bg-white/10 rounded-full text-sm"
                aria-label={`Visit our ${social.icon.name}`}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar