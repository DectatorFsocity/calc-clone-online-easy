
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("metric"); // metric or imperial
  const [result, setResult] = useState<{ bmi: number; category: string } | null>(null);

  const calculate = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    
    if (!isNaN(weightNum) && !isNaN(heightNum) && heightNum > 0) {
      let bmi: number;
      
      if (unit === "metric") {
        // height in cm, weight in kg
        bmi = weightNum / Math.pow(heightNum / 100, 2);
      } else {
        // height in inches, weight in lbs
        bmi = (weightNum / Math.pow(heightNum, 2)) * 703;
      }
      
      let category = "";
      if (bmi < 18.5) category = "Underweight";
      else if (bmi < 25) category = "Normal weight";
      else if (bmi < 30) category = "Overweight";
      else category = "Obese";
      
      setResult({ bmi: Math.round(bmi * 10) / 10, category });
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-red-600 text-white rounded-t-lg">
        <CardTitle className="text-lg">BMI Calculator</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button
              variant={unit === "metric" ? "default" : "outline"}
              size="sm"
              onClick={() => setUnit("metric")}
            >
              Metric
            </Button>
            <Button
              variant={unit === "imperial" ? "default" : "outline"}
              size="sm"
              onClick={() => setUnit("imperial")}
            >
              Imperial
            </Button>
          </div>
          
          <div>
            <Label htmlFor="height" className="text-sm">
              Height ({unit === "metric" ? "cm" : "inches"})
            </Label>
            <Input
              id="height"
              type="number"
              placeholder={unit === "metric" ? "Enter height in cm" : "Enter height in inches"}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="h-8"
            />
          </div>
          
          <div>
            <Label htmlFor="weight" className="text-sm">
              Weight ({unit === "metric" ? "kg" : "lbs"})
            </Label>
            <Input
              id="weight"
              type="number"
              placeholder={unit === "metric" ? "Enter weight in kg" : "Enter weight in lbs"}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="h-8"
            />
          </div>
          
          <Button onClick={calculate} size="sm" className="w-full">
            Calculate BMI
          </Button>
          
          {result && (
            <div className="text-sm space-y-1 p-3 bg-muted rounded">
              <div className="font-medium">BMI: {result.bmi}</div>
              <div className="text-muted-foreground">Category: {result.category}</div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
