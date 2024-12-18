import { Laptop, Smartphone, Watch, Headphones } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Laptops",
    icon: Laptop,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Smartphones",
    icon: Smartphone,
    color: "bg-purple-500",
  },
  {
    id: 3,
    name: "Smartwatches",
    icon: Watch,
    color: "bg-pink-500",
  },
  {
    id: 4,
    name: "Headphones",
    icon: Headphones,
    color: "bg-orange-500",
  },
];

export function Categories() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#"
              className="category-card group"
            >
              <div className={`glass-card aspect-square flex flex-col items-center justify-center gap-4 ${category.color}/10`}>
                <category.icon className={`h-12 w-12 ${category.color} text-white rounded-xl p-2 transition-transform group-hover:scale-110`} />
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}