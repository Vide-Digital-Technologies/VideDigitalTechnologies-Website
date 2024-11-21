import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Breadcrumb {
  label: string
  path: string
}

interface PageHeaderProps {
  title: string
  breadcrumbs: Breadcrumb[]
}

const PageHeader = ({ title, breadcrumbs }: PageHeaderProps) => {
  return (
    <div className="bg-light py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-dark mb-4">{title}</h1>
          <nav>
            <ol className="flex items-center justify-center space-x-2">
              {breadcrumbs.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2 text-body">/</span>}
                  {item.path === '#' ? (
                    <span className="text-body">{item.label}</span>
                  ) : (
                    <Link
                      to={item.path}
                      className={`${
                        index === breadcrumbs.length - 1
                          ? 'text-primary'
                          : 'text-body hover:text-primary'
                      } transition-colors`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </motion.div>
      </div>
    </div>
  )
}

export default PageHeader
