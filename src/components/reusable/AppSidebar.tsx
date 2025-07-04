import { Link, useLocation } from "react-router-dom"
import { Home, LayoutDashboard, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLogout } from "@/hooks/useLogout"
import { useProfile } from "@/hooks/useProfile"

const links = [
  { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
  { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
]

export const AppSidebar = () => {
  const location = useLocation()
  const logout = useLogout()
  const user = useProfile()

  return (
    <aside className="h-screen w-60 bg-muted p-4 flex flex-col justify-between fixed">
      <div>
        <h2 className="text-lg font-bold mb-6">Benvenuto {user.profile?.full_name}</h2>
        <nav className="space-y-2">
          {links.map(({ to, label, icon }) => (
            <Link to={to} key={to}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2",
                  location.pathname === to && "bg-primary/10 text-primary"
                )}
              >
                {icon}
                {label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>

      <Button onClick={logout} variant="outline" className="w-full gap-2 mt-6">
        <LogOut className="w-4 h-4" />
        Logout
      </Button>
    </aside>
  )
}
