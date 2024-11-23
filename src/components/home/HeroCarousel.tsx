import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlayCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
            >
              <div className="absolute inset-0">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="container mx-auto px-4 h-full relative z-10">
                <div className="flex items-center h-full">
                  <div className="w-full lg:w-1/2">
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-white"
                    >
                      <h4 className="text-lg font-bold uppercase mb-4 tracking-wider">{slide.title}</h4>
                      <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">{slide.heading}</h1>
                      <p className="text-xl mb-8 text-white/90">{slide.description}</p>
                      <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-primary px-8 py-4 rounded-full font-bold flex items-center hover:bg-light transition-colors">
                          <FaPlayCircle className="mr-2" /> Watch Video
                        </button>
                        <button className="bg-dark text-white px-8 py-4 rounded-full font-bold hover:bg-light hover:text-primary transition-colors">
                          Learn More
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all z-20"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all z-20"
      >
        <FaArrowRight />
      </button>
    </div>
  )
}

export default HeroCarousel