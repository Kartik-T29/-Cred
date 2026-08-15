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
    const supabase = await createClientOnServer(NextResponse.next())
    
    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      if (!error) {
        return NextResponse.redirect(new URL(next, origin))
      } else {
        console.error('Error exchanging code for session:', error)
      }
    } catch (error) {
      console.error('Unexpected error exchanging code for session:', error)
    }
    
    // Create a new response for error case
    const redirectUrl = new URL('/login', origin)
    redirectUrl.searchParams.set('error', 'oauth-failed')
    return NextResponse.redirect(redirectUrl)
  }

  // Handle email verification callback
  if (token_hash && type) {
    const supabase = await createClientOnServer(NextResponse.next())
    
    try {
      const { data, error } = await supabase.auth.verifyOtp({ type, token_hash })
      if (!error) {
        return NextResponse.redirect(new URL(next, origin))
      } else {
        console.error('Error verifying OTP:', error)
      }
    } catch (error) {
      console.error('Unexpected error verifying OTP:', error)
    }
    
    // Create a new response for error case
    const redirectUrl = new URL('/login', origin)
    redirectUrl.searchParams.set('error', 'verification-failed')
    return NextResponse.redirect(redirectUrl)
  }

  // Default fallback
  const redirectUrl = new URL('/login', origin)
  redirectUrl.searchParams.set('error', 'invalid-request')
  return NextResponse.redirect(redirectUrl)
}
