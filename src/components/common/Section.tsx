import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
}

const Section = ({ children, className = '', containerClassName = '' }: SectionProps) => {
  return (
    <section className={twMerge('py-16 lg:py-24', className)}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}

export default Section