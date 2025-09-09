
import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  // Apply theme to <html>
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    // Add fade transition class
    document.documentElement.classList.add('theme-transition')
    setTheme(theme === 'light' ? 'dark' : 'light')

    // Remove it after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
    }, 400) // matches CSS duration
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl glass hover:bg-indigo-500/10 transition flex items-center gap-2"
    >
      {theme === 'light' ? (
        <Moon size={18} className="text-indigo-600" />
      ) : (
        <Sun size={18} className="text-yellow-400" />
      )}
    </button>
  )
}
