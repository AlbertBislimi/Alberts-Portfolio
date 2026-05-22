import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext(null)
const STORAGE_KEY = 'ab-studio-theme'

function getAutoTheme(date = new Date()) {
  const hour = date.getHours()
  return hour >= 7 && hour < 19 ? 'light' : 'dark'
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem(STORAGE_KEY) || 'auto')
  const [autoTheme, setAutoTheme] = useState(() => getAutoTheme())

  useEffect(() => {
    const interval = window.setInterval(() => setAutoTheme(getAutoTheme()), 60 * 1000)
    return () => window.clearInterval(interval)
  }, [])

  const theme = mode === 'auto' ? autoTheme : mode

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.dataset.themeMode = mode
    document.documentElement.style.colorScheme = theme
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode, theme])

  const value = useMemo(() => ({
    mode,
    theme,
    setMode,
    toggleTheme: () => setMode((current) => {
      const currentTheme = current === 'auto' ? getAutoTheme() : current
      return currentTheme === 'dark' ? 'light' : 'dark'
    }),
    useAutoTheme: () => setMode('auto'),
  }), [mode, theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const value = useContext(ThemeContext)
  if (!value) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }
  return value
}
