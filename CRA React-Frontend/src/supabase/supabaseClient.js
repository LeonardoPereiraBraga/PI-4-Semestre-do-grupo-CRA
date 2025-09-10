import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://<sua-instancia>.supabase.co";
const supabaseKey = "chave_publica_aqui";

export const supabase = createClient(supabaseUrl, supabaseKey);
