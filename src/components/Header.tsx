import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Search } from "lucide-react";
import { SecondaryHeader } from "./SecondaryHeader";

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold">
              Store
            </a>
          </div>
          
          <div className="flex-1 mx-8">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full h-10 px-4 pr-10 rounded-full bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>
      <SecondaryHeader />
    </>
  );
}