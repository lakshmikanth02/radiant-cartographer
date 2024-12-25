import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Products } from "@/components/Products";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container py-8">
          <Categories />
          <Products />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;