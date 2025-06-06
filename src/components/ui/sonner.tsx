import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
import type { ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors
      {...props} // OK in fondo per non sovrascrivere
      position="top-right" // ✅ default globale
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--success-bg": "#CDEDDA",
          "--success-text": "#027A48",
          "--error-bg": "#EDCDCD",
          "--error-text": "#BE0000",
          "--info-bg": "#DDEEFF",
          "--info-text": "#0044AA",
          "--warning-bg": "#FFF4D4",
          "--warning-text": "#B45309",
        } as React.CSSProperties
      }
    />
  )
}

export { Toaster }
