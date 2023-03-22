interface GameCriticProps {
  score: number
}

export function GameCritic({ score }: GameCriticProps) {
  const colorClass =
    score > 75 ? "bg-green-500" : score > 60 ? "bg-yellow-500" : "bg-slate-100"

  return (
    <span className={`text-white ${colorClass} rounded px-2 text-sm`}>
      {score}
    </span>
  )
}
