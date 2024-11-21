import PageHeader from '../components/common/PageHeader'
import AboutSection from '../components/sections/AboutSection'
import TeamSection from '../components/sections/TeamSection'
import Features from '../components/home/Features'

const About = () => {
  return (
    <>
      <PageHeader 
        title="About Us" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' }
        ]} 
      />
      <AboutSection />
      <Features />
      <TeamSection />
    </>
  )
}

export default About