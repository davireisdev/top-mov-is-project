import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Warm brownish-orange base */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/85 to-primary/80" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 mb-8">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Há mais de 30 anos no mercado</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Transformamos seus
            <span className="block text-accent"> sonhos em móveis</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 font-body leading-relaxed">
            Móveis planejados sob medida com a qualidade e tradição que só mais de três décadas 
            de experiência podem oferecer. Cada peça é única, assim como seu lar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button asChild size="lg" className="group bg-accent text-accent-foreground hover:bg-accent text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--accent)/0.6)]">
              <a href="https://w.app/tq16tl" target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" className="group bg-foreground/90 text-primary-foreground hover:bg-foreground/80 hover:border-accent/60 border border-primary-foreground/20 text-base px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--primary-foreground)/0.25)]">
              <a href="#portfolio">Ver Portfólio</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md">
            <div>
              <div className="flex items-center gap-1 mb-1">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground font-display">30+</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Anos de experiência</p>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                <Star className="h-4 w-4 text-accent" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground font-display">5k+</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Projetos entregues</p>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                <Award className="h-4 w-4 text-accent" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground font-display">100%</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Satisfação garantida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
