import { useEffect, useState } from "react"

export const useTheme = (initialTheme: "light" | "dark" = "light") => {
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme)

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return { theme, setTheme }
}
