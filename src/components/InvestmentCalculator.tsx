
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const InvestmentCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compound, setCompound] = useState("12"); // monthly compounding
  const [result, setResult] = useState<{ amount: number; interest: number } | null>(null);

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(compound);
    
    if (!isNaN(p) && !isNaN(r) && !isNaN(t) && !isNaN(n) && p > 0 && t > 0) {
      // Compound interest formula: A = P(1 + r/n)^(nt)
      const amount = p * Math.pow(1 + r / n, n * t);
      const interest = amount - p;
      
      setResult({
        amount: Math.round(amount * 100) / 100,
        interest: Math.round(interest * 100) / 100
      });
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-purple-600 text-white rounded-t-lg">
        <CardTitle className="text-lg">Investment Calculator</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="principal" className="text-sm">Initial Investment ($)</Label>
            <Input
              id="principal"
              type="number"
              placeholder="Enter initial amount"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="h-8"
            />
          </div>
          
          <div>
            <Label htmlFor="rate" className="text-sm">Annual Interest Rate (%)</Label>
            <Input
              id="rate"
              type="number"
              placeholder="Enter annual rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="h-8"
            />
          </div>
          
          <div>
            <Label htmlFor="time" className="text-sm">Time Period (years)</Label>
            <Input
              id="time"
              type="number"
              placeholder="Enter time in years"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="h-8"
            />
          </div>
          
          <div>
            <Label htmlFor="compound" className="text-sm">Compounding Frequency</Label>
            <select 
              id="compound"
              value={compound}
              onChange={(e) => setCompound(e.target.value)}
              className="w-full h-8 px-3 border border-input bg-background rounded-md text-sm"
            >
              <option value="1">Annually</option>
              <option value="4">Quarterly</option>
              <option value="12">Monthly</option>
              <option value="365">Daily</option>
            </select>
          </div>
          
          <Button onClick={calculate} size="sm" className="w-full">
            Calculate
          </Button>
          
          {result && (
            <div className="text-sm space-y-1 p-3 bg-muted rounded">
              <div className="font-medium">Final Amount: ${result.amount.toLocaleString()}</div>
              <div className="text-muted-foreground">Interest Earned: ${result.interest.toLocaleString()}</div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
