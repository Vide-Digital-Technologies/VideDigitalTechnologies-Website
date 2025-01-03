import { motion } from 'framer-motion'
import Section from '../common/Section'
import { FaCheck } from 'react-icons/fa'

const plans = [
  {
    name: 'Starter',
    price: 999,
    features: [
      'Social Media Management',
      'Basic SEO Optimization',
      'Monthly Content Calendar',
      'Basic Analytics Reports',
      'Email Support'
    ],
    recommended: false
  },
  {
    name: 'Professional',
    price: 1999,
    features: [
      'Everything in Starter',
      'Advanced SEO Strategy',
      'Content Marketing',
      'PPC Campaign Management',
      'Dedicated Account Manager'
    ],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 3999,
    features: [
      'Everything in Professional',
      'Custom Web Development',
      'Advanced Analytics',
      'Brand Strategy',
      'Priority Support'
    ],
    recommended: false
  }
]

const PricingSection = () => {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-primary font-bold mb-2">Pricing Plans</h4>
        <h1 className="text-4xl font-bold text-dark mb-4">
          Choose Your Insurance Plan
        </h1>
        <p className="text-body">
          Select the perfect insurance plan that fits your needs and budget
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white p-8 rounded-lg ${
              plan.recommended ? 'ring-2 ring-primary' : ''
            }`}
          >
            {plan.recommended && (
              <span className="bg-primary text-white px-4 py-1 rounded-full text-sm mb-6 inline-block">
                Recommended
              </span>
            )}
            <h3 className="text-2xl font-bold text-dark mb-4">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-primary">${plan.price}</span>
              <span className="text-body">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-body">
                  <FaCheck className="text-primary mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-dark transition-colors">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default PricingSection