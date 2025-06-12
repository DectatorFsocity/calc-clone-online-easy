
export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Free Online Calculator
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Use our free online calculator for basic math, scientific calculations, 
          percentages, fractions, and more. Easy to use with instant results.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-white/20 px-4 py-2 rounded-full">✓ Scientific Calculator</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">✓ Basic Calculator</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">✓ Percentage Calculator</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">✓ History Feature</span>
        </div>
      </div>
    </section>
  );
};
