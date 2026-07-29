import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProofBar from '@/components/ProofBar'
import WhoWeServe from '@/components/WhoWeServe'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import Transparency from '@/components/Transparency'
import ValueProposition from '@/components/ValueProposition'
import Trust from '@/components/Trust'
import About from '@/components/About'
import Faq from '@/components/Faq'
import PilotOffer from '@/components/PilotOffer'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isEn = locale === 'en'
  return {
    title: isEn 
      ? 'Predictive Workforce Intelligence | MindMedix AI for European Hospitals' 
      : 'Intelligenza Operativa Predittiva | MindMedix AI per Ospedali Europei',
    description: isEn
      ? 'Predictive workforce intelligence platform for European hospitals. Forecast staffing shortages, operational stress, and burnout 3 weeks ahead with 97% recall. Validated on 34 real hospital wards.'
      : 'Piattaforma di intelligence operativa predittiva per ospedali europei. Prevedi carenze di personale, stress operativo e burnout con 3 settimane di anticipo. Recall 97%. Validato su 34 reparti reali.',
    openGraph: {
      title: isEn ? 'MindMedix AI | Workforce Intelligence for European Hospitals' : 'MindMedix AI | Intelligenza Operativa Ospedaliera',
      description: isEn
        ? 'Predictive workforce intelligence for European hospitals. Forecast staffing shortages and burnout 3 weeks in advance. 97% crisis recall.'
        : 'Intelligenza operativa predittiva per ospedali europei. Prevedi carenze personale e burnout con 3 settimane di anticipo. Recall crisi 97%.',
      images: [{ url: 'https://mindmedixai.health/mindmedix_ai_cover.jpeg', width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `/${locale}`,
    },
  }
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProofBar />
        <WhoWeServe />
        <Problem />
        <Solution />
        <HowItWorks />
        <Transparency />
        <ValueProposition />
        <Trust />
        <About />
        <Faq />
        <PilotOffer />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

