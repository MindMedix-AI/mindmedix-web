interface JsonLdProps {
  locale?: string
}

export default function JsonLd({ locale = 'en' }: JsonLdProps) {
  const isEn = locale === 'en'

  const faqData = isEn ? [
    { q: 'What is MindMedix AI?', a: 'MindMedix AI is a European healthcare AI company building predictive operational intelligence for hospitals. We help healthcare systems forecast workforce shortages, detect burnout risks, and optimize operations before crises occur.' },
    { q: 'How accurate is the prediction model?', a: 'Our model achieves 97% recall on staffing shortage prediction and 97.1% overall accuracy validated through Leave-One-Ward-Out cross-validation on 34 real hospital wards.' },
    { q: 'How far in advance can you predict staffing shortages?', a: 'MindMedix AI predicts operational stress and staffing shortages up to 3 weeks in advance, giving hospital administrators actionable time to intervene.' },
    { q: 'Is MindMedix AI compliant with GDPR and EU AI Act?', a: 'Yes. MindMedix AI is built GDPR-ready (Art. 89) and EU AI Act-ready. We process only anonymized operational metadata — zero patient data.' },
    { q: 'Is this a medical device?', a: 'No. MindMedix AI is an operational intelligence platform, not a medical device. It does not provide clinical decision support or patient diagnosis.' },
    { q: 'Which hospitals can use MindMedix AI?', a: 'MindMedix AI is designed for European hospitals of any size. Our model has been validated on medium-to-large hospital wards and integrates with existing HR and scheduling systems.' },
    { q: 'How much does MindMedix AI cost?', a: 'MindMedix AI is currently available through our pilot program. Contact us for a strategic consultation and pilot pricing tailored to your hospital system.' },
    { q: 'How long does implementation take?', a: 'Initial deployment typically takes 4-8 weeks, including data integration, model calibration, and team training.' },
  ] : [
    { q: 'Cos\'è MindMedix AI?', a: 'MindMedix AI è una startup europea di AI sanitaria che sviluppa intelligenza operativa predittiva per gli ospedali. Aiutiamo i sistemi sanitari a prevedere carenze di personale, rilevare rischi di burnout e ottimizzare le operazioni prima delle crisi.' },
    { q: 'Quanto è accurato il modello predittivo?', a: 'Il nostro modello raggiunge un Recall del 97% nella previsione delle carenze di personale e un\'accuratezza complessiva del 97,1%, validata con Leave-One-Ward-Out su 34 reparti ospedalieri reali.' },
    { q: 'Con quanto anticipo potete prevedere le carenze?', a: 'MindMedix AI prevede stress operativo e carenze di personale fino a 3 settimane in anticipo, dando ai direttori sanitari il tempo per intervenire.' },
    { q: 'MindMedix AI è conforme a GDPR e AI Act?', a: 'Sì. MindMedix AI è GDPR-ready (Art. 89) e EU AI Act-ready. Elaboriamo solo metadati operativi anonimizzati — zero dati paziente.' },
    { q: 'È un dispositivo medico?', a: 'No. MindMedix AI è una piattaforma di intelligence operativa, non un dispositivo medico. Non fornisce supporto decisionale clinico né diagnosi.' },
    { q: 'Quanto costa MindMedix AI?', a: 'MindMedix AI è attualmente disponibile tramite il nostro programma pilota. Contattaci per una consulenza strategica e prezzi pilota personalizzati.' },
    { q: 'Quanto tempo richiede l\'implementazione?', a: 'Il deployment iniziale richiede generalmente 4-8 settimane, inclusa integrazione dati, calibrazione del modello e formazione del team.' },
  ]

  const howItWorksSteps = isEn ? [
    { name: 'Connect', text: 'Integrate with existing HR and shift scheduling systems. We ingest anonymized operational data — no patient data required.' },
    { name: 'Analyze', text: 'Our AI processes 30+ operational risk indicators to build a comprehensive picture of each ward\'s health.' },
    { name: 'Predict', text: 'The prediction model identifies wards at risk of staffing shortages and operational stress up to 3 weeks in advance.' },
    { name: 'Act', text: 'Hospital administrators receive clear risk flags (green/yellow/red) and actionable recommendations to prevent crises.' },
  ] : [
    { name: 'Connetti', text: 'Integrazione con i sistemi HR e di turnistica esistenti. Elaboriamo solo dati operativi anonimizzati — nessun dato paziente.' },
    { name: 'Analizza', text: 'La nostra AI elabora oltre 30 indicatori di rischio operativo per costruire un quadro completo della salute di ogni reparto.' },
    { name: 'Prevedi', text: 'Il modello predittivo identifica i reparti a rischio di carenza di personale e stress operativo fino a 3 settimane in anticipo.' },
    { name: 'Agisci', text: 'I direttori sanitari ricevono chiari indicatori di rischio (verde/giallo/rosso) e raccomandazioni attuabili per prevenire le crisi.' },
  ]

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
        'foundingDate': '2024',
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
          'https://www.linkedin.com/company/mindmedix-ai',
          'https://github.com/MindMedix-AI'
        ]
      },
      {
        '@type': 'Person',
        '@id': 'https://mindmedixai.health/en/team/#person',
        'name': 'Sassi Hamdi',
        'jobTitle': 'Founder & CEO',
        'url': 'https://mindmedixai.health/en/team',
        'worksFor': { '@id': 'https://mindmedixai.health/#organization' },
        'description': 'Founder & CEO of MindMedix AI. Architect of hospital operations intelligence and predictive healthcare workforce systems.',
        'sameAs': ['https://www.linkedin.com/in/sassi-hamdi/']
      },
      {
        '@type': 'WebSite',
        '@id': 'https://mindmedixai.health/#website',
        'url': 'https://mindmedixai.health',
        'name': 'MindMedix AI',
        'description': 'Predictive operational intelligence for European hospitals',
        'publisher': { '@id': 'https://mindmedixai.health/#organization' },
        'inLanguage': ['en', 'it'],
        'potentialAction': {
          '@type': 'SearchAction',
          'target': { '@type': 'EntryPoint', 'urlTemplate': 'https://mindmedixai.health/?q={search_term_string}' },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://mindmedixai.health/#breadcrumb',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://mindmedixai.health' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Team', 'item': 'https://mindmedixai.health/en/team' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://mindmedixai.health/#faq',
        'mainEntity': faqData.map(item => ({
          '@type': 'Question',
          'name': item.q,
          'acceptedAnswer': { '@type': 'Answer', 'text': item.a }
        }))
      },
      {
        '@type': 'HowTo',
        '@id': 'https://mindmedixai.health/#how-it-works',
        'name': isEn ? 'How MindMedix AI Works' : 'Come funziona MindMedix AI',
        'description': isEn ? 'MindMedix AI predicts hospital workforce shortages in 4 steps.' : 'MindMedix AI prevede le carenze di personale in 4 passaggi.',
        'step': howItWorksSteps.map((step, i) => ({
          '@type': 'HowToStep',
          'position': i + 1,
          'name': step.name,
          'text': step.text
        }))
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



