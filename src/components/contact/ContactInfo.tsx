import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const contactDetails = [
  {
    icon: FaEnvelope,
    title: 'Email',
    details: ['Videdigitaltechnologies@gmail.com']
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    details: ['Bengaluru', 'Karnataka, India']
  },
  {
    icon: FaClock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 - 18:00', 'Sunday: Closed']
  }
]

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-dark mb-6">Contact Information</h2>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <FaPhone className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-dark mb-1">Phone</h3>
            <a 
              href="tel:+918660735813" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              +91 86607 35813
            </a>
          </div>
        </div>
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <item.icon className="text-xl text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-body">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactInfo