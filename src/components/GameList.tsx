import { GameCard } from "./GameCard"
import { GameCardSkeleton } from "./GameCardSkeleton"

import { useGames } from "../hooks/useGames"

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export function GameList() {
  const { data, isLoading } = useGames()

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
