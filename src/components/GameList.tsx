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
    <>
      {isLoading &&
        skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
      {data.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  )
}
