import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-light p-8 rounded-lg"
    >
      <h2 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:outline-none"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:outline-none"
          required
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:outline-none h-32 resize-none"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-dark transition-colors"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  )
}

export default ContactForm