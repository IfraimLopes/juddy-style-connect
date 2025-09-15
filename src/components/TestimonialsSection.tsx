import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import lifestyleImage from '@/assets/juddy-lifestyle.jpeg';
import testimonialImage from '@/assets/testimonial-1.jpg';

const TestimonialsSection = () => {
  const whatsappContact = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Vi os depoimentos e gostaria de conhecer os produtos Juddy Cosmetics', '_blank');
  };

  const testimonials = [
    {
      id: 1,
      name: "Ana Carolina",
      text: "Simplesmente apaixonada pelos cílios Juddy! O volume é perfeito e a qualidade é excepcional.",
      rating: 5,
      image: testimonialImage
    },
    {
      id: 2,
      name: "Mariana Silva",
      text: "Os lip oils são incríveis! Hidratam de verdade e o brilho é maravilhoso. Já virei cliente fiel!",
      rating: 5,
      image: lifestyleImage
    },
    {
      id: 3,
      name: "Beatriz Santos",
      text: "Qualidade premium que se nota na primeira aplicação. Produtos que realmente fazem a diferença!",
      rating: 5,
      image: testimonialImage
    }
  ];

  const lifestyle = [
    {
      title: "Elegância Natural",
      description: "Para mulheres que valorizam a sofisticação em cada detalhe"
    },
    {
      title: "Qualidade Premium", 
      description: "Produtos desenvolvidos com os melhores materiais"
    },
    {
      title: "Estilo Fashion",
      description: "Acompanhe as tendências com nossa linha exclusiva"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Depoimentos & <span className="text-gold-gradient">Lifestyle</span>
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Veja o que nossas clientes estão falando sobre a experiência Juddy Cosmetics
            </p>
          </div>

          {/* Lifestyle Section */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={lifestyleImage}
                  alt="Juddy Lifestyle"
                  className="w-full h-96 object-cover rounded-2xl luxury-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    Marca o seu olhar
                  </h3>
                  <p className="text-lg font-body opacity-90">
                    Elegância que se destaca
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {lifestyle.map((item, index) => (
                  <Card key={index} className="p-6 hover-lift">
                    <h4 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
              O que nossas clientes dizem
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="p-6 hover-lift">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground font-body leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-accent font-heading font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Cliente Juddy
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Faça parte da nossa comunidade
            </h3>
            <p className="text-xl text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
              Junte-se às mulheres que já descobriram o poder transformador da beleza premium
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={whatsappContact}
                variant="secondary"
                size="lg"
                className="gold-gradient text-primary font-body font-semibold px-8 py-4 text-lg hover:scale-105 transition-luxury"
              >
                Quero Ser Cliente
              </Button>
              <Button 
                onClick={whatsappContact}
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body font-semibold px-8 py-4 text-lg transition-luxury"
              >
                Ver Mais Depoimentos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;