const SUPABASE_URL = "https://lsrhucnabsoktshcrbjs.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_nKX8yZ3Y-B85TG0dbgg0CA_QnnyBA0X";

const { createClient } = supabase;

const supabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);