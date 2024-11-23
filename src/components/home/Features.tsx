import { FaLightbulb, FaUsers, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'
import Section from '../common/Section'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaFacebookF, FaYoutube, FaBullhorn, FaHashtag, FaEnvelope,
  FaMousePointer, FaPalette,
  FaPen, FaVideo, FaCamera, FaGlobe, FaSearch, FaWordpress, FaShopify
} from 'react-icons/fa'

const features = [
  // Advertising and Marketing
  {
    category: 'Advertising & Marketing',
    items: [
      {
        icon: FaHashtag,
        title: 'Social Media Marketing',
        description: 'Strategic social media management and engagement across all platforms.'
      },
      {
        icon: FaFacebookF,
        title: 'Facebook Advertising',
        description: 'Targeted Facebook ad campaigns to reach your ideal audience.'
      },
      {
        icon: FaYoutube,
        title: 'YouTube Advertising',
        description: 'Engaging video advertising campaigns on YouTube.'
      },
      {
        icon: FaBullhorn,
        title: 'Public Relations',
        description: 'Strategic PR campaigns to enhance your brand reputation.'
      },
      {
        icon: FaEnvelope,
        title: 'Email Marketing',
        description: 'Conversion-focused email marketing campaigns.'
      },
      {
        icon: FaMousePointer,
        title: 'Pay Per Click',
        description: 'Results-driven PPC campaigns across platforms.'
      }
    ]
  },
  // Branding and Content
  {
    category: 'Branding & Content',
    items: [
      {
        icon: FaPalette,
        title: 'Logo Design',
        description: 'Professional logo design and brand identity creation.'
      },
      {
        icon: FaLightbulb,
        title: 'Brand Strategy',
        description: 'Comprehensive brand strategy development and execution.'
      },
      {
        icon: FaPen,
        title: 'Copywriting',
        description: 'Engaging content that tells your brand story.'
      },
      {
        icon: FaUsers,
        title: 'Community Management',
        description: 'Active community engagement and management.'
      },
      {
        icon: FaVideo,
        title: 'Video Production',
        description: 'Professional video content creation and editing.'
      },
      {
        icon: FaCamera,
        title: 'Product Photography',
        description: 'High-quality product photography services.'
      }
    ]
  },
  // Web Development and SEO
  {
    category: 'Web Development & SEO',
    items: [
      {
        icon: FaGlobe,
        title: 'Landing Pages',
        description: 'High-converting landing page design and development.'
      },
      {
        icon: FaSearch,
        title: 'SEO Consulting',
        description: 'Expert SEO strategy and optimization services.'
      },
      {
        icon: FaWordpress,
        title: 'WordPress Development',
        description: 'Custom WordPress website development and maintenance.'
      },
      {
        icon: FaShopify,
        title: 'Shopify Development',
        description: 'Professional Shopify store setup and optimization.'
      }
    ]
  }
]

const Features = () => {
  const [currentCategory, setCurrentCategory] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = window.innerWidth >= 1024 ? 6 : window.innerWidth >= 768 ? 4 : 2
  const currentFeatures = features[currentCategory].items
  const totalPages = Math.ceil(currentFeatures.length / itemsPerPage)

  const visibleFeatures = currentFeatures.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <Section className="bg-light relative py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-primary font-bold mb-2">Our Services</h4>
        <h1 className="text-4xl font-bold text-dark mb-8">
          Comprehensive Digital Solutions
        </h1>
        <div className="flex justify-center gap-4 flex-wrap">
          {features.map((category, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentCategory(idx)
                setCurrentPage(0)
              }}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                currentCategory === idx
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark hover:bg-primary/10'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleFeatures.map((feature, index) => (
              <motion.div
                key={`${currentCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg group hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <feature.icon className="text-3xl text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-body">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {totalPages > 1 && (
          <>
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all z-20 shadow-xl border border-gray-100"
              aria-label="Previous page"
            >
              <FaArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all z-20 shadow-xl border border-gray-100"
              aria-label="Next page"
            >
              <FaArrowRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-12 space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === i ? 'bg-primary w-6' : 'bg-primary/30'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </Section>
  )
}

export default Features