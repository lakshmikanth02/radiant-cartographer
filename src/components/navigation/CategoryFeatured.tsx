import { NavigationMenuContent } from "@/components/ui/navigation-menu"

interface FeaturedItem {
  title: string
  href: string
  description: string
  image: string
}

interface CategoryFeaturedProps {
  featured?: FeaturedItem[]
  subcategories: Array<string | { name: string; items: string[] }>
}

export function CategoryFeatured({ featured, subcategories }: CategoryFeaturedProps) {
  return (
    <NavigationMenuContent>
      <div className="w-[90vw] md:w-[600px] lg:w-[800px] p-4 md:p-6 dark:bg-[#1f2a38]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-h-[70vh] overflow-y-auto scrollbar-hide">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Featured</h3>
            {featured ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {subcategories.map((subcat, index) => {
                if (typeof subcat === 'string') {
                  return (
                    <a
                      key={index}
                      href={`#${subcat.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-accent"
                    >
                      {subcat}
                    </a>
                  );
                }
                return (
                  <div key={index} className="col-span-2">
                    <h4 className="text-sm font-medium mb-2">{subcat.name}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {subcat.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={`#${item.toLowerCase()}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-accent"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  )
}