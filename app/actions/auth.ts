'use server'

import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function signInWithEmail(formData: FormData) {
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })

  if (error) {
    return { error: error.message }
  }

  return { success: true }
}

export async function signUpWithEmail(formData: FormData) {
  const supabase = await createClient()
  const headersList = await headers()
  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.credentai.qzz.io'

  const fullName = formData.get('full_name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: {
        full_name: fullName,
      },
    },
  })

  if (error) {
    return { error: error.message }
  }

  return { success: 'Check your email to verify your account!' }
}

export async function signInWithGoogle() {
  const supabase = await createClient()
  const headersList = await headers()
  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.credentai.qzz.io'

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    return { error: error.message }
  }

  if (data.url) {
    return { redirectUrl: data.url }
  }
  
  return { error: "Failed to initiate Google login" }
}

export async function requestPasswordReset(formData: FormData) {
  const supabase = await createClient()
  const headersList = await headers()
  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.credentai.qzz.io'
  const email = formData.get('email') as string

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?next=/auth/update-password`,
  })

  if (error) {
    return { error: error.message }
  }

  return { success: 'Check your email for the password reset link!' }
}

export async function signOut() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    console.error('Error signing out:', error)
    return { error: 'Failed to sign out' }
  }
  
  return { success: true }
}
