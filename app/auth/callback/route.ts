import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { EmailOtpType } from '@supabase/supabase-js'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/'

  // Handle OAuth callback
  if (code) {
    const supabase = await createClient()
    try {
      const { error } = await supabase.auth.exchangeCodeForSession(code)
      if (!error) {
        // Check if user needs onboarding
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
          // Example check - you can customize this based on your onboarding logic
          const needsOnboarding = !user.user_metadata?.onboarding_complete;
          
          // If you have an onboarding flow, redirect there
          // For now, we'll just redirect to the normal next destination
          return NextResponse.redirect(`${origin}${next}`)
        }
        return NextResponse.redirect(`${origin}${next}`)
      } else {
        console.error('Error exchanging code for session:', error)
      }
    } catch (error) {
      console.error('Unexpected error exchanging code for session:', error)
    }
    
    // Return the user to login with an error
    return NextResponse.redirect(`${origin}/login?error=oauth-failed`)
  }

  // Handle email verification callback
  if (token_hash && type) {
    const supabase = await createClient()
    try {
      const { error } = await supabase.auth.verifyOtp({ type, token_hash })
      if (!error) {
        return NextResponse.redirect(`${origin}${next}`)
      } else {
        console.error('Error verifying OTP:', error)
        // Return the user to login with an error
        return NextResponse.redirect(`${origin}/login?error=verification-failed`)
      }
    } catch (error) {
      console.error('Unexpected error verifying OTP:', error)
      return NextResponse.redirect(`${origin}/login?error=unexpected-error`)
    }
  }

  // Default fallback
  return NextResponse.redirect(`${origin}/login?error=invalid-request`)
}
