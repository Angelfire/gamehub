export interface Genre {
  id: number
  name: string
  image: string
}

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Game {
  background_image: string
  id: number
  metacritic: number
  name: string
  parent_platforms: { platform: Platform }[]
}

export interface FetchGamesResponse {
  count: number
  results: Game[]
}
