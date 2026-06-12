import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

const highlights = [
  "Mais de 30 anos de tradição e qualidade",
  "Equipe especializada com mestres marceneiros",
  "Matéria-prima selecionada e certificada",
  "Projeto 3D antes da fabricação",
  "Garantia estendida em todos os produtos",
  "Entrega e instalação profissional",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-24 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <Reveal className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                alt="Móvel planejado sob medida - 30+ anos de tradição"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <div className="inline-flex flex-col items-center bg-background/90 backdrop-blur-sm rounded-2xl px-8 py-5">
                  <span className="font-display text-4xl font-bold text-accent">30+</span>
                  <p className="text-foreground/80 font-medium text-sm tracking-wide">Anos de Tradição</p>
                </div>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-xl max-w-xs hidden md:block">
              <p className="font-display text-2xl font-bold text-foreground">5.000+</p>
              <p className="text-muted-foreground text-sm">Projetos realizados com excelência</p>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={120}>
            <span className="text-accent font-medium text-sm tracking-widest uppercase">Sobre Nós</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Tradição que se renova a cada projeto
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A <strong className="text-foreground">TOP Móveis Marcenaria</strong> nasceu da paixão pela madeira e pelo 
              compromisso de transformar ambientes. Há mais de três décadas, unimos técnica artesanal 
              com tecnologia de ponta para criar móveis que contam histórias.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Cada peça que sai de nossa oficina carrega o DNA da qualidade, do cuidado com os detalhes 
              e do respeito ao sonho de cada cliente. Essa é a essência que nos fez referência no mercado.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
