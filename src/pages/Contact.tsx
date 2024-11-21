import PageHeader from '../components/common/PageHeader'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import Map from '../components/contact/Map'

const Contact = () => {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '/contact' }
        ]} 
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
      </div>
      <Map />
    </>
  )
}

export default Contact