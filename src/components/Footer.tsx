
export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Calculators</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Basic Calculator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Scientific Calculator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Percentage Calculator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tip Calculator</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Financial</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Loan Calculator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mortgage Calculator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Investment Calculator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tax Calculator</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Unit Converters</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Length Converter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Weight Converter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Temperature Converter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Currency Converter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">About</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Help</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Calculator Online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
