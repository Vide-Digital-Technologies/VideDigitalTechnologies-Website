import { motion } from 'framer-motion'
import { FaUsers, FaCheckCircle, FaAward } from 'react-icons/fa'
import Section from '../common/Section'

const stats = [
  {
    icon: FaUsers,
    count: '1234',
    title: 'Team Members',
    delay: 0.1
  },
  {
    icon: FaCheckCircle,
    count: '1234',
    title: 'Happy Clients',
    delay: 0.3
  },
  {
    icon: FaAward,
    count: '1234',
    title: 'Awards Win',
    delay: 0.5
  }
]

const AboutSection = () => {
  return (
    <Section className="bg-light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/images/about.jpg" 
            alt="About Us" 
            className="rounded-lg w-full"
          />
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-primary font-bold mb-2">About Us</h4>
            <h1 className="text-4xl font-bold text-dark mb-4">
              We Help Our Clients To Grow Their Business
            </h1>
            <p className="text-body mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className="text-center p-6 bg-white rounded-lg"
              >
                <stat.icon className="text-primary text-3xl mx-auto mb-3" />
                <h1 className="text-dark text-3xl font-bold mb-2">{stat.count}</h1>
                <p className="text-body">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutSection