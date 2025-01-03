import { Helmet } from 'react-helmet-async'
import { siteMetadata } from '../../utils/seo'

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  image = '/images/og-image.jpg',
  url 
}: SEOProps) => {
  const siteUrl = siteMetadata.siteUrl
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl
  const pageTitle = title ? `${title} | ${siteMetadata.siteName}` : siteMetadata.defaultTitle
  const pageDescription = description || siteMetadata.defaultDescription
  const pageKeywords = [...siteMetadata.defaultKeywords, ...keywords].join(', ')

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO 