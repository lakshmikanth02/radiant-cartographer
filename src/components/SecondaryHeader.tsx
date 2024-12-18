import { Laptop, Smartphone, Watch, Headphones, Camera, Gamepad, Tv, Speaker } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Laptops", icon: Laptop },
  { name: "Phones", icon: Smartphone },
  { name: "Watches", icon: Watch },
  { name: "Audio", icon: Headphones },
  { name: "Cameras", icon: Camera },
  { name: "Gaming", icon: Gamepad },
  { name: "TV", icon: Tv },
  { name: "Speakers", icon: Speaker },
];

export function SecondaryHeader() {
  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center gap-6 overflow-x-auto">
        {categories.map((category) => (
          <a
            key={category.name}
            href={`#${category.name.toLowerCase()}`}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
              "text-muted-foreground"
            )}
          >
            <category.icon className="h-4 w-4" />
            {category.name}
          </a>
        ))}
      </nav>
    </div>
  );
}