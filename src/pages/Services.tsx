import PageLayout from '../components/common/PageLayout'
import PageHeader from '../components/common/PageHeader'
import Features from '../components/home/Features'
// import PricingPlans from '../components/sections/PricingPlans'  // Comment out
// import Testimonials from '../components/home/Testimonials'      // Comment out

const Services = () => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' }
  ]

  return (
    <PageLayout>
      <PageHeader 
        title="Our Services" 
        breadcrumbs={breadcrumbs} 
      />
      <Features />
      {/* Remove or comment out these components */}
      {/* <PricingPlans /> */}
      {/* <Testimonials /> */}
    </PageLayout>
  )
}

export default Services