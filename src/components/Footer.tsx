import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-brand-clay text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-cormorant text-4xl font-bold mb-2">ELEMENT</h3>
            <p className="font-libre text-sm mb-4 opacity-90">by SHRUSHTI BHANDARI</p>
            <p className="font-libre text-sm leading-relaxed opacity-80 max-w-md">
              Crafting deeply personal fashion experiences that celebrate individuality, 
              empower self-expression, and honour the artistry behind every stitch.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-libre font-bold mb-4">Collections</h4>
            <ul className="space-y-2 font-libre text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Essential Elements</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Evening Elegance</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Curated Accessories</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">New Arrivals</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-libre font-bold mb-4">Support</h4>
            <ul className="space-y-2 font-libre text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Size Guide</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Care Instructions</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Returns & Exchanges</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-libre text-sm opacity-70">
            © 2024 ELEMENT by Shrushti Bhandari. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="font-libre text-sm opacity-70 hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="font-libre text-sm opacity-70 hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;