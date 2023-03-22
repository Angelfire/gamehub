import { useGenres } from "../hooks/useGenres"

import { Genre } from "../types"

import { Button } from "./ui/Button"

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

export function GenreList({ selectedGenre, onSelectGenre }: GenreListProps) {
  const { data } = useGenres()

  return (
    <div className="space-y-4">
      <div className="px-6">
        <h2 className="mb-2 px-2 text-2xl font-semibold tracking-tight dark:text-white">
          Genres
        </h2>
        <div className="space-y-1">
          {data?.map(genre => (
            <Button
              variant={genre.id === selectedGenre?.id ? "subtle" : "ghost"}
              onClick={() => onSelectGenre(genre)}
              size="sm"
              className="w-full justify-start text-base"
              key={genre.id}
            >
              <img
                src={genre.image}
                alt={genre.name}
                width="24"
                height="24"
                className="mr-2 h-6 w-6 object-cover"
              />
              {genre.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
