import { Card, CardContent } from "@/components/ui/card";
import { Armchair, Home, UtensilsCrossed, Bath, Building2, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Salas de Estar",
    description: "Painéis de TV, estantes, racks e móveis sob medida que transformam sua sala em um ambiente acolhedor e funcional.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cozinhas Planejadas",
    description: "Cozinhas completas com design inteligente, aproveitamento máximo de espaço e acabamentos premium.",
  },
  {
    icon: Armchair,
    title: "Dormitórios",
    description: "Guarda-roupas, cabeceiras, cômodas e closets personalizados para o quarto dos seus sonhos.",
  },
  {
    icon: Bath,
    title: "Banheiros",
    description: "Gabinetes, nichos e armários que unem elegância e praticidade para seu banheiro.",
    backgroundImage: "https://images.unsplash.com/photo-1600488999585-e4364713b90a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuaGVpcm9zfGVufDB8fDB8fHww",
  },
  {
    icon: Building2,
    title: "Escritórios",
    description: "Home offices e escritórios corporativos com móveis que aliam produtividade e sofisticação.",
  },
  {
    icon: Paintbrush,
    title: "Projetos Especiais",
    description: "Peças exclusivas e projetos diferenciados. Se você imaginou, nós transformamos em realidade.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Nossos Serviços</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Soluções completas em marcenaria
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada ambiente merece atenção especial. Criamos móveis sob medida para todos os cômodos da sua casa ou empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 bg-card"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
