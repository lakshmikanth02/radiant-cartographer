import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Winter Essentials for You",
    items: [
      {
        id: "w1",
        name: "Men's Tracksuits",
        discount: "Min. 50% Off",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      },
      {
        id: "w2",
        name: "True Wireless",
        discount: "Trending",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      },
      {
        id: "w3",
        name: "Smart Watches",
        discount: "Min. 40% Off",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
      },
      {
        id: "w4",
        name: "Men's Mufflers",
        discount: "Special offer",
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9",
      },
    ],
  },
  {
    id: 2,
    name: "End of Season Bestsellers",
    items: [
      {
        id: "e1",
        name: "Casual Shirts",
        discount: "Min. 50% Off",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
      },
      {
        id: "e2",
        name: "Men's Sports Shoes",
        discount: "Min. 70% Off",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
      {
        id: "e3",
        name: "Watches",
        discount: "Min. 50% Off",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
      },
      {
        id: "e4",
        name: "Men's Casual Shoes",
        discount: "Min. 70% Off",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      },
    ],
  },
  {
    id: 3,
    name: "Home Decor & Furnishings",
    items: [
      {
        id: "h1",
        name: "Torches",
        discount: "Special offer",
        image: "https://images.unsplash.com/photo-1590534247854-e97d5e3feef6",
      },
      {
        id: "h2",
        name: "Bath Towels",
        discount: "Min. 50% Off",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473",
      },
      {
        id: "h3",
        name: "Bulbs",
        discount: "Min. 50% Off",
        image: "https://images.unsplash.com/photo-1624628639856-100bf817fd35",
      },
      {
        id: "h4",
        name: "Bedsheets",
        discount: "Min. 50% Off",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2",
      },
    ],
  },
];

export function Products() {
  return (
    <div className="py-8 space-y-8">
      {products.map((category) => (
        <section key={category.id} className="bg-white dark:bg-gray-800 rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">{category.name}</h2>
            <Button variant="ghost" size="sm" className="gap-1">
              View All
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {category.items.map((item) => (
              <Card key={item.id} className="group cursor-pointer overflow-hidden border-0 shadow-sm">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-3 space-y-1">
                  <h3 className="font-medium text-sm text-gray-900 dark:text-gray-100">
                    {item.name}
                  </h3>
                  <p className={`text-sm font-medium ${
                    item.discount === "Trending" 
                      ? "text-blue-600 dark:text-blue-400"
                      : item.discount === "Special offer"
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-green-600 dark:text-green-400"
                  }`}>
                    {item.discount}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}