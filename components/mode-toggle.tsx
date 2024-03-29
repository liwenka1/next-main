'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { GoSun, GoMoon } from 'react-icons/go'

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="animate-fade cursor-pointer">
      {!mounted && <GoSun />}
      {mounted &&
        (theme === 'light' ? <GoSun onClick={() => setTheme('dark')} /> : <GoMoon onClick={() => setTheme('light')} />)}
    </div>
  )
}

export default ModeToggle
