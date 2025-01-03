import SEO from '../components/common/SEO'
import { pageMetadata } from '../utils/seo'
import HeroCarousel from '../components/home/HeroCarousel'
import Features from '../components/home/Features'
import AboutSection from '../components/sections/AboutSection'
import CTASection from '../components/sections/CTASection'
import FAQSection from '../components/sections/FAQSection'

const Home = () => {
  return (
    <>
      <SEO 
        title={pageMetadata.home.title}
        description={pageMetadata.home.description}
        keywords={pageMetadata.home.keywords}
        url="/"
      />
      <HeroCarousel />
      <Features />
      <CTASection />
      <AboutSection />
      <FAQSection />
    </>
  )
}

export default Home