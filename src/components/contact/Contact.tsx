import { FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      {/* Other contact information */}
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/company/vide-digital-technologies/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a href="https://x.com/videdigitech" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="http://wa.me/918660735813" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/vide.digital.technologies/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 