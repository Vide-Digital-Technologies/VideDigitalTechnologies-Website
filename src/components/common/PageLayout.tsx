import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="pt-32 lg:pt-40">
      {children}
    </div>
  )
}

export default PageLayout 