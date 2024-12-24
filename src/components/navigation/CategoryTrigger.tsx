import { LucideIcon } from "lucide-react"
import { NavigationMenuTrigger } from "@/components/ui/navigation-menu"

interface CategoryTriggerProps {
  icon: LucideIcon
  name: string
}

export function CategoryTrigger({ icon: Icon, name }: CategoryTriggerProps) {
  return (
    <NavigationMenuTrigger className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary group">
      <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
      {name}
    </NavigationMenuTrigger>
  )
}