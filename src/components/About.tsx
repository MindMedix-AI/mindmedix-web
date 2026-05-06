'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function About() {
  const { locale } = useLanguage()
  const t = translations[locale].about

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-[#2d8cff] tracking-wider uppercase mb-4">
          {t.label}
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
          {t.title}
        </h2>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          {/* Founder/Credibility Block */}
          <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-[#2d8cff]/10 to-transparent border border-[#2d8cff]/20">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2d8cff]" />
              {t.founderBlock.label}
            </h3>
            <p className="text-slate-300 mb-4 italic">
              &quot;{t.founderBlock.text}&quot;
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#2d8cff]/20 bg-[#2d8cff]/10 flex items-center justify-center">
                  <img 
                    src="/images/founder.jpg" 
                    alt={t.founderBlock.founderName}
                    className="absolute inset-0 w-full h-full object-cover z-20"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                  <span className="text-[#2d8cff] font-bold z-10">
                    {t.founderBlock.founderName.split(' ').map((n: string) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold leading-tight">{t.founderBlock.founderName}</p>
                  <p className="text-xs text-[#2d8cff] uppercase tracking-widest font-medium">{t.founderBlock.founderRole}</p>
                </div>
              </div>
              <a 
                href="https://www.linkedin.com/in/sassi-hamdi/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#0077b5]/10 text-slate-400 hover:text-[#0077b5] transition-all border border-white/5"
                aria-label="Sassi Hamdi Personal LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <p className="text-lg">
            {t.p1}
          </p>
          <p>
            {t.p2}
          </p>
          <p>
            {t.p3}
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5">
            <span className="text-sm text-slate-500">{t.location}</span>
            <p className="font-medium text-white">{t.locationValue}</p>
          </div>
          <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5">
            <span className="text-sm text-slate-500">{t.stage}</span>
            <p className="font-medium text-white">{t.stageValue}</p>
          </div>
          <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5">
            <span className="text-sm text-slate-500">{(t as any).founded}</span>
            <p className="font-medium text-white">{(t as any).foundedValue}</p>
          </div>
          <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5">
            <span className="text-sm text-slate-500">{t.focus}</span>
            <p className="font-medium text-white">{t.focusValue}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
