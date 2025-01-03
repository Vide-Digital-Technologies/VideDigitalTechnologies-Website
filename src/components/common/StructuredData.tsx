const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DigitalMarketingAgency",
    "name": "Vide Digital Technologies",
    "image": "https://videdigitaltechnologies.tech/images/logo.png",
    "description": "Digital marketing and web development agency in Bengaluru",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "url": "https://videdigitaltechnologies.tech",
    "telephone": "+918660735813",
    "email": "videdigitaltechnologies@gmail.com",
    "priceRange": "₹₹"
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  )
}

export default StructuredData 