'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Hero() {
  const { locale } = useLanguage()
  const t = translations[locale].hero

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-[50%_30%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/60 via-[#0a1929]/30 to-[#0a1929]/85" />
      </div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#2d8cff]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#2d8cff]/4 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className="flex justify-center mb-4">
          <Image
            src="/logo.png"
            alt="MindMedix AI"
            width={576}
            height={384}
            priority
            sizes="(max-width: 640px) 140px, (max-width: 1024px) 160px, 180px"
            style={{ height: 'clamp(100px, 12vw, 160px)', width: 'auto' }}
            className="object-contain"
          />
        </div>
        <p className="text-sm font-medium text-[#2d8cff] tracking-wider uppercase mb-4">
          {t.label}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {t.headline}
        </h1>
        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-6 leading-relaxed">
          {t.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a
            href="https://calendly.com/hamdysassy7/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-base font-medium bg-[#2d8cff] text-white rounded-lg hover:bg-[#2472d9] transition shadow-lg shadow-[#2d8cff]/20 text-center"
          >
            {t.ctaPilot}
          </a>
          <Link
            href={`/${locale}/demo`}
            className="w-full sm:w-auto px-8 py-4 text-base font-medium border border-[#2d8cff] text-[#2d8cff] rounded-lg hover:bg-[#2d8cff]/10 transition flex items-center justify-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            {t.ctaDemo}
          </Link>
        </div>

        <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">
          {t.authority}
        </p>

        <p className="mt-6 text-sm text-slate-500">
          {t.location}
        </p>
      </div>
    </section>
  )
}
