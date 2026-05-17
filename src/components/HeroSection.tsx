import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle textured background matching site palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/40 to-accent/10" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 mb-8">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Há mais de 30 anos no mercado</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Transformamos seus
            <span className="block text-accent"> sonhos em móveis</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 font-body leading-relaxed">
            Móveis planejados sob medida com a qualidade e tradição que só mais de três décadas 
            de experiência podem oferecer. Cada peça é única, assim como seu lar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 rounded-full">
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/5 text-base px-8 py-6 rounded-full">
              Ver Portfólio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md">
            <div>
              <div className="flex items-center gap-1 mb-1">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-2xl md:text-3xl font-bold text-foreground font-display">30+</span>
              </div>
              <p className="text-sm text-muted-foreground">Anos de experiência</p>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                <Star className="h-4 w-4 text-accent" />
                <span className="text-2xl md:text-3xl font-bold text-foreground font-display">5k+</span>
              </div>
              <p className="text-sm text-muted-foreground">Projetos entregues</p>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                <Award className="h-4 w-4 text-accent" />
                <span className="text-2xl md:text-3xl font-bold text-foreground font-display">100%</span>
              </div>
              <p className="text-sm text-muted-foreground">Satisfação garantida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
