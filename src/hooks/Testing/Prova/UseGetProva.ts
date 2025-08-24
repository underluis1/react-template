import { useQuery } from "@tanstack/react-query"
import { GetProva } from "@/api/Prova/ProvaGet";
import type { ProvaProps } from "@/api/Prova/ProvaGet";

export const GetProvaTask = () => {
return useQuery<ProvaProps[], Error>({
        queryKey: ["Prova"],
        queryFn: GetProva,
        staleTime: 3000,
        refetchOnWindowFocus: "always", 
        //se vuoi fare il polling ogni 3 secondi fai cosi:
        refetchInterval: 3000,           // <-- fa polling
        refetchIntervalInBackground: true,
 });
 
} 