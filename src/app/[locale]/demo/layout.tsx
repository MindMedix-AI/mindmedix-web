import type { Metadata } from 'next'

export async function generateMetadata(
  { params: { locale } }: { params: { locale: string } }
): Promise<Metadata> {
  const isEn = locale === 'en'
  return {
    title: isEn
      ? 'Live Demo — MindMedix AI | Hospital Staffing Risk Prediction'
      : 'Demo Live — MindMedix AI | Previsione Rischio Personale Ospedaliero',
    description: isEn
      ? 'Interactive demo: see how MindMedix AI predicts staffing crises 3 weeks in advance. 97% crisis recall. Validated on 34 real Italian hospital wards.'
      : 'Demo interattiva: scopri come MindMedix AI prevede le crisi del personale 3 settimane prima. 97% di rilevamento. Validato su 34 reparti reali.',
    alternates: {
      canonical: `/${locale}/demo`,
      types: {
        'application/rss+xml': '/feed.xml',
      },
    },
  }
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
