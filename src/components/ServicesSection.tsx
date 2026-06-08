import { Card, CardContent } from "@/components/ui/card";
import { Armchair, Home, UtensilsCrossed, Bath, Building2, Paintbrush } from "lucide-react";
import { chatStore } from "@/lib/chatStore";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  backgroundImage?: string;
  template: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: "Salas de Estar",
    description: "Painéis de TV, estantes, racks e móveis sob medida que transformam sua sala em um ambiente acolhedor e funcional.",
    backgroundImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?fm=jpg&q=80&w=2000&auto=format&fit=crop",
    template: "Gostaria de planejar uma sala de estar sofisticada, com painel de TV, estante e rack sob medida que valorizem o ambiente...",
  },
  {
    icon: UtensilsCrossed,
    title: "Cozinhas Planejadas",
    description: "Cozinhas completas com design inteligente, aproveitamento máximo de espaço e acabamentos premium.",
    backgroundImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?fm=jpg&q=80&w=2000&auto=format&fit=crop",
    template: "Gostaria de planejar uma cozinha moderna e funcional com acabamento premium e máximo aproveitamento de espaço...",
  },
  {
    icon: Armchair,
    title: "Dormitórios",
    description: "Guarda-roupas, cabeceiras, cômodas e closets personalizados para o quarto dos seus sonhos.",
    backgroundImage: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?fm=jpg&q=80&w=2000&auto=format&fit=crop",
    template: "Gostaria de planejar um dormitório aconchegante com guarda-roupa, cabeceira e closet personalizados sob medida...",
  },
  {
    icon: Bath,
    title: "Banheiros",
    description: "Gabinetes, nichos e armários que unem elegância e praticidade para seu banheiro.",
    backgroundImage: "https://images.unsplash.com/photo-1600488999585-e4364713b90a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuaGVpcm9zfGVufDB8fDB8fHww",
    template: "Gostaria de planejar um banheiro elegante com gabinete, nichos e armários sob medida que unam praticidade e estética...",
  },
  {
    icon: Building2,
    title: "Escritórios",
    description: "Home offices e escritórios corporativos com móveis que aliam produtividade e sofisticação.",
    backgroundImage: "https://images.unsplash.com/photo-1593476550610-87baa860004a?fm=jpg&q=80&w=2000&auto=format&fit=crop",
    template: "Gostaria de planejar um escritório/home office sob medida que alie produtividade, organização e sofisticação...",
  },
  {
    icon: Paintbrush,
    title: "Projetos Especiais",
    description: "Peças exclusivas e projetos diferenciados. Se você imaginou, nós transformamos em realidade.",
    backgroundImage: "https://images.unsplash.com/photo-1615529182904-14819c35db37?fm=jpg&q=80&w=2000&auto=format&fit=crop",
    template: "Tenho um projeto especial e exclusivo em mente e gostaria de transformá-lo em realidade com móveis sob medida...",
  },
];

const ServicesSection = () => {
  const handleCardClick = (template: string) => {
    chatStore.setConsultDraft(template);
    const el = document.getElementById("contato");
    el?.scrollIntoView({ behavior: "smooth" });
  };

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
            <button
              key={service.title}
              type="button"
              onClick={() => handleCardClick(service.template)}
              className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-accent rounded-xl"
            >
              <Card
                className={`group cursor-pointer border-border/50 hover:border-accent/40 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 overflow-hidden relative min-h-[280px] ${service.backgroundImage ? "" : "bg-card"}`}
                style={service.backgroundImage ? { backgroundImage: `url(${service.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
              >
              {service.backgroundImage && (
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-foreground/30 group-hover:from-foreground/80 group-hover:via-foreground/40 transition-all duration-500" />
              )}
              <CardContent className="p-8 relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${service.backgroundImage ? "bg-white/15 group-hover:bg-accent/80 backdrop-blur-sm" : "bg-accent/10 group-hover:bg-accent/20"}`}>
                  <service.icon className={`h-7 w-7 ${service.backgroundImage ? "text-white" : "text-accent"}`} />
                </div>
                <h3 className={`font-display text-xl font-semibold mb-3 ${service.backgroundImage ? "text-white" : "text-foreground"}`}>{service.title}</h3>
                <p className={`leading-relaxed ${service.backgroundImage ? "text-white/80" : "text-muted-foreground"}`}>{service.description}</p>
              </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
