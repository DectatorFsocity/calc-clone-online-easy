
import { Calculator } from "@/components/Calculator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuickCalculators } from "@/components/QuickCalculators";
import { HeroSection } from "@/components/HeroSection";
import { CalculatorGrid } from "@/components/CalculatorGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-2">
              <Calculator />
            </div>
            <div className="lg:col-span-2">
              <CalculatorGrid />
            </div>
          </div>
          <div className="mt-8">
            <QuickCalculators />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
