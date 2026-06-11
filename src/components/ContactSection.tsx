import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Sparkles, ImagePlus, ArrowRight, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { chatStore, useChatStore } from "@/lib/chatStore";

const WHATSAPP_URL = "https://w.app/tq16tl";

const ContactSection = () => {
  const { consultDraft: draft } = useChatStore();
  const setDraft = (text: string) => chatStore.setConsultDraft(text);
  const [modalOpen, setModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startConsult = () => {
    const text = draft.trim();
    if (!text) {
      alert("Por favor, descreva o ambiente dos seus sonhos antes de iniciar a consultoria.");
      return;
    }
    setModalOpen(true);
  };

  const openDirectWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  const consultantWhatsAppUrl = () => WHATSAPP_URL;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDraft(`${draft ? draft + "\n\n" : ""}Anexei uma imagem de inspiração: ${file.name}`);
    }
  };

  return (
    <section id="contato" className="py-32 bg-muted">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent font-medium text-xs tracking-[0.3em] uppercase">Contato</span>
          <h2 className="font-display text-4xl md:text-6xl font-normal text-foreground mt-4 mb-5 tracking-tight">
            Vamos criar algo <em className="text-accent not-italic">extraordinário</em>
          </h2>
          <p className="text-foreground/70 text-lg font-light leading-relaxed">
            Conte-nos sobre o ambiente dos seus sonhos. Nossa equipe — junto à inteligência artificial — transforma sua visão em projeto.
          </p>
        </div>

        {/* Main content container */}
        <div className="bg-background/95 rounded-xl border border-border/50 p-8 md:p-12 lg:p-16 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.06)]">
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
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                      e.preventDefault();
                      startConsult();
                    }
                  }}
                  placeholder="Descreva o ambiente dos seus sonhos ou envie uma foto de inspiração..."
                  className="min-h-[220px] bg-popover rounded-xl border border-border/60 px-5 py-5 text-base font-light leading-relaxed placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-accent/20 focus-visible:border-accent resize-none transition-all duration-300"
                />

                <div className="flex items-center justify-between mt-6">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors"
                  >
                    <ImagePlus className="h-4 w-4" />
                    <span className="font-light">Anexar inspiração</span>
                  </button>

                  <Button
                    size="lg"
                    onClick={startConsult}
                    className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-7 h-12 font-light tracking-wide group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--accent)/0.4)]"
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
                  onClick={(e) => {
                    e.preventDefault();
                    openDirectWhatsApp();
                  }}
                  className="group flex items-center justify-between py-2 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <MessageCircle className="h-5 w-5 text-accent" strokeWidth={1.5} />
                    <div>
                      <p className="font-display text-lg text-foreground">Prefere conversar agora?</p>
                      <p className="text-sm text-foreground/70 font-light">Atendimento direto pelo WhatsApp</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-foreground/70 transition-transform group-hover:translate-x-1" />
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
                    <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/60 font-medium mb-1.5">
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
      </div>

      {/* Coming Soon Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md bg-background rounded-2xl border border-border/60">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <DialogTitle className="font-display text-2xl text-center font-normal">
              Consultoria Digital com IA <span className="text-accent">(Em Breve)</span>
            </DialogTitle>
            <DialogDescription className="text-center text-base font-light leading-relaxed pt-2">
              Estamos calibrando nossa inteligência artificial para criar projetos 3D realistas em segundos! Essa função estará disponível muito em breve.
            </DialogDescription>
          </DialogHeader>
          <a
            href={consultantWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-foreground text-background hover:bg-foreground/90 rounded-full h-12 px-6 font-light tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_hsl(var(--accent)/0.4)]"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com Consultor no WhatsApp
          </a>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
