import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Heart, Star } from 'lucide-react';

const AboutSection = () => {
  const whatsappContact = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de conhecer mais sobre a marca Juddy Cosmetics', '_blank');
  };

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Sobre a <span className="text-gold-gradient">Juddy</span>
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma marca premium dedicada a realçar a beleza única de cada mulher, 
              com produtos de alta qualidade que unem elegância, sofisticação e estilo.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-heading font-semibold text-foreground">
                Nossa Missão
              </h3>
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                Na Juddy Cosmetics, acreditamos que cada mulher possui uma beleza única que merece ser celebrada. 
                Nossos produtos são cuidadosamente desenvolvidos para oferecer qualidade premium, 
                proporcionando confiança e elegância em cada aplicação.
              </p>
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                Desde cílios postiços deslumbrantes até lip oils nutritivos, cada produto da nossa linha 
                é pensado para mulheres que valorizam a excelência e não abrem mão da sofisticação.
              </p>
              <Button 
                onClick={whatsappContact}
                variant="secondary"
                className="gold-gradient text-primary font-body font-semibold px-6 py-3 hover:scale-105 transition-luxury"
              >
                Fale Conosco
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-foreground mb-2">
                      Qualidade Premium
                    </h4>
                    <p className="text-muted-foreground font-body">
                      Produtos desenvolvidos com os melhores materiais e tecnologias do mercado
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-foreground mb-2">
                      Cuidado Personalizado
                    </h4>
                    <p className="text-muted-foreground font-body">
                      Atendimento exclusivo e produtos pensados para cada tipo de beleza
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-foreground mb-2">
                      Elegância Fashion
                    </h4>
                    <p className="text-muted-foreground font-body">
                      Design sofisticado que acompanha as tendências de moda e beleza
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
              Pronta para descobrir sua beleza única?
            </h3>
            <p className="text-xl text-primary-foreground/80 font-body mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossos produtos podem realçar sua elegância natural.
            </p>
            <Button 
              onClick={whatsappContact}
              variant="secondary"
              size="lg"
              className="gold-gradient text-primary font-body font-semibold px-8 py-4 text-lg hover:scale-105 transition-luxury"
            >
              Quero Conhecer os Produtos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;