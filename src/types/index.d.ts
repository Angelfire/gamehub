export interface Genre {
  id: number;
  name: string;
  image: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number
  name: string
}

export interface FetchGamesResponse {
  count: number
  results: Game[]
}
