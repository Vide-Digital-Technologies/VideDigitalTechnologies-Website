import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Section from '../common/Section'

const blogPosts = [
  {
    image: '/images/blog-1.jpg',
    category: 'Insurance',
    date: 'Jan 01, 2024',
    title: 'How to choose the right insurance plan',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  // Add more blog posts
]

const BlogSection = () => {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-primary font-bold mb-2">Our Blog</h4>
        <h1 className="text-4xl font-bold text-dark mb-4">
          Latest Blog & News
        </h1>
        <p className="text-body">
          Stay updated with our latest insights and news about insurance and financial planning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-light rounded-lg overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-white px-4 py-2">
                <span className="text-primary font-medium">{post.category}</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-body mb-2">{post.date}</p>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-body mb-4">{post.excerpt}</p>
              <Link 
                to="/blog" 
                className="text-dark font-medium hover:text-primary transition-colors"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default BlogSection