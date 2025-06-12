
import { Card } from "@/components/ui/card";

interface CalculatorDisplayProps {
  value: string;
}

export const CalculatorDisplay = ({ value }: CalculatorDisplayProps) => {
  return (
    <Card className="p-4 bg-muted/50">
      <div className="text-right">
        <div className="text-3xl font-mono font-bold text-foreground min-h-[2.5rem] flex items-center justify-end">
          {value}
        </div>
      </div>
    </Card>
  );
};
