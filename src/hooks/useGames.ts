import { useData } from "./useData"

import { Game, GameQuery } from "../types"

export const useGames= (gameQuery: GameQuery) => {
  return useData<Game>("/games", { params: { genres: gameQuery.genre?.id, } }, [gameQuery.genre])
}