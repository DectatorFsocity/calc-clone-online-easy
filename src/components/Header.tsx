
import { Calculator as CalculatorIcon, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const calculators = [
    { name: "Basic Calculator", description: "Simple arithmetic operations" },
    { name: "Scientific Calculator", description: "Advanced mathematical functions" },
    { name: "Percentage Calculator", description: "Calculate percentages easily" },
    { name: "Tip Calculator", description: "Calculate tips and splits" },
    { name: "Financial Calculator", description: "Loans, mortgages, and investments" },
    { name: "Unit Converter", description: "Convert between different units" },
    { name: "BMI Calculator", description: "Calculate body mass index" },
    { name: "Age Calculator", description: "Calculate age and date differences" },
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <CalculatorIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">InstaCalculator.com</h1>
                <p className="text-xs text-gray-500">Free & Easy to Use</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              <div className="relative">
                <Button
                  variant="ghost"
                  className="pl-10 w-64 justify-start text-gray-500"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
                  Search calculators...
                </Button>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Scientific</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Financial</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Unit Converter</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">More</a>
            </nav>
            
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="mb-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-500"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search calculators...
                </Button>
              </div>
              <nav className="flex flex-col space-y-3">
                <a href="#" className="text-blue-600 font-medium py-2">Home</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Scientific</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Financial</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Unit Converter</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">More</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput placeholder="Search calculators..." />
        <CommandList>
          <CommandEmpty>No calculators found.</CommandEmpty>
          <CommandGroup heading="Calculators">
            {calculators.map((calculator) => (
              <CommandItem
                key={calculator.name}
                onSelect={() => {
                  console.log(`Selected: ${calculator.name}`);
                  setIsSearchOpen(false);
                }}
              >
                <div>
                  <div className="font-medium">{calculator.name}</div>
                  <div className="text-sm text-gray-500">{calculator.description}</div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
