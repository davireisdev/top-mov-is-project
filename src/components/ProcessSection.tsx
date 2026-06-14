import { MessageSquare, Ruler, PenTool, Truck } from "lucide-react";
import Reveal from "@/components/Reveal";
import processManufacturing from "@/assets/process-manufacturing.jpg";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultoria",
    description: "Ouvimos suas necessidades e entendemos o espaço. Visita técnica gratuita para medições.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    alt: "Medição e consultoria técnica para móveis planejados sob medida",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Projeto 3D",
    description: "Criamos o projeto em 3D para você visualizar cada detalhe antes da fabricação.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    alt: "Projeto 3D de marcenaria planejada em tela de computador",
  },
  {
    icon: Ruler,
    step: "03",
    title: "Fabricação",
    description: "Produção com maquinário de ponta e mãos experientes, garantindo perfeição em cada peça.",
    image: processManufacturing,
    alt: "Fabricação de móveis em marcenaria com maquinário profissional",
  },
  {
    icon: Truck,
    step: "04",
    title: "Entrega & Instalação",
    description: "Entregamos e instalamos com pontualidade e cuidado. Seu ambiente pronto para usar.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
    alt: "Montagem e instalação profissional de móveis planejados",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 md:py-24 bg-foreground">
      <div className="container mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Como Funciona</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            Do sonho à realidade em 4 passos
          </h2>
          <p className="text-primary-foreground/60 text-lg">
            Um processo transparente e eficiente para você acompanhar cada etapa.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <Reveal
              key={item.step}
              delay={i * 100}
              className="group text-center rounded-3xl overflow-hidden isolate transform-gpu [backface-visibility:hidden] [-webkit-mask-image:-webkit-radial-gradient(white,black)] bg-primary-foreground/[0.03] border border-primary-foreground/10 hover:border-accent/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_hsl(var(--accent)/0.5)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl transform-gpu [backface-visibility:hidden]">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transform-gpu transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-accent/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <item.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <span className="absolute top-4 right-4 font-display text-3xl font-bold text-primary-foreground/90">
                  {item.step}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
