
import { Calculator } from "@/components/Calculator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuickCalculators } from "@/components/QuickCalculators";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Online Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Free online calculator with a full range of functions for all your calculation needs. 
              Scientific, basic, and specialty calculators all in one place.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Calculator />
            </div>
            <div className="lg:col-span-1">
              <QuickCalculators />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
