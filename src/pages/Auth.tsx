import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { LoginForm } from "@/components/login-form"

const Auth = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-testing text-white gap-[12px]">
        
         <LoginForm className="w-[400px]"/>
        
        <Link to="/">
            <Button>Vai a home</Button>
        </Link>
    </div>
  )
}

export default Auth