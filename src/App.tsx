import { useState } from "react"

import { GameList } from "./components/GameList"
import { GenreList } from "./components/GenreList"
import { Header } from "./components/Header"
import { PlatformSelector } from "./components/PlatformSelector"
import { SortSelector } from "./components/SortSelector"

import { GameQuery } from "./types"

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-900">
      <header className="py-2 px-6">
        <Header
          onSearch={searchText => setGameQuery({ ...gameQuery, searchText })}
        />
      </header>
      <main className="mt-11 flex w-full flex-1 flex-row">
        <aside className="hidden w-96 lg:block">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })}
          />
        </aside>
        <section className="flex w-full flex-col gap-9">
          <div className="flex gap-3 pl-5">
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={platform =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={sortOrder =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </div>
          <GameList gameQuery={gameQuery} />
        </section>
      </main>
    </div>
  )
}

export default App
