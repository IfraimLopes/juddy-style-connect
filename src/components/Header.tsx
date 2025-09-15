import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const whatsappContact = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os produtos Juddy Cosmetics', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-heading font-bold text-gold-gradient">
            juddy
          </h1>
          <span className="text-sm font-body text-muted-foreground">Cosmetics</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-accent transition-smooth font-body font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-foreground hover:text-accent transition-smooth font-body font-medium"
          >
            Sobre Nós
          </button>
          <button 
            onClick={() => scrollToSection('colecoes')}
            className="text-foreground hover:text-accent transition-smooth font-body font-medium"
          >
            Coleções
          </button>
          <button 
            onClick={() => scrollToSection('depoimentos')}
            className="text-foreground hover:text-accent transition-smooth font-body font-medium"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-foreground hover:text-accent transition-smooth font-body font-medium"
          >
            Contato
          </button>
        </nav>

        {/* CTA Button */}
        <Button 
          onClick={whatsappContact}
          variant="secondary" 
          className="hidden md:flex gold-gradient text-primary font-body font-semibold px-6 py-2 hover:scale-105 transition-luxury"
        >
          Fale Conosco
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-foreground hover:text-accent transition-smooth font-body font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left text-foreground hover:text-accent transition-smooth font-body font-medium"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('colecoes')}
              className="block w-full text-left text-foreground hover:text-accent transition-smooth font-body font-medium"
            >
              Coleções
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="block w-full text-left text-foreground hover:text-accent transition-smooth font-body font-medium"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left text-foreground hover:text-accent transition-smooth font-body font-medium"
            >
              Contato
            </button>
            <Button 
              onClick={whatsappContact}
              variant="secondary" 
              className="w-full gold-gradient text-primary font-body font-semibold"
            >
              Fale Conosco
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;