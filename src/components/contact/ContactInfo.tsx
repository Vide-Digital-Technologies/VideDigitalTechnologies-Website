import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const contactDetails = [
  {
    icon: FaPhone,
    title: 'Phone',
    details: ['+1 (234) 567-8900', '+1 (234) 567-8901']
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    details: ['info@videdigital.com', 'support@videdigital.com']
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    details: ['123 Digital Avenue', 'New York, NY 10001']
  },
  {
    icon: FaClock,
    title: 'Working Hours',
    details: ['Mon - Fri: 9:00 - 18:00', 'Sat: By Appointment']
  }
]

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-light p-8 rounded-lg"
    >
      <h2 className="text-2xl font-bold text-dark mb-6">Contact Information</h2>
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <item.icon className="text-xl text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-body">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default ContactInfo