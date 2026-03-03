export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Raicha',
    url: 'https://raicha.com',
    logo: 'https://raicha.com/logo.png',
    description: 'Leading electrical contracting company in East Africa since 1994',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254-XXX-XXX-XXX',
      contactType: 'Customer Service',
      areaServed: ['KE', 'UG', 'TZ', 'RW'],
      availableLanguage: ['en', 'sw'],
    },
    sameAs: [
      'https://www.facebook.com/raicha',
      'https://www.linkedin.com/company/raicha',
      'https://twitter.com/raicha',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Raicha',
    image: 'https://raicha.com/logo.png',
    '@id': 'https://raicha.com',
    url: 'https://raicha.com',
    telephone: '+254-XXX-XXX-XXX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Nairobi',
      postalCode: '00100',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.286389,
      longitude: 36.817223,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}