import { MessageSquare, Ruler, PenTool, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultoria",
    description: "Ouvimos suas necessidades e entendemos o espaço. Visita técnica gratuita para medições.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Projeto 3D",
    description: "Criamos o projeto em 3D para você visualizar cada detalhe antes da fabricação.",
  },
  {
    icon: Ruler,
    step: "03",
    title: "Fabricação",
    description: "Produção com maquinário de ponta e mãos experientes, garantindo perfeição em cada peça.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Entrega & Instalação",
    description: "Entregamos e instalamos com pontualidade e cuidado. Seu ambiente pronto para usar.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Como Funciona</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            Do sonho à realidade em 4 passos
          </h2>
          <p className="text-primary-foreground/60 text-lg">
            Um processo transparente e eficiente para você acompanhar cada etapa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div key={item.step} className="relative text-center group cursor-pointer">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-primary-foreground/10" />
              )}
              <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_0_25px_hsl(var(--accent)/0.5)] relative">
                <item.icon className="h-8 w-8 text-accent transition-transform duration-300 group-hover:rotate-6" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                  {item.step}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">{item.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
