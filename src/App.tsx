import { useEffect, useState } from "react"
import { GenreList } from "./components/GenreList"
import { Header } from "./components/Header"

import { Genre, Platform } from "./types"

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({})
  const [theme, setTheme] = useState<"light" | "dark">("light")

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

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-900">
      <header className="p-2">
        <Header toggleTheme={setTheme} />
      </header>
      <main className="mt-11 flex w-full flex-1 flex-row">
        <aside className="hidden w-1/6 sm:block">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })}
          />
        </aside>
        <section className="w-5/6">section</section>
      </main>
    </div>
  )
}

export default App
