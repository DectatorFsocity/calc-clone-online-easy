
import { Calculator as CalculatorIcon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <CalculatorIcon className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Calculator Online</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Scientific</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Financial</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Unit Converter</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          </nav>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Home</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2">Scientific</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2">Financial</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2">Unit Converter</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2">About</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
