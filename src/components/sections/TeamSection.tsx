import { motion } from 'framer-motion'
import Section from '../common/Section'
import SocialLinks from '../common/SocialLinks'

const team = [
  {
    name: 'John Smith',
    position: 'CEO & Founder',
    image: '/images/team-1.jpg'
  },
  {
    name: 'Sarah Johnson',
    position: 'Insurance Expert',
    image: '/images/team-2.jpg'
  },
  {
    name: 'Michael Brown',
    position: 'Financial Advisor',
    image: '/images/team-3.jpg'
  },
  {
    name: 'Emily Davis',
    position: 'Customer Relations',
    image: '/images/team-4.jpg'
  }
]

const TeamSection = () => {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-primary font-bold mb-2">Our Team</h4>
        <h1 className="text-4xl font-bold text-dark mb-4">
          Meet Our Expert Team
        </h1>
        <p className="text-body">
          Our dedicated team of professionals is here to help you with all your insurance needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <SocialLinks variant="light" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-dark mb-1">{member.name}</h3>
              <p className="text-body">{member.position}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default TeamSection