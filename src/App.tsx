import { useState } from "react"

import { GameList } from "./components/GameList"
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

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-900">
      <header className="py-2 px-6">
        <Header />
      </header>
      <main className="mt-11 flex w-full flex-1 flex-row">
        <aside className="hidden w-96 lg:block">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })}
          />
        </aside>
        <section className="grid w-full grid-cols-1 gap-5 px-6 sm:grid-cols-3 xl:grid-cols-4">
          <GameList />
        </section>
      </main>
    </div>
  )
}

export default App
