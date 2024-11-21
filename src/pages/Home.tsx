import HeroCarousel from '../components/home/HeroCarousel'
import Features from '../components/home/Features'
import AboutSection from '../components/sections/AboutSection'
import FAQSection from '../components/sections/FAQSection'
import BlogSection from '../components/sections/BlogSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <Features />
      <AboutSection />
      <FAQSection />
      <BlogSection />
      <TestimonialsSection />
    </>
  )
}

export default Home