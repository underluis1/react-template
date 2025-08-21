import { useQuery } from "@tanstack/react-query"
import { GetProva } from "@/api/Prova/ProvaGet";
import type { ProvaProps } from "@/api/Prova/ProvaGet";

export const GetProvaTask = () => {
return useQuery<ProvaProps[], Error>({
        queryKey: ["Prova"],
        queryFn: GetProva,
        staleTime: 30_000,
        refetchOnWindowFocus: "always", 
 });
 
} 