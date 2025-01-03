import { motion } from 'framer-motion'
import Section from '../common/Section'
import { FaSearch, FaHashtag, FaCode, FaPencilAlt, FaChartLine, FaAd } from 'react-icons/fa'

const services = [
  {
    icon: FaSearch,
    title: 'SEO Optimization',
    description: 'Boost your search rankings and drive organic traffic with data-driven SEO strategies.'
  },
  {
    icon: FaHashtag,
    title: 'Social Media',
    description: 'Build brand awareness and engage your audience across social platforms.'
  },
  {
    icon: FaCode,
    title: 'Web Development',
    description: 'Create responsive, user-friendly websites that convert visitors into customers.'
  },
  {
    icon: FaPencilAlt,
    title: 'Content Marketing',
    description: 'Develop compelling content that resonates with your target audience.'
  },
  {
    icon: FaChartLine,
    title: 'Analytics',
    description: 'Track and analyze your digital performance with comprehensive reporting.'
  },
  {
    icon: FaAd,
    title: 'PPC Advertising',
    description: 'Maximize ROI with targeted paid advertising campaigns across platforms.'
  }
]

const ServicesGrid = () => {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-primary font-bold mb-2">Our Services</h4>
        <h1 className="text-4xl font-bold text-dark mb-4">
          Marketing Solutions
        </h1>
        <p className="text-body">
          We offer a wide range of marketing solutions to meet your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-light p-8 rounded-lg group hover:bg-primary transition-colors duration-300"
          >
            <service.icon className="text-4xl text-primary group-hover:text-white mb-6 transition-colors" />
            <h3 className="text-xl font-bold text-dark group-hover:text-white mb-4 transition-colors">
              {service.title}
            </h3>
            <p className="text-body group-hover:text-white/90 transition-colors">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default ServicesGrid