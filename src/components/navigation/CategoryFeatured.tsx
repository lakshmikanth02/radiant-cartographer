import { NavigationMenuContent } from "@/components/ui/navigation-menu"

interface FeaturedItem {
  title: string
  href: string
  description: string
  image: string
}

interface CategoryFeaturedProps {
  featured?: FeaturedItem[]
  subcategories: string[] | { name: string; items: string[] }[]
}

export function CategoryFeatured({ featured, subcategories }: CategoryFeaturedProps) {
  return (
    <NavigationMenuContent>
      <div className="w-[500px] lg:w-[800px] p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Featured</h3>
          {featured ? (
            <div className="grid grid-cols-2 gap-4">
              {featured.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group block space-y-2"
                >
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-sm text-muted-foreground">No featured items</div>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <div className="grid grid-cols-2 gap-2">
            {Array.isArray(subcategories) && !subcategories[0]?.name ? (
              // Handle flat array of subcategories
              subcategories.map((subcat) => (
                <a
                  key={subcat}
                  href={`#${subcat.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-accent"
                >
                  {subcat}
                </a>
              ))
            ) : (
              // Handle grouped subcategories
              (subcategories as { name: string; items: string[] }[]).map((group) => (
                <div key={group.name} className="col-span-2">
                  <h4 className="text-sm font-medium mb-2">{group.name}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {group.items.map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-accent"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  )
}