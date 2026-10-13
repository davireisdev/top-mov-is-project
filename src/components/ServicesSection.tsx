import { Card, CardContent } from "@/components/ui/card";
import { Armchair, Home, UtensilsCrossed, Bath, Building2, Paintbrush } from "lucide-react";
import { chatStore } from "@/lib/chatStore";
import Reveal from "@/components/Reveal";
import serviceSala from "@/assets/service-sala.jpg";
import serviceCozinha from "@/assets/service-cozinha.jpg";
import serviceDormitorio from "@/assets/service-dormitorio.jpg";
import serviceBanheiro from "@/assets/service-banheiro.jpg";
import serviceEscritorio from "@/assets/service-escritorio.jpg";
import serviceEspeciais from "@/assets/service-especiais.jpg";

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
    backgroundImage: serviceSala,
    template: "Gostaria de planejar uma sala de estar sofisticada, com painel de TV, estante e rack sob medida que valorizem o ambiente...",
  },
  {
    icon: UtensilsCrossed,
    title: "Cozinhas Planejadas",
    description: "Cozinhas completas com design inteligente, aproveitamento máximo de espaço e acabamentos premium.",
    backgroundImage: serviceCozinha,
    template: "Gostaria de planejar uma cozinha moderna e funcional com acabamento premium e máximo aproveitamento de espaço...",
  },
  {
    icon: Armchair,
    title: "Dormitórios",
    description: "Guarda-roupas, cabeceiras, cômodas e closets personalizados para o quarto dos seus sonhos.",
    backgroundImage: serviceDormitorio,
    template: "Gostaria de planejar um dormitório aconchegante com guarda-roupa, cabeceira e closet personalizados sob medida...",
  },
  {
    icon: Bath,
    title: "Banheiros",
    description: "Gabinetes, nichos e armários que unem elegância e praticidade para seu banheiro.",
    backgroundImage: serviceBanheiro,
    template: "Gostaria de planejar um banheiro elegante com gabinete, nichos e armários sob medida que unam praticidade e estética...",
  },
  {
    icon: Building2,
    title: "Escritórios",
    description: "Home offices e escritórios corporativos com móveis que aliam produtividade e sofisticação.",
    backgroundImage: serviceEscritorio,
    template: "Gostaria de planejar um escritório/home office sob medida que alie produtividade, organização e sofisticação...",
  },
  {
    icon: Paintbrush,
    title: "Projetos Especiais",
    description: "Peças exclusivas e projetos diferenciados. Se você imaginou, nós transformamos em realidade.",
    backgroundImage: serviceEspeciais,
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
    <section id="servicos" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Nossos Serviços</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Soluções completas em marcenaria
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada ambiente merece atenção especial. Criamos móveis sob medida para todos os cômodos da sua casa ou empresa.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
            <button
              key={service.title}
              type="button"
              onClick={() => handleCardClick(service.template)}
              className="block w-full h-full text-left focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
            >
              <Card
                className={`group cursor-pointer border-border/50 hover:border-accent/40 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 overflow-hidden relative min-h-[280px] ${service.backgroundImage ? "" : "bg-card"}`}
              >
              {service.backgroundImage && (
                <>
                  <img
                    src={service.backgroundImage}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/75 to-foreground/65 group-hover:from-foreground/85 group-hover:via-foreground/70 transition-all duration-500" />
                </>
              )}
              <CardContent className="p-8 relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${service.backgroundImage ? "bg-white/15 group-hover:bg-accent/80 backdrop-blur-sm" : "bg-accent/10 group-hover:bg-accent/20"}`}>
                  <service.icon className={`h-7 w-7 ${service.backgroundImage ? "text-white" : "text-primary"}`} />
                </div>
                <h3 className={`font-display text-xl font-semibold mb-3 ${service.backgroundImage ? "text-white" : "text-foreground"}`}>{service.title}</h3>
                <p className={`leading-relaxed ${service.backgroundImage ? "text-white/80" : "text-muted-foreground"}`}>{service.description}</p>
              </CardContent>
              </Card>
            </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
