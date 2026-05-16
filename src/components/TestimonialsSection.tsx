import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Award } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  highlight: string;
  body: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Helena S.",
    role: "Cozinha Planejada",
    highlight: "Simplesmente perfeito!",
    body: "A equipe da TOP Móveis entendeu exatamente o que eu queria. Minha cozinha ficou muito além das expectativas. Recomendo de olhos fechados!",
    rating: 5,
    initials: "MH",
  },
  {
    name: "Carlos Eduardo M.",
    role: "Home Office Completo",
    highlight: "Profissionalismo do início ao fim.",
    body: "O projeto 3D me deu total segurança antes de aprovar. O resultado final ficou impecável e funcional. Excelente!",
    rating: 5,
    initials: "CE",
  },
  {
    name: "Ana Paula R.",
    role: "Apartamento Completo",
    highlight: "Qualidade excepcional.",
    body: "Fizemos todos os móveis do apartamento com a TOP Móveis e não nos arrependemos. Pontualidade na entrega e um atendimento extraordinário.",
    rating: 5,
    initials: "AP",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Depoimentos</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            O que nossos clientes dizem
          </h2>
          
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-border/30 rounded-full px-5 py-2.5 shadow-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-sm text-muted-foreground font-medium">Avaliado com 5 estrelas pelos nossos clientes</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/40 bg-card/80 hover:bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-500 rounded-3xl overflow-hidden group">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <Quote className="h-10 w-10 text-accent/20 group-hover:text-accent/30 transition-colors duration-500" />
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary/80 text-muted-foreground text-xs font-medium tracking-wide">
                    {t.role}
                  </span>
                </div>
                
                <div className="mb-8">
                  <p className="text-foreground text-lg font-semibold leading-relaxed mb-3">
                    "{t.highlight}"
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.body}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-border/30">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-accent font-semibold text-sm">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-border/20 rounded-2xl px-8 py-4">
            <Award className="h-5 w-5 text-accent" />
            <span className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">+500 projetos entregues</span> com excelência em toda a região
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
