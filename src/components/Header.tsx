import gameHubLogo from "../assets/logo-gamehub.webp"
import { ThemeToggle } from "./ThemeToggle"
import { Input } from "./ui/Input"

export function Header() {
  return (
    <div className="flex items-center gap-5">
      <img src={gameHubLogo} alt="GameHub logo" width={60} height={60} />
      <Input className="text-white" type="text" placeholder="Search games..." />
      <ThemeToggle />
    </div>
  )
}
