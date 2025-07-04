// src/components/AuthListener.tsx
import { useEffect } from 'react'
import { supabase } from '@/utils/supabaseClient'
import { useUserStore } from '@/store/user'

export default function AuthListener() {
  const setUser = useUserStore((state) => state.setUser)

  useEffect(() => {
    // Al primo caricamento
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })

    // Listener su ogni cambio sessione
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [setUser])

  return null // Non rende nulla
}
