import { createClient } from "@supabase/supabase-js";

// Ensure environment variables exist and trim any whitespace
const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || "").trim();
const supabaseKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "").trim();

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase environment variables. Check .env.local");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
