import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Logout from "@/components/reusable/logout";
import { useProfile } from "@/hooks/useProfile";
import Example from "@/components/NavBar/NavbarCopiata";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
const Home = () => {
  const user = useProfile();

  return (
    <>
      <Example></Example>
      <Card className="mx-24">
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
        </CardHeader>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <div className="flex flex-col items-center justify-center min-h-screen bg-background  gap-4">
        <p>{user.profile?.id}</p>
        <h1 className="text-4xl font-bold mb-4">Template </h1>
        <p>Il template comprende React + Vite con:</p>
        <p>
          Tailwind, Shadcn, Supabase, tspattern, Sonner (toast), React Router,
          axios, Zustand, tanQuery
        </p>

        <Button
          onClick={() =>
            toast("Esempio di toast personalizzato", {
              position: "top-right",
              style: {
                background: "#F00000",
                color: "#000000",
              },
            })
          }
        >
          Mostra Toast
        </Button>

        <div className="flex flex-row gap-6 items-center justify-center">
          <p>Vai ad Auth:</p>
          <Link to="/auth">
            <Button>Auth</Button>
          </Link>
        </div>
        <Link to="/dashboard">
          <Button>Dashboard</Button>
        </Link>
        <Logout></Logout>
      </div>
    </>
  );
};

export default Home;
