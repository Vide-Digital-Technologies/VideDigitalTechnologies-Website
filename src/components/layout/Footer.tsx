import { Link } from 'react-router-dom'
import { FaSlack, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="bg-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center mb-4">
                <FaSlack className="text-primary text-3xl mr-2" />
                <h3 className="text-white text-2xl font-bold">Vide Digital</h3>
              </Link>
              <p className="text-gray-400 mb-6">
                Your growth partner in digital marketing. We help businesses transform their digital presence through innovative solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white text-xl font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li><Link to="/services/seo" className="text-gray-400 hover:text-primary">SEO Optimization</Link></li>
                <li><Link to="/services/social-media" className="text-gray-400 hover:text-primary">Social Media Marketing</Link></li>
                <li><Link to="/services/content" className="text-gray-400 hover:text-primary">Content Marketing</Link></li>
                <li><Link to="/services/ppc" className="text-gray-400 hover:text-primary">PPC Advertising</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-darker py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-primary">Vide Digital</span>. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer