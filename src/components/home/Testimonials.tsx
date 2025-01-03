// File can be deleted or kept commented out for future use
/*
import { FaStar } from 'react-icons/fa'
import Section from '../common/Section'

const testimonials = [
  {
    name: 'Sarah Chen',
    profession: 'CEO, TechStart Inc.',
    image: '/images/testimonial-1.jpg',
    rating: 5,
    text: 'Vide Digital transformed our online presence completely. Their SEO strategy helped us increase organic traffic by 200% in just 6 months.'
  },
  {
    name: 'Michael Rodriguez',
    profession: 'Marketing Director, GrowthBox',
    image: '/images/testimonial-2.jpg',
    rating: 5,
    text: 'Their data-driven approach to digital marketing and creative content strategy helped us achieve unprecedented growth.'
  }
]

const Testimonials = () => {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-primary font-bold mb-4">Success Stories</h4>
        <h1 className="text-4xl font-bold text-dark mb-6">
          Client Testimonials
        </h1>
        <p className="text-body">
          See how we've helped businesses achieve their digital marketing goals and drive growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-light rounded-lg overflow-hidden">
            <div className="flex p-6">
              <div className="w-1/3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="w-2/3 pl-6">
                <h4 className="text-dark font-bold mb-1">{testimonial.name}</h4>
                <p className="text-body mb-3">{testimonial.profession}</p>
                <div className="flex text-primary mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < testimonial.rating ? 'text-primary' : 'text-body'}
                    />
                  ))}
                </div>
                <p className="text-body">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Testimonials
*/