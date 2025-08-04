

import { useEffect,useState } from "react";
import { supabase } from "@/utils/supabaseClient";

export interface getData {
    id:number,
    created_at: string,
    code: number,
    assigned_at: string,

}

export const UseGetDataIn = () => {
    const [errorr,setError ] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [dataEff, setData] = useState<getData[]>([])


    useEffect(() => {
        setIsLoading(true);
        setError("");

        const getDataSupabase = async () => {
           const {data,error} = await supabase.from("DataIn")
            .select("*")
            
            if (error) {
                setError(error.message)
                alert(errorr)
            } else {
                setData(data)
                setIsLoading(false)
            }
        }
getDataSupabase()
    },[])
    return {isLoading,dataEff,errorr}
}