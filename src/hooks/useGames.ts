import { useData } from "./useData"

import { Game } from "../types"

export function useGames() {
  return useData<Game>("/games")
}