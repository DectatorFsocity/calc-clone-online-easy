
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

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
    <div className="space-y-3">
      <h3 className="font-medium text-foreground">Percentage Calculator</h3>
      <div className="space-y-2">
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
          <div className="text-sm font-medium text-center p-2 bg-muted rounded">
            {percentage}% of {value} = {result}
          </div>
        )}
      </div>
    </div>
  );
};
