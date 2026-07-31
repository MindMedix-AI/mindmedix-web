import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['it', 'en']
const defaultLocale = 'it'

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale
  
  if (acceptLanguage.toLowerCase().startsWith('en')) return 'en'
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip public files, API routes, and CMS admin
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.includes('.') ||
    pathname.includes('/logo.png')
  ) {
    return
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    '/((?!api|admin|_next/static|_next/image|favicon.ico|logo.png|MindMedix|mindmedix).*)',
  ],
}
