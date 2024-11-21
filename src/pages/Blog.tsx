import { useState } from 'react'
import PageHeader from '../components/common/PageHeader'
import BlogGrid from '../components/sections/BlogGrid'
import Sidebar from '../components/blog/Sidebar'

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
      <PageHeader 
        title="Latest Blog" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' }
        ]} 
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogGrid currentPage={currentPage} onPageChange={setCurrentPage} />
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default Blog