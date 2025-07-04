import { Button } from "../ui/button";
import { useLogout } from "@/hooks/useLogout";  
export default function Logout() {
  const logout = useLogout();

  return (
    <>
      <Button onClick={logout}>Esci</Button>
        
    </>);
}