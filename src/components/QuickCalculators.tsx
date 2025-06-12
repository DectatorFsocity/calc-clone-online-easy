
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PercentageCalculator } from "./PercentageCalculator";
import { TipCalculator } from "./TipCalculator";

export const QuickCalculators = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      <Card className="shadow-lg">
        <CardHeader className="bg-green-600 text-white rounded-t-lg">
          <CardTitle className="text-lg">Percentage Calculator</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <PercentageCalculator />
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader className="bg-purple-600 text-white rounded-t-lg">
          <CardTitle className="text-lg">Tip Calculator</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <TipCalculator />
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-lg">Popular Links</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-3">
            <a href="#" className="block p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="font-medium text-blue-900">BMI Calculator</div>
              <div className="text-sm text-blue-600">Calculate body mass index</div>
            </a>
            <a href="#" className="block p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
              <div className="font-medium text-green-900">Currency Converter</div>
              <div className="text-sm text-green-600">Convert between currencies</div>
            </a>
            <a href="#" className="block p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
              <div className="font-medium text-orange-900">Date Calculator</div>
              <div className="text-sm text-orange-600">Calculate dates and time</div>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
