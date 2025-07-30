import { Button } from "@/components/ui/button";
import { ShoppingBag, Search, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-brand-taupe/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <Link to="/">
              <h1 className="font-cormorant text-3xl font-bold tracking-wide text-foreground">
                ELEMENT
              </h1>
              <p className="font-libre text-xs text-muted-foreground tracking-widest">
                by SHRUSHTI BHANDARI
              </p>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <Link to="/collections" className="font-libre text-sm tracking-wide text-foreground hover:text-brand-clay transition-colors">
              Collections
            </Link>
            <Link to="/about" className="font-libre text-sm tracking-wide text-foreground hover:text-brand-clay transition-colors">
              About
            </Link>
            <Link to="/lookbook" className="font-libre text-sm tracking-wide text-foreground hover:text-brand-clay transition-colors">
              Lookbook
            </Link>
            <Link to="/contact" className="font-libre text-sm tracking-wide text-foreground hover:text-brand-clay transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-brand-clay text-background text-xs rounded-full w-5 h-5 flex items-center justify-center font-libre">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;