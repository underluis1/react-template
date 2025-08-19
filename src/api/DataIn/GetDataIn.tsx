import { supabase } from "@/utils/supabaseClient";

export interface DataInProps {
  id: number;
  code: string;
  created_at: string;
  assigned_at: string;
}

export async function getDataIn() {
  const { data, error } = await supabase.from("DataIn").select("*");
  if (error) throw error;
  return data ?? [];
}
