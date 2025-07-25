
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PercentageCalculator = () => {
  const [value, setValue] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const val = parseFloat(value);
    const pct = parseFloat(percentage);
    if (!isNaN(val) && !isNaN(pct)) {
      setResult((val * pct) / 100);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-green-600 text-white rounded-t-lg">
        <CardTitle className="text-lg">Percentage Calculator</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="percentage-value" className="text-sm">Value</Label>
            <Input
              id="percentage-value"
              type="number"
              placeholder="Enter value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="h-8"
            />
          </div>
          <div>
            <Label htmlFor="percentage-percent" className="text-sm">Percentage</Label>
            <Input
              id="percentage-percent"
              type="number"
              placeholder="Enter percentage"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              className="h-8"
            />
          </div>
          <Button onClick={calculate} size="sm" className="w-full">
            Calculate
          </Button>
          {result !== null && (
            <div className="text-sm font-medium text-center p-3 bg-muted rounded">
              {percentage}% of {value} = {result}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
