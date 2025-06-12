
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { CalculatorHistory } from "./CalculatorHistory";

export const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
      
      const historyEntry = `${currentValue} ${operation} ${inputValue} = ${newValue}`;
      setHistory(prev => [historyEntry, ...prev].slice(0, 10));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      case "=":
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleFunction = (func: string) => {
    const value = parseFloat(display);
    let result: number;

    switch (func) {
      case "√":
        result = Math.sqrt(value);
        break;
      case "x²":
        result = value * value;
        break;
      case "1/x":
        result = 1 / value;
        break;
      case "%":
        result = value / 100;
        break;
      case "+/-":
        result = value * -1;
        break;
      default:
        return;
    }

    setDisplay(String(result));
    setWaitingForOperand(true);
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-xl border-0 bg-white">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <CardTitle className="text-center text-xl">Scientific Calculator</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <CalculatorDisplay value={display} />
          
          <div className="grid grid-cols-5 gap-2">
            {/* Function row */}
            <Button 
              className="h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium" 
              onClick={clear}
            >
              C
            </Button>
            <Button 
              className="h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium" 
              onClick={() => handleFunction("+/-")}
            >
              +/-
            </Button>
            <Button 
              className="h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium" 
              onClick={() => handleFunction("%")}
            >
              %
            </Button>
            <Button 
              className="h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium" 
              onClick={() => handleFunction("√")}
            >
              √
            </Button>
            <Button 
              className="h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold" 
              onClick={() => performOperation("÷")}
            >
              ÷
            </Button>

            {/* Number rows */}
            <Button 
              className="h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium" 
              onClick={() => handleFunction("x²")}
            >
              x²
            </Button>
            <Button 
              className="h-12 bg-white hover:bg-gray-50 text-gray-900 border font-medium text-lg" 
              onClick={() => inputNumber("7")}
            >
              7
            </Button>
            <Button 
              className="h-12 bg-white hover:bg-gray-50 text-gray-900 border font-medium text-lg" 
              onClick={() => inputNumber("8")}
            >
              8
            </Button>
            <Button 
              className="h-12 bg-white hover:bg-gray-50 text-gray-900 border font-medium text-lg" 
              onClick={() => inputNumber("9")}
            >
              9
            </Button>
            <Button 
              className="h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold" 
              onClick={() => performOperation("×")}
            >
              ×
            </Button>

            <Button 
              className="h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium" 
              onClick={() => handleFunction("1/x")}
            >
              1/x
            </Button>
            <Button 
              className="h-12 bg-white hover:bg-gray-50 text-gray-900 border font-medium text-lg" 
              onClick={() => inputNumber("4")}
            >
              4
            </Button>
            <Button 
              className="h-12 bg-white hover:bg-gray-50 text-gray-900 border font-medium text-lg" 
              onClick={() => inputNumber("5")}
            >
              5
            </Button>
            <Button 
              className="h-12 bg-white hover:bg-gray-50 text-gray-900 border font-medium text-lg" 
              onClick={() => inputNumber("6")}
            >
              6
            </Button>
            <Button 
              className="h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold" 
              onClick={() => performOperation("-")}
            >
              -
            </Button>

            <Button 
              className="h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium" 
              onClick={() => inputNumber("(")}
            >
              (
            </Button>
            <Button 
              className="h-12 bg-white hover:bg-gray-50 text-gray-900 border font-medium text-lg" 
              onClick={() => inputNumber("1")}
            >
              1
            </Button>
            <Button 
              className="h-12 bg-white hover:bg-gray-50 text-gray-900 border font-medium text-lg" 
              onClick={() => inputNumber("2")}
            >
              2
            </Button>
            <Button 
              className="h-12 bg-white hover:bg-gray-50 text-gray-900 border font-medium text-lg" 
              onClick={() => inputNumber("3")}
            >
              3
            </Button>
            <Button 
              className="h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold" 
              onClick={() => performOperation("+")}
            >
              +
            </Button>

            <Button 
              className="h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium" 
              onClick={() => inputNumber(")")}
            >
              )
            </Button>
            <Button 
              className="h-12 bg-white hover:bg-gray-50 text-gray-900 border font-medium text-lg col-span-2" 
              onClick={() => inputNumber("0")}
            >
              0
            </Button>
            <Button 
              className="h-12 bg-white hover:bg-gray-50 text-gray-900 border font-medium text-lg" 
              onClick={inputDecimal}
            >
              .
            </Button>
            <Button 
              className="h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg" 
              onClick={() => performOperation("=")}
            >
              =
            </Button>
          </div>
        </CardContent>
      </Card>

      <CalculatorHistory history={history} onClear={() => setHistory([])} />
    </div>
  );
};
