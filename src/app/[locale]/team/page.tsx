'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { translations, Locale } from '@/lib/translations'
import Link from 'next/link'

export default function TeamPage({ params: { locale } }: { params: { locale: string } }) {
  const t = translations[locale as Locale].about
  const isIt = locale === 'it'
  
  // Extract Sassi's initials
  const sassiInitials = "SH"
  
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6 bg-[#0a1929] min-h-screen">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Breadcrumbs & Title */}
          <div className="space-y-6">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link href={`/${locale}`} className="hover:text-[#2d8cff]">Home</Link>
              <span>/</span>
              <span className="text-slate-300">Team</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-sm font-medium text-[#2d8cff] tracking-widest uppercase">
                {isIt ? 'Chi Siamo' : 'About Us'}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                {(t as any).teamBlock.title}
              </h1>
              <p className="text-slate-400 text-lg sm:text-xl">
                {(t as any).teamBlock.subtitle}
              </p>
            </div>
          </div>

          {/* SECTION 1: UNIFIED TEAM PROFILES GRID */}
          <section className="space-y-8">
            {/* ROW 1: Sassi Hamdi Spotlight Card (Full-width / Broad style) */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 hover:border-[#2d8cff]/20 transition-all group">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-[#2d8cff]/10 flex items-center justify-center relative shadow-xl shadow-black/20">
                  <img 
                    src="/images/founder.jpg" 
                    alt="Sassi Hamdi"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 z-20"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                  <span className="text-[#2d8cff] text-3xl font-bold z-10">{sassiInitials}</span>
                </div>
                
                <div className="space-y-4 text-center md:text-left flex-1">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
                      Sassi Hamdi
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-[#2d8cff]/10 text-[#2d8cff] border border-[#2d8cff]/20 uppercase tracking-widest">
                        Founder
                      </span>
                    </h2>
                    <p className="text-[#2d8cff] text-sm font-semibold uppercase tracking-wider mt-1.5">
                      {t.founderBlock.founderRole}
                    </p>
                  </div>
                  
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl">
                    {isIt 
                      ? 'Ingegnere e costruttore di sistemi enterprise. Sassi ha fondato MindMedix AI per trasformare i complessi flussi operativi ospedalieri in modelli predittivi ad alta accuratezza, offrendo ai direttori sanitari gli strumenti per anticipare le crisi di personale e proteggere la forza lavoro.'
                      : 'Systems builder and enterprise architect. Sassi founded MindMedix AI to transform hospital operational complexities into highly accurate predictive intelligence, providing healthcare leaders the tools to preempt staffing crises and protect their workforce.'
                    }
                  </p>

                  <div className="pt-2 flex justify-center md:justify-start">
                    <a 
                      href="https://www.linkedin.com/in/sassi-hamdi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#0077b5] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span className="font-medium">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: Pietro Coletta and Asma Taba (Side-by-side Cards) */}
            <div className="grid md:grid-cols-2 gap-8">
              {(t as any).teamBlock.members.map((member: any, i: number) => {
                const initials = member.name.split(' ').map((n: string) => n[0]).join('')
                return (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col sm:flex-row gap-6 hover:border-[#2d8cff]/20 transition-all group">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-[#2d8cff]/10 flex items-center justify-center relative mx-auto sm:mx-0 shadow-lg shadow-black/10">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 z-20"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.opacity = '0';
                        }}
                      />
                      <span className="text-[#2d8cff] text-2xl font-bold z-10">{initials}</span>
                    </div>
                    <div className="space-y-3 text-center sm:text-left flex-1">
                      <div>
                        <h3 className="text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                          {member.name}
                          {member.role === 'Clinical Advisor' && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                              {isIt ? 'Clinico' : 'Clinical'}
                            </span>
                          )}
                          {member.role === 'Data Analyst Engineer' && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/10 text-[#2d8cff] border border-[#2d8cff]/20 uppercase tracking-wider">
                              Tech
                            </span>
                          )}
                        </h3>
                        <p className="text-[#2d8cff] text-xs font-semibold uppercase tracking-wider mt-1">{member.role}</p>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                      {member.linkedin && (
                        <div className="pt-2 flex justify-center sm:justify-start">
                          <a 
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#0077b5] transition-colors"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span className="font-medium">LinkedIn Profile</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <hr className="border-white/10" />

          {/* SECTION 2: VISION & CORE FOCUS NARRATIVE */}
          <section className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column: Sassi's Vision Letter */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2d8cff]" />
                {isIt ? 'Visione del Fondatore' : 'Founder\'s Vision'}
              </h3>
              <div className="prose prose-invert text-slate-300 space-y-4 leading-relaxed text-base">
                <p className="italic border-l-2 border-[#2d8cff]/30 pl-4 text-slate-400 py-1">
                  &quot;{t.founderBlock.text}&quot;
                </p>
                <p>
                  {t.p2}
                </p>
              </div>
            </div>

            {/* Right Column: Privacy & Security Commitment */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#2d8cff]/10 to-transparent border border-[#2d8cff]/20 space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-[#2d8cff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {isIt ? 'Il nostro impegno per la privacy' : 'Our commitment to privacy'}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {isIt 
                    ? 'In qualità di ingegnere e fondatore, credo che l\'IA sanitaria debba essere costruita sul rispetto assoluto per i dati. MindMedix AI non tocca mai le cartelle cliniche. Lavoriamo solo con i flussi operativi per proteggere la forza lavoro e migliorare l\'efficienza, garantendo che ogni sistema sia conforme alle rigorose normative europee.'
                    : 'As an engineer and founder, I believe healthcare AI must be built on absolute respect for data. MindMedix AI never touches patient records. We work only with operational flows to protect the workforce and improve efficiency, ensuring every system complies with rigorous European regulations.'
                  }
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{t.location}</p>
                  <p className="font-semibold text-white text-sm mt-1">{t.locationValue}</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{t.focus}</p>
                  <p className="font-semibold text-white text-sm mt-1">{t.focusValue}</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: GRAND FINALE CALL TO ACTION (CTA) */}
          <section className="pt-8">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#2d8cff]/10 via-[#2d8cff]/5 to-transparent border border-[#2d8cff]/20 text-center space-y-6 shadow-xl shadow-black/10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {isIt ? 'Pianifica una Consultazione Strategica' : 'Schedule a Strategic Consultation'}
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
                {isIt 
                  ? 'Fissa una call introduttiva di 15 minuti con il nostro team per scoprire come possiamo integrare il motore predittivo nel vostro ospedale.'
                  : 'Book a 15-minute introductory call with our team to explore how we can integrate our predictive intelligence engine into your hospital.'
                }
              </p>
              <div className="pt-4">
                <a 
                  href="https://calendly.com/hamdysassy7/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a1929] rounded-xl font-bold hover:bg-slate-100 transition-all text-lg shadow-xl shadow-white/5 hover:scale-[1.02] duration-200"
                >
                  {isIt ? 'Pianifica una call con il team' : 'Schedule a call with the team'}
                  <svg className="w-5 h-5 text-[#0a1929]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

