import { motion } from 'framer-motion'
import Section from '../common/Section'
import { Link } from 'react-router-dom'
import { FaChartLine, FaLightbulb, FaCogs } from 'react-icons/fa'

const AboutSection = () => {
  const stats = [
    { number: "1+", label: "Years Experience", icon: FaChartLine },
    { number: "10+", label: "Projects Completed", icon: FaLightbulb },
    { number: "95%", label: "Client Satisfaction", icon: FaCogs },
  ]

  return (
    <Section className="py-16 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-light/50 to-white" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Hero Image Section */}
        <div className="relative w-full mb-16 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images/aboutus.jpg"
              alt="About Us"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="max-w-3xl"
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    Transforming Digital <span className="text-primary">Presence</span>
                  </h2>
                  <p className="text-white/90 text-base sm:text-xl lg:text-2xl font-light max-w-2xl leading-relaxed">
                    Creating innovative solutions for modern businesses in the digital age
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section - Improved mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 lg:mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <stat.icon className="text-primary text-3xl sm:text-4xl mb-4" />
              <h3 className="text-3xl sm:text-4xl font-bold text-dark mb-2">{stat.number}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Grid - Improved mobile spacing */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
              <h4 className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm">About Us</h4>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark leading-tight">
              We Create Digital Solutions For Your Business Growth
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              With years of experience in digital marketing and web development, we help businesses 
              establish a strong online presence and achieve sustainable growth through innovative 
              digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-dark">
              Why Choose Us?
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: "Expert Team",
                  description: "Skilled professionals with diverse expertise in digital marketing and development"
                },
                {
                  title: "Custom Solutions",
                  description: "Tailored strategies designed specifically for your unique business needs"
                },
                {
                  title: "Result Focused",
                  description: "Committed to delivering measurable outcomes and exceptional ROI"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-bold text-dark mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default AboutSection