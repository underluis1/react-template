import './App.css'
import Toast, { showToast } from './components/Elementi/Toast'
import { Button } from '@/components/ui/button'
//test branch
  function App() {
  
  return (
    <>
    
      <div className='flex flex-col items-center justify-center min-h-screen bg-testing text-white gap-[12px]'>
        <h1 className='text-4xl font-bold mb-4'>Template Raffaele Lugibello </h1>
        <p> Il template comprende React - Vite con:</p>
        <p> Tailwind, Shadcn, Supabase, tspattern, React-hot-toast </p>
        
        <Button onClick={() => showToast({message:"Exemple", color: "#F00000"})}>Toasst</Button>
        <Toast></Toast> 
      </div>
    </>
  )
}

export default App
