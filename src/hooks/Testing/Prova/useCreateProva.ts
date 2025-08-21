// hooks/useCreateProva.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProva } from "@/api/Prova/ProvaInsert";
import type { CreateProvaInput } from "@/api/Prova/ProvaInsert";

export function useCreateProva() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateProvaInput) => createProva(payload),
    onSuccess: () => {
      // ricarica la lista
      queryClient.invalidateQueries({ queryKey: ["Prova"] });
    },
  });
}
