import { Moon, RotateCcw, Sun } from 'lucide-react'
import { useTheme } from '../theme/ThemeContext'

export default function ThemeToggle() {
  const { mode, theme, toggleTheme, useAutoTheme } = useTheme()
  const isLight = theme === 'light'
  const Icon = isLight ? Moon : Sun
  const label = isLight ? 'Switch to dark mode' : 'Switch to light mode'

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={toggleTheme}
        className="theme-toggle inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all hover:border-white/20 hover:text-white"
        aria-label={label}
        title={mode === 'auto' ? `${label} (auto now)` : label}
      >
        <Icon size={15} />
      </button>
      {mode !== 'auto' && (
        <button
          type="button"
          onClick={useAutoTheme}
          className="theme-toggle-auto inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/45 transition-all hover:border-white/20 hover:text-white"
          aria-label="Use automatic time-based theme"
          title="Use automatic time-based theme"
        >
          <RotateCcw size={14} />
        </button>
      )}
    </div>
  )
}
