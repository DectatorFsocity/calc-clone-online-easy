
import { Card } from "@/components/ui/card";

interface CalculatorDisplayProps {
  value: string;
}

export const CalculatorDisplay = ({ value }: CalculatorDisplayProps) => {
  return (
    <Card className="p-6 bg-gray-50 border-2">
      <div className="text-right">
        <div className="text-4xl font-mono font-bold text-gray-900 min-h-[3rem] flex items-center justify-end">
          {value}
        </div>
      </div>
    </Card>
  );
};
