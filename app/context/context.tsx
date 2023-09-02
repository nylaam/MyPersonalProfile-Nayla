'use client' //untuk menunjukkan bahwa kode ini harus dijalankan di sisi klien. Ini baik.

import React, { ReactNode, createContext, useContext, useState, useEffect } from 'react'

type themeContextType = {
  isDark: boolean
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

const ThemeContext = createContext<themeContextType>({
  isDark: false, 
  setIsDark: () => {},
})

type Props = {
  children: ReactNode
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState<boolean>(false) //diubah sesuai dengan nilai default yang diinginkan.

  // Menggunakan useEffect untuk mengambil dan menyimpan status tema di `localStorage`.
  useEffect(() => {
    const mode = localStorage.getItem('mode')
    if (mode !== null) {
      setIsDark(JSON.parse(mode))
    }
  }, []) 
  // Menggunakan useEffect untuk menyimpan perubahan status tema ke `localStorage`.
  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(isDark))
  }, [isDark]) // Efek ini akan berjalan setiap kali nilai `isDark` berubah.

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
