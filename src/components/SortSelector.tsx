import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select"

interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: string) => void
  sortOrder: string
}

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
]

export function SortSelector({
  onSelectSortOrder,
  sortOrder,
}: SortSelectorProps) {
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <Select onValueChange={onSelectSortOrder}>
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder={`Sort by: ${currentSortOrder?.label || "Relevance"}`}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sortOrders.map(order => (
            <SelectItem key={order.value} value={order.value}>
              {order.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
