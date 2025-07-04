// src/components/PrivateRoute.tsx
import { useEffect, useState, type JSX } from 'react'
import { useNavigate } from 'react-router-dom'
import {supabase} from "@/utils/supabaseClient"

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        setIsAuthenticated(true)
      } else {
        navigate('/auth')
      }
      setLoading(false)
    }

    checkAuth()
  }, [navigate])

  if (loading) return <div>Caricamento...</div>

  return isAuthenticated ? children : null
}
