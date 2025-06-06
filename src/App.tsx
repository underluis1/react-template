import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Auth from './pages/Auth.tsx'
import { Toaster } from 'sonner' 

function App() {
  return (
    <>
      
      <Router>
        <Toaster position='top-right'/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
