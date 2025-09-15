import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openSocial = (platform: string) => {
    const urls = {
      instagram: 'https://instagram.com/juddy.cosmetics',
      facebook: 'https://facebook.com/juddy.cosmetics',
      whatsapp: 'https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a Juddy Cosmetics'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <h3 className="text-3xl font-heading font-bold text-gold-gradient">
                  juddy
                </h3>
                <span className="text-lg font-body text-primary-foreground/80">Cosmetics</span>
              </div>
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-6 max-w-md">
                Beleza premium que marca o seu olhar. Produtos de alta qualidade para mulheres 
                que valorizam elegância e sofisticação.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => openSocial('instagram')}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-primary rounded-full flex items-center justify-center transition-luxury"
                >
                  <Instagram className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => openSocial('facebook')}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-primary rounded-full flex items-center justify-center transition-luxury"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => openSocial('whatsapp')}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-green-500 hover:text-white rounded-full flex items-center justify-center transition-luxury"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-semibold text-primary-foreground mb-6">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-primary-foreground/80 hover:text-accent font-body transition-smooth"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('sobre')}
                    className="text-primary-foreground/80 hover:text-accent font-body transition-smooth"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('colecoes')}
                    className="text-primary-foreground/80 hover:text-accent font-body transition-smooth"
                  >
                    Coleções
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('depoimentos')}
                    className="text-primary-foreground/80 hover:text-accent font-body transition-smooth"
                  >
                    Depoimentos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contato')}
                    className="text-primary-foreground/80 hover:text-accent font-body transition-smooth"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-heading font-semibold text-primary-foreground mb-6">
                Contato
              </h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => openSocial('whatsapp')}
                    className="text-primary-foreground/80 hover:text-accent font-body transition-smooth"
                  >
                    (11) 99999-9999
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openSocial('instagram')}
                    className="text-primary-foreground/80 hover:text-accent font-body transition-smooth"
                  >
                    @juddy.cosmetics
                  </button>
                </li>
                <li>
                  <span className="text-primary-foreground/80 font-body">
                    São Paulo, SP
                  </span>
                </li>
                <li>
                  <span className="text-primary-foreground/80 font-body">
                    Segunda a Sexta: 9h às 18h
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-primary-foreground/60 font-body text-sm">
                © 2024 Juddy Cosmetics. Todos os direitos reservados.
              </p>
              <p className="text-primary-foreground/60 font-body text-sm">
                Beleza premium que marca o seu olhar
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;