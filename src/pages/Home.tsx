import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { toast } from 'sonner' // ✅ usa sonner
import Logout from '@/components/reusable/logout'



const Home = () => {
  
 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-testing text-white gap-4">
      <h1 className="text-4xl font-bold mb-4">Template </h1>
      <p>Il template comprende React + Vite con:</p>
      <p>Tailwind, Shadcn, Supabase, tspattern, Sonner (toast), React Router, axios</p>

      <Button
        onClick={() =>
          toast('Esempio di toast personalizzato', {
            position: 'top-right',
            style: {
              background: '#F00000',
              color: '#000000',
              
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
      
      <Logout></Logout>
      
    </div>

  )
}

export default Home
