import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, Instagram, Facebook, Clock, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const whatsappContact = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de entrar em contato com a Juddy Cosmetics', '_blank');
  };

  const openSocial = (platform: string) => {
    const urls = {
      instagram: 'https://instagram.com/juddy.cosmetics',
      facebook: 'https://facebook.com/juddy.cosmetics',
      tiktok: 'https://tiktok.com/@juddy.cosmetics'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Entre em <span className="text-gold-gradient">Contato</span>
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para ajudar você a descobrir os produtos perfeitos para realçar sua beleza única
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp Card */}
            <Card className="p-8 text-center hover-lift bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                WhatsApp
              </h3>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                Atendimento personalizado e rápido direto no seu celular
              </p>
              <Button 
                onClick={whatsappContact}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-body font-semibold transition-luxury"
              >
                Falar Agora
              </Button>
            </Card>

            {/* Instagram Card */}
            <Card className="p-8 text-center hover-lift bg-gradient-to-br from-pink-50 to-purple-100 dark:from-pink-900/20 dark:to-purple-800/20 border-pink-200 dark:border-pink-800">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Instagram
              </h3>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                Acompanhe novidades, tutoriais e inspirações de beleza
              </p>
              <Button 
                onClick={() => openSocial('instagram')}
                variant="outline"
                className="w-full border-pink-300 text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20 font-body font-semibold transition-luxury"
              >
                Seguir @juddy.cosmetics
              </Button>
            </Card>

            {/* Facebook Card */}
            <Card className="p-8 text-center hover-lift bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Facebook className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Facebook
              </h3>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                Comunidade exclusiva com dicas e conteúdos especiais
              </p>
              <Button 
                onClick={() => openSocial('facebook')}
                variant="outline"
                className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-body font-semibold transition-luxury"
              >
                Curtir Página
              </Button>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                Horário de Atendimento
              </h4>
              <p className="text-muted-foreground font-body">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 14h
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                Telefone
              </h4>
              <p className="text-muted-foreground font-body">
                (11) 99999-9999<br />
                WhatsApp disponível
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                Localização
              </h4>
              <p className="text-muted-foreground font-body">
                São Paulo, SP<br />
                Atendimento online
              </p>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Pronta para se sentir ainda mais bela?
            </h3>
            <p className="text-xl text-primary-foreground/90 font-body mb-8 max-w-2xl mx-auto">
              Entre em contato agora e descubra como nossos produtos premium podem transformar sua rotina de beleza
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={whatsappContact}
                variant="secondary"
                size="lg"
                className="gold-gradient text-primary font-body font-semibold px-8 py-4 text-lg hover:scale-105 transition-luxury gold-shadow"
              >
                Falar no WhatsApp Agora
              </Button>
              <Button 
                onClick={() => openSocial('instagram')}
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-luxury"
              >
                Seguir no Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;