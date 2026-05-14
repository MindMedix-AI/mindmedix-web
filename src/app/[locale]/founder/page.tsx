'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { translations, Locale } from '@/lib/translations'
import Link from 'next/link'

export default function FounderPage({ params: { locale } }: { params: { locale: string } }) {
  const t = translations[locale as Locale].about
  const isIt = locale === 'it'
  
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6 bg-[#0a1929] min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-12 flex items-center gap-2 text-sm text-slate-500">
            <Link href={`/${locale}`} className="hover:text-[#2d8cff]">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Founder</span>
          </nav>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Left Column: Profile Card */}
            <div className="md:col-span-1 space-y-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
                <div className="aspect-square rounded-xl overflow-hidden mb-6 border border-white/10 bg-[#2d8cff]/10 flex items-center justify-center relative">
                  <img 
                    src="/images/founder.jpg" 
                    alt="Sassi Hamdi"
                    className="absolute inset-0 w-full h-full object-cover z-20"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                  <span className="text-[#2d8cff] text-4xl font-bold z-10">SH</span>
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">Sassi Hamdi</h1>
                <p className="text-[#2d8cff] font-medium text-sm uppercase tracking-wider mb-6">
                  {t.founderBlock.founderRole}
                </p>
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <a 
                    href="https://www.linkedin.com/in/sassi-hamdi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-[#0077b5] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="text-sm font-medium">LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#2d8cff]/5 p-6">
                <h3 className="text-white font-semibold mb-4">Focus Areas</h3>
                <ul className="space-y-3">
                  {[
                    'Hospital Operations Intelligence',
                    'Workforce Resilience',
                    'Enterprise AI Infrastructure',
                    'Privacy-First Healthcare'
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#2d8cff]" />
                       {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Bio & Vision */}
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-semibold text-white mb-6">
                  {isIt ? 'Visione del Fondatore' : 'Founder\'s Vision'}
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-6 leading-relaxed text-lg">
                  <p>
                    {t.founderBlock.text}
                  </p>
                  <p>
                    {t.p2}
                  </p>
                </div>
              </section>

              <section className="p-8 rounded-2xl bg-gradient-to-br from-[#2d8cff]/10 to-transparent border border-[#2d8cff]/20">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#2d8cff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {isIt ? 'Il mio impegno per la privacy' : 'My commitment to privacy'}
                </h3>
                <p className="text-slate-400">
                  {isIt 
                    ? 'In qualità di ingegnere e fondatore, credo che l\'IA sanitaria debba essere costruita sul rispetto assoluto per i dati. MindMedix AI non tocca mai le cartelle cliniche. Lavoriamo solo con i flussi operativi per proteggere la forza lavoro e migliorare l\'efficienza, garantendo che ogni sistema sia conforme alle rigorose normative europee.'
                    : 'As an engineer and founder, I believe healthcare AI must be built on absolute respect for data. MindMedix AI never touches patient records. We work only with operational flows to protect the workforce and improve efficiency, ensuring every system complies with rigorous European regulations.'
                  }
                </p>
              </section>

              <div className="pt-12 border-t border-white/5">
                <a 
                  href="https://calendly.com/hamdysassy7/intro"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a1929] rounded-xl font-semibold hover:bg-slate-100 transition-all text-lg shadow-xl shadow-white/5"
                >
                  {isIt ? 'Pianifica una call con il team' : 'Schedule a call with the team'}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
