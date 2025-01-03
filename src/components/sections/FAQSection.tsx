import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Section from '../common/Section'

const faqs = [
  {
    question: "What services does Vide Digital offer?",
    answer: "We offer comprehensive digital solutions including social media marketing, content creation, web development, SEO services, brand strategy, and more. Our services are tailored to help businesses establish and grow their digital presence."
  },
  {
    question: "How can digital marketing help my business?",
    answer: "Digital marketing can help increase your online visibility, reach target audiences effectively, generate quality leads, build brand awareness, and ultimately drive business growth through various digital channels."
  },
  {
    question: "What makes Vide Digital different from other agencies?",
    answer: "We combine data-driven strategies with creative solutions, providing personalized service and measurable results. Our team stays updated with the latest digital trends and technologies to deliver innovative solutions."
  },
  {
    question: "How do you measure the success of digital campaigns?",
    answer: "We use advanced analytics tools to track key performance indicators (KPIs) such as traffic, engagement, conversion rates, and ROI. Regular reporting and analysis help optimize campaigns for better results."
  },
  {
    question: "How long does it take to see results?",
    answer: "Results vary depending on the service and goals. While some improvements can be seen within weeks, sustainable growth typically requires 3-6 months of consistent strategy implementation."
  }
]

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <Section className="bg-white py-20">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h4 className="text-primary font-bold mb-3 uppercase tracking-wider">FAQ</h4>
        <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Find answers to common questions about our digital marketing services and solutions.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 bg-light rounded-lg hover:bg-primary/5 transition-colors"
            >
              <span className="font-medium text-left text-dark">{faq.question}</span>
              {activeIndex === index ? (
                <FaMinus className="text-primary flex-shrink-0 ml-4" />
              ) : (
                <FaPlus className="text-primary flex-shrink-0 ml-4" />
              )}
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default FAQSection