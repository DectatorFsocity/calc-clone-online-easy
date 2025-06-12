
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
      
      // Add to history
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

  const buttonClass = "h-12 text-lg font-medium transition-all duration-200 hover:scale-105";
  const numberButtonClass = `${buttonClass} bg-background hover:bg-accent border border-border`;
  const operatorButtonClass = `${buttonClass} bg-primary hover:bg-primary/90 text-primary-foreground`;
  const functionButtonClass = `${buttonClass} bg-secondary hover:bg-secondary/80 text-secondary-foreground`;

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Scientific Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CalculatorDisplay value={display} />
          
          <div className="grid grid-cols-5 gap-2">
            {/* First row - Functions */}
            <Button className={functionButtonClass} onClick={clear}>C</Button>
            <Button className={functionButtonClass} onClick={() => handleFunction("+/-")}>+/-</Button>
            <Button className={functionButtonClass} onClick={() => handleFunction("%")}>%</Button>
            <Button className={functionButtonClass} onClick={() => handleFunction("√")}>√</Button>
            <Button className={operatorButtonClass} onClick={() => performOperation("÷")}>÷</Button>

            {/* Second row */}
            <Button className={functionButtonClass} onClick={() => handleFunction("x²")}>x²</Button>
            <Button className={numberButtonClass} onClick={() => inputNumber("7")}>7</Button>
            <Button className={numberButtonClass} onClick={() => inputNumber("8")}>8</Button>
            <Button className={numberButtonClass} onClick={() => inputNumber("9")}>9</Button>
            <Button className={operatorButtonClass} onClick={() => performOperation("×")}>×</Button>

            {/* Third row */}
            <Button className={functionButtonClass} onClick={() => handleFunction("1/x")}>1/x</Button>
            <Button className={numberButtonClass} onClick={() => inputNumber("4")}>4</Button>
            <Button className={numberButtonClass} onClick={() => inputNumber("5")}>5</Button>
            <Button className={numberButtonClass} onClick={() => inputNumber("6")}>6</Button>
            <Button className={operatorButtonClass} onClick={() => performOperation("-")}>-</Button>

            {/* Fourth row */}
            <Button className={functionButtonClass} onClick={() => inputNumber("(")}>(</Button>
            <Button className={numberButtonClass} onClick={() => inputNumber("1")}>1</Button>
            <Button className={numberButtonClass} onClick={() => inputNumber("2")}>2</Button>
            <Button className={numberButtonClass} onClick={() => inputNumber("3")}>3</Button>
            <Button className={operatorButtonClass} onClick={() => performOperation("+")}>+</Button>

            {/* Fifth row */}
            <Button className={functionButtonClass} onClick={() => inputNumber(")")}>)</Button>
            <Button className={`${numberButtonClass} col-span-2`} onClick={() => inputNumber("0")}>0</Button>
            <Button className={numberButtonClass} onClick={inputDecimal}>.</Button>
            <Button className={`${operatorButtonClass} bg-orange-500 hover:bg-orange-600`} onClick={() => performOperation("=")}>=</Button>
          </div>
        </CardContent>
      </Card>

      <CalculatorHistory history={history} onClear={() => setHistory([])} />
    </div>
  );
};
