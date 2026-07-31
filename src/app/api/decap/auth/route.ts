import { NextResponse } from 'next/server'
import crypto from 'crypto'

const CLIENT_ID = process.env.GITHUB_OAUTH_CLIENT_ID
const BASE_URL = process.env.DECAP_BASE_URL || 'https://mindmedixai.health'
const REDIRECT_URI = `${BASE_URL}/api/decap/callback`

export async function GET(request: Request) {
  const url = new URL(request.url)
  const provider = url.searchParams.get('provider') || 'github'
  const scope = url.searchParams.get('scope') || 'repo'

  if (provider !== 'github') {
    return NextResponse.json(
      { error: `Unsupported provider: ${provider}` },
      { status: 400 }
    )
  }

  if (!CLIENT_ID) {
    console.error('GITHUB_OAUTH_CLIENT_ID is not set')
    return NextResponse.json(
      { error: 'GITHUB_OAUTH_CLIENT_ID is not configured' },
      { status: 500 }
    )
  }

  const state = crypto.randomBytes(24).toString('hex')

  const authorizeUrl = new URL('https://github.com/login/oauth/authorize')
  authorizeUrl.searchParams.set('client_id', CLIENT_ID)
  authorizeUrl.searchParams.set('redirect_uri', REDIRECT_URI)
  authorizeUrl.searchParams.set('scope', scope)
  authorizeUrl.searchParams.set('state', state)

  const response = NextResponse.redirect(authorizeUrl.toString())
  response.cookies.set('decap_oauth_state', state, {
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    path: '/',
    maxAge: 600,
  })

  return response
}
