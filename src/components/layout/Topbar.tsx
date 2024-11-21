import { FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGlobeEurope } from 'react-icons/fa'
import { Menu } from '@headlessui/react'

const Topbar = () => {
  const languages = ['English', 'Spanish', 'French', 'German']

  return (
    <div className="hidden lg:block bg-light py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="border-r border-primary pr-6">
              <a href="#" className="text-gray-600 text-sm hover:text-primary">
                <FaMapMarkerAlt className="inline-block text-primary mr-2" />
                123 Digital Avenue, NY
              </a>
            </div>
            <div>
              <a href="mailto:info@videdigital.com" className="text-gray-600 text-sm hover:text-primary">
                <FaEnvelope className="inline-block text-primary mr-2" />
                info@videdigital.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3 border-r border-primary pr-6">
              <a href="#" className="text-primary hover:text-primary/80"><FaFacebookF /></a>
              <a href="#" className="text-primary hover:text-primary/80"><FaTwitter /></a>
              <a href="#" className="text-primary hover:text-primary/80"><FaInstagram /></a>
              <a href="#" className="text-primary hover:text-primary/80"><FaLinkedinIn /></a>
            </div>
            
            <Menu as="div" className="relative">
              <Menu.Button className="text-dark hover:text-primary">
                <FaGlobeEurope className="inline-block text-primary mr-2" />
                <span className="text-sm">English</span>
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-1">
                {languages.map((lang) => (
                  <Menu.Item key={lang}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? 'bg-light text-primary' : 'text-dark'
                        } block px-4 py-2 text-sm`}
                      >
                        {lang}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar