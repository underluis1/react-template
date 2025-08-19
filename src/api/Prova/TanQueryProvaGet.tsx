import { useQuery } from "@tanstack/react-query";
import { GetProva } from "./ProvaGet";
import type { ProvaProps } from "./ProvaGet";

export default function TanProvaGet() {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["Prova"],
    queryFn: GetProva,
    staleTime: 30_000,
    refetchOnWindowFocus: "always", // 👈 forza refetch anche se fresh
    refetchOnReconnect: "always",
  });

  if (isError) {
    return (
      <>
        <p>errore nel carcamento {error.message}</p>
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        <p>Caricamento in corso</p>
      </>
    );
  }

  return (
    <>
      <div>
        <ul>
          {data?.map((element: ProvaProps) => (
            <>
              <li key={element.id}>
                <p>{element.name}</p>
                <p>{element.age}</p>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
