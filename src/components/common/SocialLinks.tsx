import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

interface SocialLinksProps {
  variant?: 'primary' | 'light'
  className?: string
}

const SocialLinks = ({ variant = 'primary', className = '' }: SocialLinksProps) => {
  const links = [
    { icon: FaFacebookF, href: 'https://www.linkedin.com/company/vide-digital-technologies/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://x.com/videdigitech', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/vide.digital.technologies/', label: 'Instagram' },
    { icon: FaLinkedinIn, href: 'http://wa.me/918660735813', label: 'WhatsApp' }
  ]

  const variants = {
    primary: 'border-primary text-primary hover:bg-primary hover:text-white',
    light: 'border-white text-white hover:bg-white hover:text-primary'
  }

  return (
    <div className={`flex space-x-3 ${className}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={`w-10 h-10 border rounded-full flex items-center justify-center transition-colors duration-300 ${variants[variant]}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          <link.icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks