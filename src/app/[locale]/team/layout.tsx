import type { Metadata } from 'next'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEn = locale === 'en'
  return {
    title: isEn 
      ? 'Team & Leadership | MindMedix AI' 
      : 'Team & Leadership | MindMedix AI | Sassi Hamdi',
    description: isEn 
      ? 'Meet the multi-disciplinary team driving predictive workforce intelligence for European hospitals. Uniting clinical expertise and data science to protect healthcare workers.' 
      : 'Incontra il team di MindMedix AI. Uniamo competenze cliniche e ingegneria dei dati per proteggere la forza lavoro e prevenire le carenze di personale negli ospedali.',
    alternates: {
      canonical: `/${locale}/team`,
      types: {
        'application/rss+xml': '/feed.xml',
      },
    },
  }
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

