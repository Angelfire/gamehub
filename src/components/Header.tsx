import gameHubLogo from "../assets/logo-gamehub.webp"
import { ThemeToggle } from "./ThemeToggle"
import { Input } from "./ui/Input"

interface Props {
  toggleTheme: (theme: "light" | "dark") => void
}

export function Header({ toggleTheme }: Props) {
  return (
    <div className="flex items-center justify-between gap-3">
      <img src={gameHubLogo} alt="GameHub logo" width={60} height={60} />
      <Input className="text-white" type="text" placeholder="Search games..." />
      <ThemeToggle toggleTheme={toggleTheme} />
    </div>
  )
}
