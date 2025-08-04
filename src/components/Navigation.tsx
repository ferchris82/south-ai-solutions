import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Logo */}
          <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-full h-full">
              <defs>
                <linearGradient id="navGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#3B82F6", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#1E40AF", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              
              {/* Background circle */}
              <circle cx="16" cy="16" r="15" fill="url(#navGrad1)" stroke="#1E40AF" strokeWidth="1"/>
              
              {/* Robot head */}
              <rect x="8" y="10" width="16" height="12" rx="2" fill="#FFFFFF" stroke="#1E40AF" strokeWidth="1"/>
              
              {/* Eyes */}
              <circle cx="11" cy="14" r="1.5" fill="#3B82F6"/>
              <circle cx="21" cy="14" r="1.5" fill="#3B82F6"/>
              
              {/* Mouth */}
              <rect x="12" y="18" width="8" height="2" rx="1" fill="#3B82F6"/>
              
              {/* Antenna */}
              <line x1="16" y1="10" x2="16" y2="6" stroke="#1E40AF" strokeWidth="2"/>
              <circle cx="16" cy="6" r="1" fill="#3B82F6"/>
              
              {/* AI text */}
              <text x="16" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold" fill="#FFFFFF">AI</text>
            </svg>
          </div>
          
          {/* Brand name */}
          <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            TopIA's
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
            Nosotros
          </a>
          <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
            Contacto
          </a>
          <a href="#contacto">
            <Button variant="cta" size="sm" className="text-sm">
              Consulta Gratis
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-foreground hover:bg-accent/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a 
              href="#inicio" 
              onClick={closeMenu}
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              onClick={closeMenu}
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </a>
            <a 
              href="#nosotros" 
              onClick={closeMenu}
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              onClick={closeMenu}
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </a>
            <div className="pt-2">
              <a href="#contacto" onClick={closeMenu}>
                <Button variant="cta" className="w-full">
                  Consulta Gratis
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;