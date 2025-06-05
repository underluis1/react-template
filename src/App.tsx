
import { Button } from './components/ui/button'
import Toast from './components/Elementi/Toast'
import './App.css'
//test branch
function App() {
  

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-testing text-white gap-[12px]'>
        <h1 className='text-4xl font-bold mb-4'>Template Raffaele Lugibello </h1>
        <p> Il template comprende React - Vite con:</p>
        <p> Tailwind, Shadcn, Supabase, tspattern, </p>
        <Button>Test</Button>
        <Toast></Toast>
         
      </div>
    </>
  )
}

export default App
