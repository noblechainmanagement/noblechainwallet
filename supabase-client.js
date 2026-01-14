import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Supabase project URL and anon/public key (replace if needed)
export const SUPABASE_URL = 'https://cllrxkhyxjejsbmedans.supabase.co'
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsbHJ4a2h5eGplanNibWVkYW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0MDY0MTIsImV4cCI6MjA4Mzk4MjQxMn0.bjTjVZhycttSalYPaQGjzzPduNPRLtUqrqcgN63EOEM'

export function isAnonKeyConfigured() {
  return SUPABASE_ANON_KEY && !SUPABASE_ANON_KEY.includes('REPLACE') && !SUPABASE_ANON_KEY.includes('process.env')
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
