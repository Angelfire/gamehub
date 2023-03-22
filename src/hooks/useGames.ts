import { CanceledError } from "axios"
import { useEffect, useState } from "react"

import apiClient from "../services/apiClient"

import { FetchGamesResponse, Game } from "../types"

export function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then(response => {
        setGames(response.data.results)
        setLoading(false)
      })
      .catch(error => {
        if (error instanceof CanceledError) return
        
        setError(error.message) 
        setLoading(false)
      })

      return () => controller.abort()
  }, [])

  return { games, error, isLoading }
}