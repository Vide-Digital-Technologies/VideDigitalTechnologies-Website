import PageHeader from '../components/common/PageHeader'
import ServicesGrid from '../components/sections/ServicesGrid'
import PricingSection from '../components/sections/PricingSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'

const Services = () => {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' }
        ]} 
      />
      <ServicesGrid />
      <PricingSection />
      <TestimonialsSection />
    </>
  )
}

export default Services