
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Online Calculator</h3>
            <p className="text-gray-300 mb-4">
              Free online calculator for all your math needs. From basic arithmetic 
              to advanced scientific calculations, we've got you covered.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">y</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Calculators</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Basic Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Scientific Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Percentage Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fraction Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Graphing Calculator</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Financial</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Loan Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mortgage Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tip Calculator</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Converters</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Length Converter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Weight Converter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Temperature Converter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Currency Converter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Time Zone Converter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm text-gray-300 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
            </div>
            <p className="text-sm text-gray-400">
              © 2024 Online Calculator. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
