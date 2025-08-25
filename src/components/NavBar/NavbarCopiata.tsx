import { Button } from "../ui/button";
import { useLogout } from "@/hooks/useLogout";
const NavbarCopiata = () => {
  const logout = useLogout();
  return (
    <div className="bg-background flex flex-row items-start justify-between min-h-[60px] p-5 ">
      <h3>Nome Progetto</h3>
      <Button onClick={logout}>Esci</Button>
    </div>
  );
};

export default NavbarCopiata;
