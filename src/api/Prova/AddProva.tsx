
import { supabase } from "@/utils/supabaseClient";
import type { ProvaProps } from "./ProvaGet";

export type CreateProvaInput = Pick<ProvaProps, "name" | "age">;

export async function createProva(
  payload: CreateProvaInput
): Promise<ProvaProps> {
  const { data, error } = await supabase
    .from("Prova")
    .insert(payload)
    .select("*")
    .single(); // <-- così ottieni la riga inserita

  if (error) throw error;
  return data!;
}
