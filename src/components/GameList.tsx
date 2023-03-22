import { GameCard } from "./GameCard"
import { GameCardSkeleton } from "./GameCardSkeleton"

import { useGames } from "../hooks/useGames"

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export function GameList() {
  const { games, isLoading } = useGames()

  return (
    <>
      {isLoading &&
        skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  )
}
