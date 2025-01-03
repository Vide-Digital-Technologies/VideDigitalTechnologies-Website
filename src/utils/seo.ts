interface MetaData {
  title: string;
  description: string;
  keywords: string[];
}

export const siteMetadata = {
  siteUrl: 'https://videdigitaltechnologies.tech',
  siteName: 'Vide Digital Technologies',
  defaultTitle: 'Vide Digital Technologies | Digital Marketing & Web Development Agency',
  titleTemplate: '%s | Vide Digital Technologies',
  defaultDescription: 'Leading digital marketing and web development agency in Bengaluru. We specialize in SEO, social media marketing, web development, and comprehensive digital solutions.',
  defaultKeywords: ['digital marketing', 'web development', 'SEO', 'social media marketing', 'Bengaluru', 'Karnataka', 'digital agency'],
  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
  }
}

export const pageMetadata: Record<string, MetaData> = {
  home: {
    title: 'Digital Marketing & Web Development Agency in Bengaluru',
    description: 'Transform your digital presence with Vide Digital Technologies. We offer expert digital marketing, web development, and SEO services in Bengaluru.',
    keywords: ['digital marketing agency', 'web development company', 'SEO services', 'Bengaluru']
  },
  about: {
    title: 'About Us - Leading Digital Agency in Bengaluru',
    description: 'Learn about Vide Digital Technologies, your trusted partner for digital marketing and web development solutions in Bengaluru.',
    keywords: ['digital agency Bengaluru', 'about us', 'digital marketing company']
  },
  services: {
    title: 'Our Services - Digital Marketing, Web Development & SEO',
    description: 'Comprehensive digital services including SEO, social media marketing, web development, and content creation for businesses in Bengaluru.',
    keywords: ['digital services', 'SEO services', 'social media marketing', 'web development']
  },
  contact: {
    title: 'Contact Us - Get Digital Marketing Solutions',
    description: 'Contact Vide Digital Technologies for expert digital marketing and web development services in Bengaluru. Get in touch today!',
    keywords: ['contact us', 'digital marketing agency contact', 'Bengaluru']
  }
} 