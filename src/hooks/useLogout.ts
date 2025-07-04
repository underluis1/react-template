// src/hooks/useLogout.ts
import { useNavigate } from "react-router-dom"
import { supabase } from "@/utils/supabaseClient"
import { toast } from "sonner"
import { useUserStore } from "@/store/user"  

export function useLogout() {
  const navigate = useNavigate()
  const setUser = useUserStore((state) => state.setUser)

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    setUser(null) // 👈 svuota lo stato globale
    if (error) {
      toast.error("Errore durante il logout")
    } else {
      toast.success("Logout effettuato")
      navigate("/auth")
    }
  }

  return logout
}
