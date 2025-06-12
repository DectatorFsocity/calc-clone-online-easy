
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface CalculatorHistoryProps {
  history: string[];
  onClear: () => void;
}

export const CalculatorHistory = ({ history, onClear }: CalculatorHistoryProps) => {
  if (history.length === 0) return null;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Calculation History</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-1 max-h-48 overflow-y-auto">
          {history.map((entry, index) => (
            <div
              key={index}
              className="text-sm font-mono bg-muted/30 p-2 rounded text-right hover:bg-muted/50 transition-colors"
            >
              {entry}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
