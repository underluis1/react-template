import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Auth from './pages/Auth.tsx'
import { Toaster } from 'sonner' 
import Api from './pages/Api.tsx'

function App() {
  return (
    <>
      
      <Router>
        <Toaster position='top-right'/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
