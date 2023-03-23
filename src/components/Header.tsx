import { useRef } from "react"

import { Input } from "./ui/Input"
import { ThemeToggle } from "./ThemeToggle"

import gameHubLogo from "../assets/logo-gamehub.webp"

interface HeaderProps {
  onSearch: (searchText: string) => void
}

export function Header({ onSearch }: HeaderProps) {
  const ref = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (ref.current) onSearch(ref.current.value)
  }

  return (
    <div className="flex items-center gap-5">
      <img src={gameHubLogo} alt="GameHub logo" width={60} height={60} />
      <form onSubmit={handleSubmit} className="flex flex-auto">
        <Input
          className="text-white"
          type="text"
          placeholder="Search games..."
          ref={ref}
        />
      </form>
      <ThemeToggle />
    </div>
  )
}
