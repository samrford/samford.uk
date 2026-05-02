import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../lib/theme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground backdrop-blur transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:right-6 sm:top-6"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
