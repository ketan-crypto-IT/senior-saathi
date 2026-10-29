
const SUPABASE_URL = "https://jwhbmsvypsnrdpvqktci.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_tR0xnmyq_rfDP1iwN1VlbQ_IV5C1zqR";

if (!window.supabase?.createClient) {
  console.error("Supabase CDN library did not load.");
} else {
  window.seniorSaathiSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
}
