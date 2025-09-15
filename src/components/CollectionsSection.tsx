import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import collectionImage from '@/assets/collection-hero.jpg';
import productsImage from '@/assets/juddy-products.jpeg';
import lipOilsImage from '@/assets/juddy-lip-oils.jpeg';

const CollectionsSection = () => {
  const whatsappContact = (product: string) => {
    window.open(`https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre ${product} da Juddy Cosmetics`, '_blank');
  };

  const collections = [
    {
      id: 1,
      title: "Cílios Postiços Premium",
      description: "Cílios de alta qualidade para um olhar marcante e elegante",
      image: productsImage,
      highlights: ["Volume intenso", "Aplicação fácil", "Reutilizáveis", "Aspecto natural"]
    },
    {
      id: 2,
      title: "Lip Oil Collection",
      description: "Óleos labiais nutritivos com acabamento glossy e hidratação prolongada",
      image: lipOilsImage,
      highlights: ["Hidratação intensa", "Brilho natural", "Diversas cores", "Nutrição labial"]
    },
    {
      id: 3,
      title: "Coleção Completa",
      description: "Linha completa de produtos para um visual impecável",
      image: collectionImage,
      highlights: ["Premium quality", "Design elegante", "Resultados profissionais", "Longa duração"]
    }
  ];

  return (
    <section id="colecoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Nossas <span className="text-gold-gradient">Coleções</span>
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubra nossa linha exclusiva de produtos premium, desenvolvidos para mulheres 
              que buscam qualidade, elegância e sofisticação em cada detalhe.
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {collections.map((collection, index) => (
              <Card key={collection.id} className="overflow-hidden hover-lift group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-luxury"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-heading font-bold text-white mb-2">
                      {collection.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                    {collection.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-body font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Destaques:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {collection.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-sm text-muted-foreground font-body">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => whatsappContact(collection.title)}
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body font-semibold transition-luxury"
                  >
                    Quero Saber Mais
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Featured Product */}
          <div className="bg-gradient-to-r from-primary via-primary/90 to-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Marca o seu olhar
            </h3>
            <p className="text-xl text-primary-foreground/90 font-body mb-6 max-w-2xl mx-auto">
              Produtos premium que destacam sua beleza natural com elegância e sofisticação. 
              Cada item é cuidadosamente selecionado para oferecer qualidade excepcional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => whatsappContact('toda a coleção')}
                variant="secondary"
                size="lg"
                className="gold-gradient text-primary font-body font-semibold px-8 py-4 text-lg hover:scale-105 transition-luxury"
              >
                Ver Toda Coleção
              </Button>
              <Button 
                onClick={() => whatsappContact('produtos em destaque')}
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-luxury"
              >
                Produtos em Destaque
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;