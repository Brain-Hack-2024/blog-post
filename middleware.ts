import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define which routes should use this middleware
export const config = {
  matcher: '/'
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/ae', request.url))
  }
}