import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' }
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'Videdigitaltechnologies@gmail.com'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' }
      })

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' }
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:outline-none"
          required
        />
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
          disabled={status.submitting}
          className={`w-full bg-primary text-white px-8 py-3 rounded-lg hover:bg-dark transition-colors ${
            status.submitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>

        {status.info.msg && (
          <div
            className={`p-4 rounded-lg ${
              status.info.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}
          >
            {status.info.msg}
          </div>
        )}
      </form>
    </motion.div>
  )
}

export default ContactForm