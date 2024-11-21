import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../common/Section'

const faqs = [
  {
    question: 'What digital marketing services do you offer?',
    answer: 'We offer a comprehensive suite of digital marketing services including SEO, social media marketing, content marketing, PPC advertising, email marketing, and web development.'
  },
  {
    question: 'How do you measure marketing success?',
    answer: 'We use advanced analytics tools to track key performance indicators (KPIs) such as traffic, conversion rates, engagement metrics, and ROI. We provide detailed monthly reports showing your campaign progress.'
  },
  {
    question: 'What makes Vide Digital different?',
    answer: 'Our data-driven approach, combined with creative excellence and dedicated account management, ensures that we deliver measurable results. We stay ahead of digital trends and adapt strategies accordingly.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'While some results can be seen within the first month, sustainable growth typically takes 3-6 months. SEO and content marketing are long-term strategies that build momentum over time.'
  }
]

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <Section className="bg-light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-primary font-bold mb-2">FAQs</h4>
            <h1 className="text-4xl font-bold text-dark mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-body mb-6">
              Find answers to common questions about our insurance services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-4 text-left flex justify-between items-center"
                >
                  <span className="font-medium text-dark">{faq.question}</span>
                  <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="p-4 pt-0 text-body">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block"
        >
          <img 
            src="/images/faq.jpg" 
            alt="FAQs" 
            className="rounded-lg w-full"
          />
        </motion.div>
      </div>
    </Section>
  )
}

export default FAQSection