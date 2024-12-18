import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-bold">
            Store
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Shop
            </a>
            <a href="#" className="nav-link">
              Categories
            </a>
            <a href="#" className="nav-link">
              About
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex relative">
            <input
              type="search"
              placeholder="Search products..."
              className="w-64 h-9 px-3 rounded-full bg-muted"
            />
            <Search className="absolute right-3 top-2 h-5 w-5 text-muted-foreground" />
          </div>
          <ThemeToggle />
          <Button variant="ghost">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
}