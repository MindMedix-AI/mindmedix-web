export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalOrganization',
        '@id': 'https://mindmedixai.health/#organization',
        'name': 'MindMedix AI',
        'url': 'https://mindmedixai.health',
        'logo': 'https://mindmedixai.health/logo.png',
        'description': 'MindMedix AI is an institutional workforce intelligence platform for European hospitals. It helps hospital operations leaders anticipate staffing shortages, operational stress, and workforce instability using predictive operational AI.',
        'foundingDate': '2026-01-14',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Ancona',
          'addressCountry': 'IT'
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'email': 'contact@mindmedixai.health',
          'contactType': 'institutional inquiry',
          'availableLanguage': ['Italian', 'English']
        },
        'founder': {
          '@id': 'https://mindmedixai.health/en/team/#person'
        },
        'sameAs': [
          'https://www.linkedin.com/company/mindmedix-ai'
        ]
      },
      {
        '@type': 'Person',
        '@id': 'https://mindmedixai.health/en/team/#person',
        'name': 'Sassi Hamdi',
        'jobTitle': 'Founder & CEO',
        'url': 'https://mindmedixai.health/en/team',
        'worksFor': {
          '@id': 'https://mindmedixai.health/#organization'
        },
        'description': 'Founder & CEO of MindMedix AI. Architect of hospital operations intelligence and predictive healthcare workforce systems.',
        'sameAs': [
          'https://www.linkedin.com/in/sassi-hamdi/'
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      id="json-ld"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}



