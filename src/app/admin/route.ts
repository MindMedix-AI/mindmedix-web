import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'admin', 'index.html')
  let html = fs.readFileSync(filePath, 'utf-8')
  const cb = Date.now()
  html = html.replace(/src="([^"]+)"/g, `src="$1?cb=${cb}"`)

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  })
}
