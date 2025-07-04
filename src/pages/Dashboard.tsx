import { useProfile } from "@/hooks/useProfile"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/reusable/AppSidebar"

export default function Dashboard(){
const user = useProfile()
    return(
        
        <>
        <div className="flex flex-row min-h-screen w-full">
            
            {/* Sidebar can be added here */}
            <AppSidebar></AppSidebar>

            <div className="ml-60 p-6 w-full">
                <p>
                    {user.profile?.id}
                </p>
                <Button> Test </Button>
            </div>
        </div>
        </>
    )
}