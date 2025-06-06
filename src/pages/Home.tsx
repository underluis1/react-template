import { Button } from '@/components/ui/button';
import Toast, { showToast } from '@/components/Elementi/Toast';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
        <>
        <div className='flex flex-col items-center justify-center min-h-screen bg-testing text-white gap-[12px]'>
            <h1 className='text-4xl font-bold mb-4'>Template Raffaele Lugibello </h1>
            <p> Il template comprende React - Vite con:</p>
            <p> Tailwind, Shadcn, Supabase, tspattern, React-hot-toast, react-router-dom </p>
            
            <Button onClick={() => showToast({message:"Exemple", color: "#F00000", colorText: '#000000'})}>Toast</Button>
            <Toast></Toast> 

            <div className='flex flex-row gap-[24px] items-center justify-center '>
                <p>vai a auth</p>
                <Link to="/auth">
                <Button>Auth</Button>
                </Link>
            </div>
        </div>
        </>
  )
}

export default Home