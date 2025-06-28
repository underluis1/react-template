import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
interface Lista {
    userId:number;
    id:number;
    title:string;
    body:string;
}


const TestProject = () => {
  const [visibility, setVisibility] = useState<boolean>(false)  
  const [lista, setLista] = useState<Lista[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error,setError] = useState<string>("")  

  const caricamentoDocumenti = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        setLista(res.data);
        setLoading(false);
        setVisibility(true)

    })
    .catch(errore => {
        setError(errore)
    })
   }

  useEffect(() => {
    setVisibility(false)

  },[])  

//Pagina della restituzione della lista
  if (visibility) {
    //Caricamento della lista con loading
    if (loading) return(<> <p> caricamento in corso...</p> <p>{error}</p></>)
    //Lista caricata e fa vedere i risulatati
    if (!loading) return(<>
    <div className="flex flex-col min-h-screen bg-amber-200 items-center justify-center p-4 gap-[12px]">
        <h1>Lista caricata</h1>
        <ul>
            {lista.map((items) =>
            <li key={items.id} className="pb-1"> 
            <div className="p-2 flex flex-row bg-amber-400 rounded-[12px] border-1 border-amber-950">
                <p>{items.title}</p>
            </div>
            </li>
            )}
        </ul>
    </div>

    </>
    )
  }
  
  //Pagina iniziale con Caricamento documenti
  if (!visibility) return <> 
            <div className="flex flex-col items-center justify-center p-4">
                <Input type="file"></Input>
                <Button onClick={()=> caricamentoDocumenti()}> Cambia visibilità</Button>
            </div>
        </>
}

export default TestProject