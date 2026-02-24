import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing in environment variables. Please check your .env file.');
}

// Only create the client if we have the required configuration to avoid crashing on startup
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
