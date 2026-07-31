import { NextResponse, type NextRequest } from 'next/server'

const CLIENT_ID = process.env.GITHUB_OAUTH_CLIENT_ID
const CLIENT_SECRET = process.env.GITHUB_OAUTH_CLIENT_SECRET
const BASE_URL = process.env.DECAP_BASE_URL || 'https://mindmedixai.health'
const REDIRECT_URI = `${BASE_URL}/api/decap/callback`

function renderCallbackPage(status: string, payload: unknown): string {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`
  const safeMessage = JSON.stringify(message)
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Authorizing…</title>
</head>
<body>
<p>Authorizing MindMedix AI admin…</p>
<script>
  (function () {
    var receiveMessage = function (message) {
      window.opener.postMessage(${safeMessage}, "*");
      window.removeEventListener("message", receiveMessage, false);
    };
    window.addEventListener("message", receiveMessage, false);
    window.opener.postMessage("authorizing:github", "*");
  })();
</script>
</body>
</html>`
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')
  const error = url.searchParams.get('error')

  const savedState = request.cookies.get('decap_oauth_state')?.value

  if (error) {
    return new NextResponse(
      renderCallbackPage('error', { msg: error }),
      { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    )
  }

  if (!code || !state || !savedState || state !== savedState) {
    return new NextResponse(
      renderCallbackPage('error', { msg: 'Invalid OAuth state' }),
      { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    )
  }

  if (!CLIENT_ID || !CLIENT_SECRET) {
    console.error('GitHub OAuth env vars not configured')
    return new NextResponse(
      renderCallbackPage('error', { msg: 'OAuth server misconfigured' }),
      { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    )
  }

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        redirect_uri: REDIRECT_URI,
      }),
    })

    const tokenData = await tokenResponse.json()

    if (!tokenResponse.ok || tokenData.error) {
      console.error('GitHub token exchange failed:', tokenData)
      return new NextResponse(
        renderCallbackPage('error', { msg: tokenData.error || 'Token exchange failed' }),
        { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
      )
    }

    const response = new NextResponse(
      renderCallbackPage('success', { token: tokenData.access_token }),
      { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    )
    response.cookies.delete('decap_oauth_state')
    return response
  } catch (err) {
    console.error('Decap OAuth callback error:', err)
    return new NextResponse(
      renderCallbackPage('error', { msg: 'Internal error' }),
      { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    )
  }
}
