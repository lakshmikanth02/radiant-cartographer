import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
  },
  {
    id: 3,
    name: "Laptop Pro",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 4,
    name: "Smartphone",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
  },
];

export function Products() {
  return (
    <section className="py-8 md:py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-lg md:text-xl font-bold text-primary mb-4">
                ${product.price}
              </p>
              <Button className="w-full gap-2">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}