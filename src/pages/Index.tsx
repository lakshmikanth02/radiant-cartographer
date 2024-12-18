import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Products } from "@/components/Products";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <Hero />
        </div>
        <Categories />
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default Index;