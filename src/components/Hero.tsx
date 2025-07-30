import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="ELEMENT Fashion Store Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="font-cormorant text-6xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground mb-6">
            Your essence,
            <br />
            <span className="font-medium italic">our element</span>
          </h1>
          
          <p className="font-libre text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
            Deeply personal fashion experiences that celebrate individuality, 
            empower self-expression, and honour the artistry behind every stitch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="hero" className="font-cormorant">
              Explore Collections
            </Button>
            <Button variant="minimal" size="hero" className="font-libre">
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;