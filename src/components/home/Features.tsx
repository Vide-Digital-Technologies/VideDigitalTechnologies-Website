import { useState } from "react";
import Section from "../common/Section";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaYoutube,
  FaHashtag,
  FaEnvelope,
  FaMousePointer,
  FaPalette,
  FaPen,
  FaVideo,
  FaCamera,
  FaGlobe,
  FaSearch,
  FaWordpress,
  FaShopify,
  FaChartLine,
  FaLightbulb,
  FaUsers,
  FaComments,
  FaNewspaper,
  FaBriefcase,
  FaHandshake,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";

const features = [
  {
    category: "Advertising & Marketing",
    items: [
      {
        icon: FaHashtag,
        title: "Social Media Monitoring",
        description: "Real-time monitoring and analytics of your social media presence.",
      },
      {
        icon: FaFacebookF,
        title: "Facebook Advertising",
        description: "Strategic Facebook ad campaigns for your target audience.",
      },
      {
        icon: FaYoutube,
        title: "YouTube Advertising",
        description: "Engaging video advertising campaigns on YouTube.",
      },
      {
        icon: FaHandshake,
        title: "Public Relations",
        description: "Strategic PR campaigns to enhance your brand reputation.",
      },
      {
        icon: FaUsers,
        title: "Social Media Marketing",
        description: "Comprehensive social media strategy and management.",
      },
      {
        icon: FaEnvelope,
        title: "Email Marketing",
        description: "Targeted email campaigns that drive engagement.",
      },
      {
        icon: FaMousePointer,
        title: "Pay Per Click",
        description: "Results-driven PPC campaigns across platforms.",
      },
      {
        icon: FaChartLine,
        title: "Conversion Rate Optimization",
        description: "Data-driven strategies to increase conversion rates.",
      },
      {
        icon: FaNewspaper,
        title: "Content Marketing",
        description: "Strategic content creation and distribution.",
      },
    ],
  },
  {
    category: "Branding & Content Creation",
    items: [
      {
        icon: FaPalette,
        title: "Logo Design Services",
        description: "Professional logo design that represents your brand.",
      },
      {
        icon: FaLightbulb,
        title: "Brand Strategy and Creation",
        description: "Comprehensive brand development and positioning.",
      },
      {
        icon: FaPen,
        title: "Copy Writing",
        description: "Engaging copywriting that connects with your audience.",
      },
      {
        icon: FaBriefcase,
        title: "Comprehensive Strategy",
        description: "Full-scale marketing and branding strategies.",
      },
      {
        icon: FaComments,
        title: "Corporate Communications",
        description: "Professional corporate communication services.",
      },
      {
        icon: FaUsers,
        title: "Community Management",
        description: "Active community engagement and management.",
      },
      {
        icon: FaPen,
        title: "Storytelling",
        description: "Compelling brand storytelling that resonates.",
      },
      {
        icon: FaVideo,
        title: "Video Production",
        description: "High-quality video content creation.",
      },
      {
        icon: FaCamera,
        title: "Product Photoshoot",
        description: "Professional product photography services.",
      },
    ],
  },
  {
    category: "Web Development & SEO",
    items: [
      {
        icon: FaGlobe,
        title: "Landing Pages",
        description: "High-converting landing page development.",
      },
      {
        icon: FaSearch,
        title: "SEO Consulting",
        description: "Expert SEO strategy and optimization services.",
      },
      {
        icon: FaWordpress,
        title: "WordPress Websites",
        description: "Custom WordPress website development.",
      },
      {
        icon: FaSearch,
        title: "WordPress SEO",
        description: "Specialized SEO for WordPress sites.",
      },
      {
        icon: FaShopify,
        title: "Shopify Stores and Websites",
        description: "Professional Shopify store development.",
      },
      {
        icon: FaSearch,
        title: "Shopify SEO",
        description: "Specialized SEO for Shopify stores.",
      },
      {
        icon: FaGlobe,
        title: "Website Support",
        description: "Ongoing website maintenance and support.",
      },
    ],
  },
];

const Features = () => {
  const [currentCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = window.innerWidth >= 1024 ? 6 : window.innerWidth >= 768 ? 4 : 2;
  const currentFeatures = features[currentCategory].items;
  const totalPages = Math.ceil(currentFeatures.length / itemsPerPage);
  const visibleFeatures = currentFeatures.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <Section className="bg-gradient-to-b from-light/50 to-white relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      <div className="relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24 px-4">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-bold mb-4 uppercase tracking-wider"
          >
            Our Services
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-8"
          >
            Comprehensive Digital Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Transform your digital presence with our full suite of professional services tailored to your business needs.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {visibleFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <feature.icon className="text-2xl text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Previous page"
              >
                <FaArrowLeft className="text-lg" />
              </button>
              <button
                onClick={nextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Next page"
              >
                <FaArrowRight className="text-lg" />
              </button>
            </>
          )}

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 lg:mt-16 space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === i
                      ? "bg-primary w-8"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Features;
