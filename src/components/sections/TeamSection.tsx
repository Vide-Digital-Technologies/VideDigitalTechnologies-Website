import { motion } from 'framer-motion'
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa'
import Section from '../common/Section'

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: '/images/team/team-1.jpg',
    bio: 'Digital marketing strategist with 10+ years of experience in growing businesses.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:john@videdigital.com'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    image: '/images/team/team-2.jpg',
    bio: 'Expert in social media marketing and content strategy development.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:sarah@videdigital.com'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Technical Lead',
    image: '/images/team/team-3.jpg',
    bio: 'Specialized in web development and SEO optimization strategies.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:michael@videdigital.com'
    }
  },
  {
    name: 'Emma Wilson',
    role: 'Creative Director',
    image: '/images/team/team-4.jpg',
    bio: 'Award-winning designer with expertise in brand development.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:emma@videdigital.com'
    }
  }
]

const TeamSection = () => {
  return (
    <Section className="bg-gradient-to-b from-white to-light py-20">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h4 className="text-primary font-bold mb-3 uppercase tracking-wider">Our Team</h4>
        <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
          Meet Our Expert Team
        </h2>
        <p className="text-gray-600 text-lg">
          Our talented professionals bring years of experience and expertise to help your business succeed.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-center space-x-4">
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
                      >
                        <FaLinkedinIn />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href={member.social.email}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
                      >
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-dark mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default TeamSection