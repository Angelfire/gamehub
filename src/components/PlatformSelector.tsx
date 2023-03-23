import { useEffect, useState } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select"

import { usePlatforms } from "../hooks/usePlatforms"

import { Platform } from "../types"

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

export function PlatformSelector({
  onSelectPlatform,
  selectedPlatform,
}: PlatformSelectorProps) {
  const [gamePlatform, setGamePlatform] = useState<string>("")
  const { data } = usePlatforms()

  useEffect(() => {
    if (gamePlatform) {
      const selectedPlatform = data.find(
        platform => platform.name === gamePlatform
      ) as Platform

      onSelectPlatform(selectedPlatform)
    }
  }, [gamePlatform])

  return (
    <Select onValueChange={setGamePlatform}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={selectedPlatform?.name || "Plaforms"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map(platform => (
            <SelectItem key={platform.id} value={platform.name}>
              {platform.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
