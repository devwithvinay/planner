import { createBrowserClient } from "@supabase/ssr";

let supabaseInstance: ReturnType<typeof createBrowserClient> | undefined;

export function getSupabase() {
  if (!supabaseInstance) {
    supabaseInstance = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    );
  }

  return supabaseInstance;
}
