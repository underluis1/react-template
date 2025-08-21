//qui prendi i dati con supabase
import { supabase } from "@/utils/supabaseClient";

export type ProvaProps = {
  id: number;
  created_at: string;
  name: string;
  age: number;
};

export async function GetProva(): Promise<ProvaProps[]> {
  const { data, error } = await supabase.from("Prova").select("*");
  if (error) throw error;
  return data ?? [];
}


