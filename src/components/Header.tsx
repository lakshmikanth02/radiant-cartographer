import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Search, Menu } from "lucide-react";
import { SecondaryHeader } from "./SecondaryHeader";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();

  return (
    <div className="sticky top-0 z-50">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] p-0">
                  <div className="space-y-4 py-4">
                    <div className="px-4">
                      <h2 className="text-lg font-semibold">Menu</h2>
                    </div>
                    <div className="border-t">
                      <div className="grid gap-1 p-2">
                        <Button variant="ghost" className="w-full justify-start">
                          Home
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          Shop
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          Categories
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
            <a href="/" className="text-xl md:text-2xl font-bold">
              Store
            </a>
          </div>
          
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative max-w-2xl mx-auto w-full">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full h-10 px-4 pr-10 rounded-full bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            {isMobile && (
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            )}
            <ThemeToggle />
            <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
            <Button className="hidden md:inline-flex">Sign Up</Button>
          </div>
        </div>
      </header>
      <SecondaryHeader />
    </div>
  );
}