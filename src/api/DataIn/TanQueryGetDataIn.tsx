import { getDataIn } from "./GetDataIn";
import { useQuery } from "@tanstack/react-query";
import type { DataInProps } from "./GetDataIn";

export default function GetDataIn() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["DataIN"],
    queryFn: getDataIn,
    staleTime: 30_000,
    refetchOnWindowFocus: "always", // 👈 forza refetch anche se fresh
    refetchOnReconnect: "always",
  });

  if (isError) {
    return (
      <>
        <p>{error.message}</p>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <p>Carcamento in corso...</p>
      </>
    );
  }

  return (
    <>
      <div>
        <ul>
          {data?.map((element: DataInProps) => (
            <li key={element.id}>
              <p>{element.code}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
