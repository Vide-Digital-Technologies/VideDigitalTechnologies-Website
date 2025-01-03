import { useState, useEffect, TouchEvent, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const slides = [
  {
    title: "Digital Marketing Excellence",
    heading: "Transform Your Digital Presence",
    description:
      "Partner with us to elevate your brand through strategic digital marketing, innovative web solutions, and data-driven growth strategies.",
    image: "/images/hero-1.jpg",
    cta: {
      primary: { text: "Get Started", link: "/contact" },
      secondary: { text: "Our Services", link: "/services" }
    }
  },
  {
    title: "Results-Driven Solutions",
    heading: "Grow Your Business Online",
    description:
      "From SEO and social media to web development and branding, we deliver comprehensive digital solutions that drive real results.",
    image: "/images/hero-2.jpg",
    cta: {
      primary: { text: "Learn More", link: "/about" }
    }
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Add ref to store timer
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const startTimer = useCallback(() => {
    // Clear existing timer if any
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    // Start new timer
    timerRef.current = setInterval(nextSlide, 7000);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startTimer(); // Reset timer on manual navigation
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startTimer(); // Reset timer on manual navigation
  };

  // Initialize timer
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    
    const swipeDistance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextSlide(); // This will also reset the timer
      } else {
        prevSlide(); // This will also reset the timer
      }
    }

    // Reset touch coordinates
    setTouchStartX(0);
    setTouchEndX(0);
  };

  // Update dot click handler to reset timer
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    startTimer(); // Reset timer on manual navigation
  };

  return (
    <div 
      className="relative min-h-[550px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] bg-dark touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            currentSlide === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 select-none"
                style={{ touchAction: 'pan-y pinch-zoom' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent z-10" />
                
                <div className="absolute inset-0">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover brightness-[1.2]"
                    style={{
                      objectPosition: index === 0 ? 'center 5%' : 'center center'
                    }}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10" />

                <div className="container mx-auto px-4 h-full relative z-20">
                  <div className="flex items-center h-full">
                    <div className="w-full lg:w-3/5 xl:w-1/2 pt-16 md:pt-24 pb-20">
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="space-y-4 sm:space-y-6"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-6 sm:w-8 h-[2px] bg-primary" />
                          <span className="text-primary font-bold tracking-wider uppercase text-xs">
                            {slide.title}
                          </span>
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                          {slide.heading}
                        </h1>
                        
                        <p className="text-base sm:text-lg text-gray-100 max-w-2xl leading-relaxed">
                          {slide.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                          <Link
                            to={slide.cta.primary.link}
                            className="group relative px-6 py-3.5 bg-primary text-center overflow-hidden rounded-lg transition-all duration-300"
                          >
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative font-semibold text-white">
                              {slide.cta.primary.text}
                            </span>
                          </Link>
                          {slide.cta.secondary && (
                            <Link
                              to={slide.cta.secondary.link}
                              className="group px-6 py-3.5 border-2 text-center border-white/30 hover:border-white text-white rounded-lg transition-all duration-300"
                            >
                              <span className="font-semibold">
                                {slide.cta.secondary.text}
                              </span>
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`relative h-1.5 sm:h-2 transition-all duration-500 ${
              currentSlide === index ? "w-6 sm:w-8 bg-primary" : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/80"
            } rounded-full`}
          />
        ))}
      </div>

      <div className="hidden lg:block">
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full border-2 border-white/30 text-white hover:bg-primary hover:border-primary transition-all duration-300 z-20"
        >
          <FaArrowLeft className="text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full border-2 border-white/30 text-white hover:bg-primary hover:border-primary transition-all duration-300 z-20"
        >
          <FaArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
