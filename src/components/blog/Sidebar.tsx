import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaTag } from 'react-icons/fa'

const categories = [
  { name: 'Life Insurance', count: 15 },
  { name: 'Health Insurance', count: 12 },
  { name: 'Auto Insurance', count: 8 },
  { name: 'Home Insurance', count: 10 },
  { name: 'Business Insurance', count: 5 }
]

const recentPosts = [
  {
    title: 'Understanding Life Insurance Policies',
    date: 'March 15, 2024',
    image: '/images/blog-1.jpg'
  },
  {
    title: 'How to Choose the Right Health Coverage',
    date: 'March 10, 2024',
    image: '/images/blog-2.jpg'
  },
  {
    title: 'Top Tips for Auto Insurance',
    date: 'March 5, 2024',
    image: '/images/blog-3.jpg'
  }
]

const tags = [
  'Insurance', 'Health', 'Life', 'Auto', 'Home', 'Business', 
  'Coverage', 'Protection', 'Family', 'Investment'
]

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-light p-6 rounded-lg">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-200 focus:border-primary focus:outline-none"
          />
          <FaSearch className="absolute right-3 top-3 text-body" />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-light p-6 rounded-lg">
        <h3 className="text-xl font-bold text-dark mb-4">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                to={`/blog/category/${category.name.toLowerCase()}`}
                className="flex items-center justify-between text-body hover:text-primary transition-colors"
              >
                <span>{category.name}</span>
                <span>({category.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-light p-6 rounded-lg">
        <h3 className="text-xl font-bold text-dark mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <Link
              key={index}
              to="/blog"
              className="flex items-start space-x-4 group"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h4 className="font-medium text-dark group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-sm text-body">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-light p-6 rounded-lg">
        <h3 className="text-xl font-bold text-dark mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link
              key={index}
              to={`/blog/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 bg-white rounded text-body hover:text-primary transition-colors"
            >
              <FaTag className="inline-block mr-1 text-xs" />
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar