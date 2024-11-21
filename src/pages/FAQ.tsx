import PageHeader from '../components/common/PageHeader'
import FAQSection from '../components/sections/FAQSection'
import ContactSection from '../components/sections/ContactSection'

const FAQ = () => {
  return (
    <>
      <PageHeader 
        title="FAQs" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Pages', path: '#' },
          { label: 'FAQs', path: '/faq' }
        ]} 
      />
      <FAQSection />
      <ContactSection />
    </>
  )
}

export default FAQ