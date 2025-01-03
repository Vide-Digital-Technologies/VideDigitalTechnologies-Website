import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-8">404</h1>
        <h2 className="text-4xl font-bold text-dark mb-4">Page Not Found</h2>
        <p className="text-body mb-8">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-dark transition-colors"
        >
          <FaHome className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound