import { useProfile } from "@/hooks/useProfile"
import { Button } from "@/components/ui/button"
import { Sidebar } from "lucide-react"
export default function Dashboard(){
const user = useProfile()
    return(
        
        <>
        <div className="flex flex-row min-h-screen w-full">
            <Sidebar></Sidebar>
            <div>
                <p>
                    {user.profile?.id}
                </p>
                <Button> Test </Button>
            </div>
        </div>
        </>
    )
}