import { GameCard } from "./GameCard"
import { GameCardSkeleton } from "./GameCardSkeleton"

import { useGames } from "../hooks/useGames"
import { GameQuery } from "../types"

interface GameListProps {
  gameQuery: GameQuery
}

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export function GameList({ gameQuery }: GameListProps) {
  const { data, isLoading } = useGames(gameQuery)

  return (
    <div className="grid grid-cols-1 gap-5 px-6 sm:grid-cols-3 xl:grid-cols-4">
      {isLoading &&
        skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
      {data.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}
