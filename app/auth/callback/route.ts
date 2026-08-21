import { NextResponse } from 'next/server'
import { createClientOnServer } from '@/lib/supabase/server'
import { EmailOtpType } from '@supabase/supabase-js'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? 'https://www.credentai.qzz.io/'

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.credentai.qzz.io';

  if (code) {
    const response = NextResponse.redirect(new URL(next, siteUrl))
    const supabase = await createClientOnServer(response)
    
    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      if (!error) return response
    } catch (error) {}
    
    const redirectUrl = new URL('/login', siteUrl)
    redirectUrl.searchParams.set('error', 'oauth-failed')
    return NextResponse.redirect(redirectUrl)
  }

  if (token_hash && type) {
    const response = NextResponse.redirect(new URL(next, siteUrl))
    const supabase = await createClientOnServer(response)
    
    try {
      const { data, error } = await supabase.auth.verifyOtp({ type, token_hash })
      if (!error) return response
    } catch (error) {}
    
    const redirectUrl = new URL('/login', siteUrl)
    redirectUrl.searchParams.set('error', 'verification-failed')
    return NextResponse.redirect(redirectUrl)
  }

  const redirectUrl = new URL('/login', siteUrl)
  redirectUrl.searchParams.set('error', 'invalid-request')
  return NextResponse.redirect(redirectUrl)
}
