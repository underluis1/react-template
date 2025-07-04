// src/hooks/useProfile.ts
import { useEffect, useState } from 'react'
import { supabase } from '@/utils/supabaseClient'
import { useUserStore } from '@/store/user'

type Profile = {
  id: string
  username: string | null
  avatar_url: string | null
  full_name: string | null
}

export const useProfile = () => {
  const user = useUserStore((state) => state.user)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (error) {
        console.error('Errore nel recupero del profilo:', error)
      } else {
        setProfile(data)
      }

      setLoading(false)
    }

    fetchProfile()
  }, [user])

  return { profile, loading }
}
