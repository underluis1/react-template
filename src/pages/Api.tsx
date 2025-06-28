import { useState, useEffect } from "react";
import axios from "axios";

interface Post{
    userId: number;
    id:number;
    title:string;
    body:string;
}

export default function Api(){

    const [post, setPost] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            setPost(res.data);
            setLoading(false);})
        .catch(error => {
            console.log(error);
            setError(error);
        })
    } )

    if (loading) return (<> <p> caricamento...</p> </>)
    if (error) return(<> <p> Errore </p></>)
    return <>
    <div>
        <ul>
            {post.map( (post) => (<li key={post.id}> <p>{post.title}</p> </li> ))} 
        
        </ul>
    </div>
    </>

}