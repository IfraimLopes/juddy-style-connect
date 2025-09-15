import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/hero-video.mp4';

const HeroSection = () => {
  const whatsappContact = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os produtos Juddy Cosmetics', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
          Juddy
          <span className="block text-gold-gradient">Cosmetics</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-body font-light mb-8 max-w-2xl mx-auto animate-slide-up">
          Beleza premium que marca o seu olhar. 
          Descubra nossa coleção exclusiva de produtos fashion.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            onClick={whatsappContact}
            variant="secondary"
            size="lg"
            className="gold-gradient text-primary font-body font-semibold px-8 py-4 text-lg hover:scale-105 transition-luxury gold-shadow"
          >
            Fale Conosco no WhatsApp
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            onClick={whatsappContact}
            className="border-white/50 bg-transparent text-white hover:bg-white/20 font-body font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-luxury"
          >
            Quero Saber Mais
          </Button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-accent/20 rounded-full animate-float blur-xl" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;