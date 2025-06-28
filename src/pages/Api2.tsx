import { useEffect, useState } from "react";
import axios from "axios";

const Api2 = () => {
  interface Post {
    userId:number
    id:number;
    title:string;
    body:string;
  }

  const [api, setApi] = useState<Post[]>([])  
  const [loading,setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")
  
  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        setApi(res.data);
        setLoading(false)
    }).catch(error => {
        setError(error);
    })
  },[])
  
  if (loading) return <> <p>caricamento</p></>;
  if (error) return <><p>pagina non disponibile </p> <p>{error}</p></>
  return (
    <div className="bg-amber-300">

        <ul>
            { api.map( (post) => (<li key={post.id}> {post.title}</li>)  )  }
        </ul>
    </div>
  )
}

export default Api2