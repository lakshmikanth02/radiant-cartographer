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
      <header className="w-full bg-white dark:bg-[#1f2a38]">
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
            <a href="/" className="text-xl md:text-2xl font-bold dark:text-white">
              Store
            </a>
          </div>
          
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative max-w-2xl mx-auto w-full">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full h-10 px-4 pr-10 rounded-full dark:bg-white/10  dark:text-white dark:placeholder:text-white/70 border border-gray-500 focus:border-gray-100 dark:focus:border-gray-800"
              />

              <Search className="absolute right-3 top-2.5 h-5 w-5 dark:text-white/70" />
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            {isMobile && (
              <Button variant="ghost" size="icon" className="dark:text-white">
                <Search className="h-5 w-5" />
              </Button>
            )}
            <ThemeToggle />
            <Button variant="ghost" className="hidden md:inline-flex dark:text-white dark:hover:text-white/90">Sign In</Button>
            <Button className="hidden md:inline-flex">Sign Up</Button>
          </div>
        </div>
      </header>
      <SecondaryHeader />
    </div>
  );
}