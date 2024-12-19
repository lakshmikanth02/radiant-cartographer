import { Laptop, Smartphone, Watch, Headphones, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/button";

const categories = [
  {
    id: 1,
    name: "Men",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e",
    subcategories: [
      {
        name: "Clothing",
        subcategories: ["T-Shirts", "Shirts", "Pants", "Jeans", "Suits", "Jackets", "Activewear", "Underwear", "Socks", "Swimwear"]
      },
      {
        name: "Shoes",
        subcategories: ["Sneakers", "Formal", "Boots", "Sandals", "Running", "Basketball", "Soccer", "Training", "Hiking", "Slip-ons"]
      },
      {
        name: "Accessories",
        subcategories: ["Watches", "Belts", "Wallets", "Sunglasses", "Hats", "Ties", "Gloves", "Scarves", "Jewelry", "Bags"]
      }
    ]
  },
  {
    id: 2,
    name: "Women",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    subcategories: [
      {
        name: "Clothing",
        subcategories: ["Dresses", "Tops", "Pants", "Skirts", "Jeans", "Activewear", "Swimwear", "Intimates", "Outerwear", "Suits"]
      },
      {
        name: "Shoes",
        subcategories: ["Heels", "Flats", "Sneakers", "Boots", "Sandals", "Wedges", "Pumps", "Athletic", "Slippers", "Loafers"]
      },
      {
        name: "Accessories",
        subcategories: ["Jewelry", "Bags", "Scarves", "Belts", "Sunglasses", "Watches", "Hair Accessories", "Gloves", "Hats", "Wallets"]
      }
    ]
  },
  {
    id: 3,
    name: "Kids",
    image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6",
    subcategories: [
      {
        name: "Boys",
        subcategories: ["T-Shirts", "Pants", "Shorts", "Jackets", "Underwear", "Socks", "Shoes", "Accessories", "Swimwear", "Sleepwear"]
      },
      {
        name: "Girls",
        subcategories: ["Dresses", "Tops", "Pants", "Skirts", "Jackets", "Underwear", "Shoes", "Accessories", "Swimwear", "Sleepwear"]
      },
      {
        name: "Baby",
        subcategories: ["Bodysuits", "Sets", "Dresses", "Tops", "Bottoms", "Outerwear", "Shoes", "Accessories", "Sleepwear", "Special Occasion"]
      }
    ]
  },
  {
    id: 4,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    subcategories: [
      {
        name: "Computers",
        subcategories: ["Laptops", "Desktops", "Tablets", "Monitors", "Keyboards", "Mice", "Storage", "Printers", "Software", "Accessories"]
      },
      {
        name: "Mobile",
        subcategories: ["Smartphones", "Cases", "Chargers", "Screen Protectors", "Power Banks", "Cables", "Holders", "Bluetooth", "Memory Cards", "Accessories"]
      },
      {
        name: "Audio",
        subcategories: ["Headphones", "Speakers", "Earbuds", "Sound Systems", "Microphones", "Amplifiers", "Record Players", "Car Audio", "Accessories", "Cables"]
      }
    ]
  }
];

export function Categories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 px-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <div key={category.id} className="flex-none w-64 snap-start">
                <div className="group relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                </div>
                <div className="space-y-2">
                  {category.subcategories.map((subcat, index) => (
                    <div key={index} className="space-y-1">
                      <h4 className="font-semibold text-lg">{subcat.name}</h4>
                      <div className="text-sm text-muted-foreground">
                        {subcat.subcategories.slice(0, 3).join(", ")}
                        {subcat.subcategories.length > 3 && "..."}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}