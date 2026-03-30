import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Log ini buat mastiin variabel env masuk
console.log("Koneksi Supabase ke:", supabaseUrl)

export const supabase = createClient(supabaseUrl, supabaseAnonKey)