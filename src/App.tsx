import './App.css'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Auth from './pages/Auth.tsx'
//test branch
  function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
