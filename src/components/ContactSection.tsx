import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Sparkles, ImagePlus, ArrowRight, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent font-medium text-xs tracking-[0.3em] uppercase">Contato</span>
          <h2 className="font-display text-4xl md:text-6xl font-normal text-foreground mt-4 mb-5 tracking-tight">
            Vamos criar algo <em className="text-accent not-italic">extraordinário</em>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Conte-nos sobre o ambiente dos seus sonhos. Nossa equipe — junto à inteligência artificial — transforma sua visão em projeto.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* AI Assistant */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-foreground/70 font-medium">
                Assistente de Projetos IA
              </span>
            </div>

            <div className="relative">
              <Textarea
                placeholder="Descreva o ambiente dos seus sonhos ou envie uma foto de inspiração..."
                className="min-h-[220px] bg-transparent border-0 border-b border-border/60 rounded-none px-0 py-4 text-base font-light leading-relaxed placeholder:text-muted-foreground/60 focus-visible:ring-0 focus-visible:border-accent resize-none"
              />

              <div className="flex items-center justify-between mt-6">
                <button
                  type="button"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <ImagePlus className="h-4 w-4" />
                  <span className="font-light">Anexar inspiração</span>
                </button>

                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-7 h-12 font-light tracking-wide group"
                >
                  Iniciar Consultoria Digital
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* WhatsApp integrated */}
            <div className="mt-12 pt-8 border-t border-border/40">
              <a
                href="#"
                className="group flex items-center justify-between py-2 hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  <div>
                    <p className="font-display text-lg text-foreground">Prefere conversar agora?</p>
                    <p className="text-sm text-muted-foreground font-light">Atendimento direto pelo WhatsApp</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-10 lg:pl-8 lg:border-l lg:border-border/40">
            {[
              { icon: MapPin, label: "Atelier", value: "Rua da Marcenaria, 1000\nSão Paulo — SP" },
              { icon: Phone, label: "Telefone", value: "(11) 99999-9999\n(11) 3333-3333" },
              { icon: Mail, label: "E-mail", value: "contato@topmoveis.com.br" },
              { icon: Clock, label: "Horário", value: "Seg a Sex — 8h às 18h\nSáb — 8h às 12h" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-5">
                <item.icon className="h-4 w-4 text-accent mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-medium mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-foreground font-light whitespace-pre-line leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
