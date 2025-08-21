import { GetProvaTask } from "@/hooks/UseGetProva";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Button from "@mui/material/Button";
const TestHook = () => {
  const { error, data = [], isLoading, isError } = GetProvaTask();
  if (isError) {
    return (
      <>
        <p>errore nel caricamento dei dati: {error.message}</p>
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
        <div className="flex flex-row p-4 items-start justify-between">
          <Button>Crea record</Button>
        </div>
        <ul className="flex flex-col p-4">
          {data.map((element) => (
            <>
              <li key={element.id} className="pb-4">
                <Card>
                  <CardContent>
                    <CardTitle>{element.name}</CardTitle>
                    <CardDescription>{element.age}</CardDescription>
                  </CardContent>
                </Card>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TestHook;
