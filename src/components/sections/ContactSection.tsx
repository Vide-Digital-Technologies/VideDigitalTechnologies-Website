import { motion } from 'framer-motion'
import Section from '../common/Section'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const contactInfo = [
  {
    icon: FaPhone,
    title: 'Phone Number',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
  },
  {
    icon: FaEnvelope,
    title: 'Email Address',
    details: ['info@lifesure.com', 'support@lifesure.com']
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Office Location',
    details: ['123 Insurance Street', 'New York, NY 10001']
  }
]

const ContactSection = () => {
  return (
    <Section className="bg-light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-primary font-bold mb-2">Contact Us</h4>
        <h1 className="text-4xl font-bold text-dark mb-4">
          Get In Touch With Us
        </h1>
        <p className="text-body">
          Have questions? We're here to help. Contact us through any of these channels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-lg text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <info.icon className="text-2xl text-primary" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-4">{info.title}</h3>
            {info.details.map((detail, i) => (
              <p key={i} className="text-body">
                {detail}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default ContactSection