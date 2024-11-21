import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPlayCircle } from 'react-icons/fa'

const slides = [
  {
    title: 'Welcome To Vide Digital',
    heading: 'Transform Your Digital Presence',
    description: 'We help businesses grow through innovative digital marketing strategies, web development, and creative solutions that drive real results.',
    image: '/images/carousel-1.jpg'
  },
  {
    title: 'Digital Marketing Excellence',
    heading: 'Data-Driven Growth Solutions',
    description: 'Leverage our expertise in SEO, social media, and content marketing to reach your target audience and achieve measurable business growth.',
    image: '/images/carousel-2.jpg'
  }
]

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 ${currentSlide === index ? 'z-10' : 'z-0'}`}
        >
          <div className="relative h-full bg-primary">
            <div className="container mx-auto px-4 h-full">
              <div className="flex items-center h-full">
                <div className="w-full lg:w-1/2">
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-white"
                  >
                    <h4 className="text-lg font-bold uppercase mb-4">{slide.title}</h4>
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">{slide.heading}</h1>
                    <p className="text-lg mb-8">{slide.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-white text-primary px-6 py-3 rounded-full flex items-center hover:bg-light transition-colors">
                        <FaPlayCircle className="mr-2" /> Watch Video
                      </button>
                      <button className="bg-dark text-white px-6 py-3 rounded-full hover:bg-light hover:text-primary transition-colors">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default HeroCarousel