import useGenres from "../hooks/useGenres"

import { Genre } from "../types"

import { Button } from "./ui/Button"
import { Spinner } from "./icons/Spinner"

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

export function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres()

  if (error) return null

  return (
    <div className="space-y-4">
      <div className="px-6 py-2">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
          Genres
        </h2>
        <div className="space-y-1">
          {isLoading ? (
            <Spinner className="animate-spin" />
          ) : (
            <>
              {data?.map(genre => (
                <Button
                  variant={genre.id === selectedGenre?.id ? "subtle" : "ghost"}
                  onClick={() => onSelectGenre(genre)}
                  size="sm"
                  className="w-full justify-start"
                  key={genre.id}
                >
                  <img
                    src={genre.image}
                    alt={genre.name}
                    width="32"
                    height="32"
                    className="mr-2 h-8 w-8 object-cover"
                  />
                  {genre.name}
                </Button>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
