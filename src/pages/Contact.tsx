import PageLayout from '../components/common/PageLayout'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import { FaHeadset, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
  const contactCards = [
    {
      icon: FaHeadset,
      title: "Call Us",
      description: "Speak directly with our team",
      info: "+91 86607 35813",
      link: "tel:+918660735813"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      description: "Write to us anytime",
      info: "videdigitaltechnologies@gmail.com",
      link: "mailto:videdigitaltechnologies@gmail.com"
    }
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-light/50 to-white pt-12 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-gray-600 text-lg">
              Ready to transform your digital presence? We're here to help you achieve your business goals through innovative digital marketing solutions.
            </p>
          </motion.div>

          {/* Contact Cards - Updated Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-3xl mx-auto">
            {contactCards.map((card, index) => (
              <motion.a
                key={index}
                href={card.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <card.icon className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <p className="text-primary font-medium">{card.info}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Form and Info Section */}
      <div className="container mx-auto px-4 -mt-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
      </div>
    </PageLayout>
  )
}

export default Contact