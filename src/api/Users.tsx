import { useQuery } from "@tanstack/react-query";

export async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Errore nel fetch");
  return res.json();
}

export default function Users() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"], // chiave della query (cache)
    queryFn: fetchUsers, // funzione che fa il fetch
  });

  if (isLoading) return <p>⏳ Caricamento...</p>;
  if (isError) return <p>❌ Errore nel caricamento! {error.message}</p>;

  return (
    <ul>
      {data.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
