
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState("15");
  const [people, setPeople] = useState("1");
  const [result, setResult] = useState<{ tip: number; total: number; perPerson: number } | null>(null);

  const calculate = () => {
    const billAmount = parseFloat(bill);
    const tip = parseFloat(tipPercent);
    const numPeople = parseInt(people);
    
    if (!isNaN(billAmount) && !isNaN(tip) && !isNaN(numPeople) && numPeople > 0) {
      const tipAmount = (billAmount * tip) / 100;
      const total = billAmount + tipAmount;
      const perPerson = total / numPeople;
      
      setResult({
        tip: tipAmount,
        total,
        perPerson
      });
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-orange-600 text-white rounded-t-lg">
        <CardTitle className="text-lg">Tip Calculator</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="bill-amount" className="text-sm">Bill Amount ($)</Label>
            <Input
              id="bill-amount"
              type="number"
              placeholder="Enter bill amount"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              className="h-8"
            />
          </div>
          <div>
            <Label htmlFor="tip-percent" className="text-sm">Tip Percentage (%)</Label>
            <Input
              id="tip-percent"
              type="number"
              placeholder="15"
              value={tipPercent}
              onChange={(e) => setTipPercent(e.target.value)}
              className="h-8"
            />
          </div>
          <div>
            <Label htmlFor="num-people" className="text-sm">Number of People</Label>
            <Input
              id="num-people"
              type="number"
              placeholder="1"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="h-8"
            />
          </div>
          <Button onClick={calculate} size="sm" className="w-full">
            Calculate
          </Button>
          {result && (
            <div className="text-sm space-y-1 p-3 bg-muted rounded">
              <div className="font-medium">Tip: ${result.tip.toFixed(2)}</div>
              <div>Total: ${result.total.toFixed(2)}</div>
              <div>Per Person: ${result.perPerson.toFixed(2)}</div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
