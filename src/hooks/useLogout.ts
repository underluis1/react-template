// src/hooks/useLogout.ts
import { useNavigate } from "react-router-dom"
import { supabase } from "@/utils/supabaseClient"
import { toast } from "sonner"

export function useLogout() {
  const navigate = useNavigate()

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      toast.error("Errore durante il logout")
    } else {
      toast.success("Logout effettuato")
      navigate("/auth")
    }
  }

  return logout
}
