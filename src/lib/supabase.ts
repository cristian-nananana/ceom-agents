import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("Missing Supabase environment variables");
  }
}

// Browser client — use in Client Components
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-key"
);

// ─── Types ────────────────────────────────────────────────────────────────────

export interface LeadRecord {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  plan?: string;
  region?: string;
  source?: string;
  created_at?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Save a lead to the 'leads' table */
export async function saveLead(lead: Omit<LeadRecord, "id" | "created_at">) {
  const { data, error } = await supabase
    .from("leads")
    .insert([{ ...lead, source: lead.source || "landing" }])
    .select()
    .single();

  if (error) {
    console.error("Error saving lead:", error);
    throw error;
  }

  return data as LeadRecord;
}

/** Get all leads (admin use) */
export async function getLeads() {
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as LeadRecord[];
}
