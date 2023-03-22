import { getCroppedImg } from "../services/imageUrl"

import { GameCritic } from "./GameCritic"

import { Game } from "../types"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <article className="rounded-md bg-slate-100 dark:bg-slate-800">
      <img
        src={getCroppedImg(game.background_image)}
        alt={game.name}
        className="h-56 w-full object-cover"
      />
      <div className="px-5 py-2">
        <header className="flex items-baseline justify-between gap-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {game.name}
          </h3>
          <GameCritic score={game.metacritic} />
        </header>
        <p className="text-xs dark:text-white">
          {game.parent_platforms
            .map(({ platform }) => platform.name)
            .join(", ")}
        </p>
      </div>
    </article>
  )
}
