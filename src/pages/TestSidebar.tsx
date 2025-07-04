import { AppSidebar } from "@/components/reusable/AppSidebar"
export default function TestSidebar() {

    return(
        <>
        <div className="flex flex-row min-h-screen w-full">
            <AppSidebar></AppSidebar>
            <div>
                <p className="ml-60 p-6">
                    Test Sidebar
                </p>
            </div>
        </div>
        </>
    )
 }

