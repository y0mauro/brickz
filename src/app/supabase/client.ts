import { createBrowserClient } from '@supabase/ssr'
import { Property } from '@/src/types';
import { log } from 'console';


export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}




