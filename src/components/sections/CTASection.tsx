import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Section from '../common/Section'

const CTASection = () => {
  return (
    <Section className="bg-primary py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/50 to-primary/50" />
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-light/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/90 text-lg mb-10"
          >
            Let's discuss how we can help your business grow through innovative digital solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-light transition-colors shadow-lg"
            >
              Schedule a Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default CTASection 