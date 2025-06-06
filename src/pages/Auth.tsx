import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const Auth = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-testing text-white gap-[12px]">
        <h1>Auth</h1>
        <Link to="/">
            <Button>Vai a home</Button>
        </Link>
    </div>
  )
}

export default Auth