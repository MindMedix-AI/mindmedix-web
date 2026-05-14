import type { Metadata } from 'next'
import { translations, Locale } from '@/lib/translations'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEn = locale === 'en'
  return {
    title: isEn ? 'Sassi Hamdi | Founder & CEO, MindMedix AI' : 'Sassi Hamdi | Founder & CEO, MindMedix AI',
    description: isEn 
      ? 'Official profile and vision of Sassi Hamdi, Founder & CEO of MindMedix AI. Specialized in hospital operations intelligence and workforce resilience.' 
      : 'Profilo ufficiale e visione di Sassi Hamdi, Founder & CEO di MindMedix AI. Specializzato in intelligenza operativa sanitaria e resilienza della forza lavoro.',
    alternates: {
      canonical: `/${locale}/founder`,
    },
  }
}

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
