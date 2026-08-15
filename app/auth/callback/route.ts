import { NextResponse } from 'next/server'
import { createClientOnServer } from '@/lib/supabase/server'
import { EmailOtpType } from '@supabase/supabase-js'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/'

  // Handle OAuth callback
  if (code) {
    const response = NextResponse.redirect(new URL(next, origin))
    const supabase = await createClientOnServer(response)
    
    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      if (error) {
        console.error('Error exchanging code for session:', error)
        // Create a new response for error case
        const redirectUrl = new URL('/login', origin)
        redirectUrl.searchParams.set('error', 'oauth-failed')
        return NextResponse.redirect(redirectUrl)
      }
    } catch (error) {
      console.error('Unexpected error exchanging code for session:', error)
      // Create a new response for error case
      const redirectUrl = new URL('/login', origin)
      redirectUrl.searchParams.set('error', 'oauth-failed')
      return NextResponse.redirect(redirectUrl)
    }
    
    return response
  }

  // Handle email verification callback
  if (token_hash && type) {
    const response = NextResponse.redirect(new URL(next, origin))
    const supabase = await createClientOnServer(response)
    
    try {
      const { data, error } = await supabase.auth.verifyOtp({ type, token_hash })
      if (error) {
        console.error('Error verifying OTP:', error)
        // Create a new response for error case
        const redirectUrl = new URL('/login', origin)
        redirectUrl.searchParams.set('error', 'verification-failed')
        return NextResponse.redirect(redirectUrl)
      }
    } catch (error) {
      console.error('Unexpected error verifying OTP:', error)
      // Create a new response for error case
      const redirectUrl = new URL('/login', origin)
      redirectUrl.searchParams.set('error', 'unexpected-error')
      return NextResponse.redirect(redirectUrl)
    }
    
    return response
  }

  // Default fallback
  const redirectUrl = new URL('/login', origin)
  redirectUrl.searchParams.set('error', 'invalid-request')
  return NextResponse.redirect(redirectUrl)
}
