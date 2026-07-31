'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { locale, setLocale } = useLanguage()
  const t = translations[locale].nav

  const l = (path: string) => `/${locale}${path}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1929]/90 backdrop-blur-md border-b border-white/5 overflow-visible">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between overflow-visible">
        <Link href={l('')} className="flex items-center shrink-0" style={{ height: 40 }}>
          <img
            src="/mindmedix-ai-logo-512.png"
            alt="MindMedix AI - Healthcare Operations Intelligence"
            width={40}
            height={40}
            loading="eager"
            className="rounded-lg"
            style={{
              height: '100%',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 border border-white/10 rounded-lg p-0.5" role="group" aria-label="Language">
            <button
              onClick={() => setLocale('it')}
              className={`px-3 py-1.5 rounded-md text-sm transition flex items-center gap-1.5 ${locale === 'it' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
              title="Italiano"
              aria-pressed={locale === 'it'}
            >
              <span aria-hidden>🇮🇹</span>
              <span>IT</span>
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`px-3 py-1.5 rounded-md text-sm transition flex items-center gap-1.5 ${locale === 'en' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
              title="English"
              aria-pressed={locale === 'en'}
            >
              <span aria-hidden>🇬🇧</span>
              <span>EN</span>
            </button>
          </div>
          <a href={l('/#problem')} className="text-sm text-slate-400 hover:text-white transition">
            {t.challenge}
          </a>
          <a href={l('/#solution')} className="text-sm text-slate-400 hover:text-white transition">
            {t.solution}
          </a>
          <Link href={l('/blog')} className="text-sm text-slate-400 hover:text-white transition">
            {t.blog}
          </Link>
          <Link href={l('/about')} className="text-sm text-slate-400 hover:text-white transition">
            {t.about}
          </Link>
          <Link href={l('/team')} className="text-sm text-slate-400 hover:text-white transition">
            {t.founder}
          </Link>
          <a href={l('/#contact')} className="text-sm font-medium text-[#2d8cff] hover:text-[#5cadff] transition">
            {t.contact}
          </a>
          <Link
            href={l('/demo')}
            className="px-4 py-2 text-sm font-medium border border-[#2d8cff] text-[#2d8cff] rounded-lg hover:bg-[#2d8cff]/10 transition flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            {t.liveDemo}
          </Link>
          <Link
            href={l('/#contact')}
            className="px-4 py-2 text-sm font-medium bg-white text-[#0a1929] rounded-lg hover:bg-slate-100 transition"
          >
            {t.requestPilot}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-1 border border-white/10 rounded-lg p-0.5">
            <button
              onClick={() => setLocale('it')}
              className={`px-2 py-1 rounded text-xs flex items-center gap-1 ${locale === 'it' ? 'bg-white/10 text-white' : 'text-slate-500'}`}
              aria-label="Italiano"
            >
              <span aria-hidden>🇮🇹</span> IT
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`px-2 py-1 rounded text-xs flex items-center gap-1 ${locale === 'en' ? 'bg-white/10 text-white' : 'text-slate-500'}`}
              aria-label="English"
            >
              <span aria-hidden>🇬🇧</span> EN
            </button>
          </div>
          <button
            className="p-2 text-slate-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0d2137] px-6 py-4 flex flex-col gap-4">
          <a href={l('/#problem')} className="text-slate-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>{t.challenge}</a>
          <a href={l('/#solution')} className="text-slate-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>{t.solution}</a>
          <Link href={l('/blog')} className="text-slate-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>{t.blog}</Link>
          <Link href={l('/about')} className="text-slate-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>{t.about}</Link>
          <Link href={l('/team')} className="text-slate-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>{t.founder}</Link>
          <a href={l('/#contact')} className="text-[#2d8cff]" onClick={() => setMobileMenuOpen(false)}>{t.contact}</a>
          <Link href={l('/demo')} className="py-2 border border-[#2d8cff] text-[#2d8cff] rounded-lg font-medium flex items-center justify-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            {t.liveDemo}
          </Link>
          <Link href={l('/#contact')} className="text-center py-2 bg-white text-[#0a1929] rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
            {t.requestPilot}
          </Link>
        </div>
      )}

    </header>
  )
}
