export interface FetchGamesResponse {
  count: number
  results: Game[]
}

export interface Game {
  background_image: string
  id: number
  metacritic: number
  name: string
  parent_platforms: { platform: Platform }[]
  rating_top: number
}

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  searchText: string
}

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
