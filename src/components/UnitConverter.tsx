
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const UnitConverter = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("feet");
  const [category, setCategory] = useState("length");
  const [result, setResult] = useState<number | null>(null);

  const conversions = {
    length: {
      meters: 1,
      feet: 3.28084,
      inches: 39.3701,
      centimeters: 100,
      kilometers: 0.001,
      miles: 0.000621371
    },
    weight: {
      kilograms: 1,
      pounds: 2.20462,
      grams: 1000,
      ounces: 35.274
    },
    temperature: {
      celsius: (c: number, to: string) => {
        if (to === "fahrenheit") return (c * 9/5) + 32;
        if (to === "kelvin") return c + 273.15;
        return c;
      },
      fahrenheit: (f: number, to: string) => {
        if (to === "celsius") return (f - 32) * 5/9;
        if (to === "kelvin") return (f - 32) * 5/9 + 273.15;
        return f;
      },
      kelvin: (k: number, to: string) => {
        if (to === "celsius") return k - 273.15;
        if (to === "fahrenheit") return (k - 273.15) * 9/5 + 32;
        return k;
      }
    }
  };

  const getUnitsForCategory = (cat: string) => {
    if (cat === "length") return Object.keys(conversions.length);
    if (cat === "weight") return Object.keys(conversions.weight);
    if (cat === "temperature") return Object.keys(conversions.temperature);
    return [];
  };

  const convert = () => {
    const inputValue = parseFloat(value);
    if (isNaN(inputValue)) return;

    let convertedValue: number;

    if (category === "temperature") {
      const tempConversions = conversions.temperature as any;
      convertedValue = tempConversions[fromUnit](inputValue, toUnit);
    } else {
      const categoryConversions = conversions[category as keyof typeof conversions] as Record<string, number>;
      const baseValue = inputValue / categoryConversions[fromUnit];
      convertedValue = baseValue * categoryConversions[toUnit];
    }

    setResult(Math.round(convertedValue * 1000000) / 1000000);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-indigo-600 text-white rounded-t-lg">
        <CardTitle className="text-lg">Unit Converter</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="category" className="text-sm">Category</Label>
            <select 
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                const units = getUnitsForCategory(e.target.value);
                setFromUnit(units[0]);
                setToUnit(units[1] || units[0]);
                setResult(null);
              }}
              className="w-full h-8 px-3 border border-input bg-background rounded-md text-sm"
            >
              <option value="length">Length</option>
              <option value="weight">Weight</option>
              <option value="temperature">Temperature</option>
            </select>
          </div>

          <div>
            <Label htmlFor="value" className="text-sm">Value</Label>
            <Input
              id="value"
              type="number"
              placeholder="Enter value to convert"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="h-8"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="from-unit" className="text-sm">From</Label>
              <select 
                id="from-unit"
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full h-8 px-3 border border-input bg-background rounded-md text-sm"
              >
                {getUnitsForCategory(category).map(unit => (
                  <option key={unit} value={unit}>{unit}</option>
                ))}
              </select>
            </div>
            
            <div>
              <Label htmlFor="to-unit" className="text-sm">To</Label>
              <select 
                id="to-unit"
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full h-8 px-3 border border-input bg-background rounded-md text-sm"
              >
                {getUnitsForCategory(category).map(unit => (
                  <option key={unit} value={unit}>{unit}</option>
                ))}
              </select>
            </div>
          </div>
          
          <Button onClick={convert} size="sm" className="w-full">
            Convert
          </Button>
          
          {result !== null && (
            <div className="text-sm p-3 bg-muted rounded text-center">
              <div className="font-medium">
                {value} {fromUnit} = {result} {toUnit}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
