import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Auth from './pages/Auth.tsx'
import { Toaster } from 'sonner' 
import PrivateRoute from './routes/PrivateRoute.tsx'
import PublicOnlyRoute from './routes/PublicOnlyRoute.tsx'


function App() {
  return (
    <>
      
      <Router>
      <Toaster position='top-right' />
      <Routes>
        {/* Rotta pubblica */}
         {/* Rotta pubblica ma accessibile solo se NON loggato */}
        <Route
          path="/auth"
          element={
            <PublicOnlyRoute>
              <Auth />
            </PublicOnlyRoute>
          }
        />

        {/* Rotte protette */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        {/* Puoi aggiungerne altre protette così */}
        {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
