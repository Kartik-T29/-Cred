import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/'

  if (token_hash && type) {
    const supabase = await createClient()
    
    // Verify the OTP and set the session
    const { error } = await supabase.auth.verifyOtp({ type, token_hash })
    
    if (!error) {
      // Successfully verified - redirect to the intended destination
      const redirectTo = new URL(next, request.url)
      return NextResponse.redirect(redirectTo)
    }
    
    console.error('OTP verification failed:', error)
  }

  // Redirect to login with error if verification fails
  const redirectUrl = new URL('/login', request.url)
  redirectUrl.searchParams.set('error', 'verification-failed')
  return NextResponse.redirect(redirectUrl)
}
