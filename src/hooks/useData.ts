import { AxiosRequestConfig, CanceledError } from "axios"
import { useEffect, useState } from "react"

import apiClient from "../services/apiClient"

interface FetchDataResponse<T> {
  count: number
  results: T[]
}

export const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    apiClient
      .get<FetchDataResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then(response => {
        setData(response.data.results)
        setLoading(false)
      })
      .catch(error => {
        if (error instanceof CanceledError) return

        setError(error.message)
        setLoading(false)
      })

    return () => controller.abort()
  }, deps ? [...deps ] : [])

  return { data, error, isLoading }
}