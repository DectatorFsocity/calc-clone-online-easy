
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PercentageCalculator } from "./PercentageCalculator";
import { TipCalculator } from "./TipCalculator";

export const QuickCalculators = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Calculators</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <PercentageCalculator />
          <TipCalculator />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <a href="#" className="block p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="font-medium text-foreground">Loan Calculator</div>
              <div className="text-sm text-muted-foreground">Calculate monthly payments</div>
            </a>
            <a href="#" className="block p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="font-medium text-foreground">BMI Calculator</div>
              <div className="text-sm text-muted-foreground">Check your body mass index</div>
            </a>
            <a href="#" className="block p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="font-medium text-foreground">Currency Converter</div>
              <div className="text-sm text-muted-foreground">Convert between currencies</div>
            </a>
            <a href="#" className="block p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="font-medium text-foreground">Unit Converter</div>
              <div className="text-sm text-muted-foreground">Length, weight, temperature</div>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
