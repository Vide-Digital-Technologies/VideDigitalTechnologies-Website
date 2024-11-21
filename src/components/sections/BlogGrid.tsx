import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface BlogGridProps {
  currentPage: number
  onPageChange: (page: number) => void
}

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Digital Marketing in 2024',
    excerpt: 'Explore emerging trends and technologies shaping the digital marketing landscape and how businesses can stay ahead.',
    image: '/images/blog-1.jpg',
    category: 'Digital Marketing',
    date: 'March 15, 2024',
    author: 'Sarah Chen'
  },
  {
    id: 2,
    title: 'Maximizing ROI with Social Media Marketing',
    excerpt: 'Learn effective strategies to improve your social media marketing return on investment and engage your target audience.',
    image: '/images/blog-2.jpg',
    category: 'Social Media',
    date: 'March 10, 2024',
    author: 'Mike Anderson'
  }
]

const BlogGrid = ({ currentPage, onPageChange }: BlogGridProps) => {
  const postsPerPage = 6
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-body mb-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3 hover:text-primary transition-colors">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="text-body mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-primary font-medium hover:text-dark transition-colors"
              >
                Read More →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index + 1)}
              className={`w-10 h-10 rounded-full ${
                currentPage === index + 1
                  ? 'bg-primary text-white'
                  : 'bg-light text-dark hover:bg-primary hover:text-white'
              } transition-colors`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogGrid