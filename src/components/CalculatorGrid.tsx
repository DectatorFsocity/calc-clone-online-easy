
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Percent, DollarSign, TrendingUp, Scale, Thermometer } from "lucide-react";

export const CalculatorGrid = () => {
  const calculators = [
    {
      title: "Basic Calculator",
      description: "Simple arithmetic operations",
      icon: Calculator,
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      title: "Percentage Calculator",
      description: "Calculate percentages easily",
      icon: Percent,
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop"
    },
    {
      title: "Loan Calculator",
      description: "Calculate loan payments",
      icon: DollarSign,
      color: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=300&h=200&fit=crop"
    },
    {
      title: "Investment Calculator",
      description: "Plan your investments",
      icon: TrendingUp,
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=200&fit=crop"
    },
    {
      title: "BMI Calculator",
      description: "Calculate body mass index",
      icon: Scale,
      color: "bg-red-500",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
    },
    {
      title: "Unit Converter",
      description: "Convert units easily",
      icon: Thermometer,
      color: "bg-indigo-500",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Popular Calculators</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {calculators.map((calc, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={calc.image} 
                alt={calc.title}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute top-2 left-2 ${calc.color} p-2 rounded-lg`}>
                <calc.icon className="h-5 w-5 text-white" />
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-1">{calc.title}</h3>
              <p className="text-sm text-muted-foreground">{calc.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
