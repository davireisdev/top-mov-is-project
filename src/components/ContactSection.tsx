import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { chatStore, useChatStore } from "@/lib/chatStore";
import { BUSINESS, whatsappLink } from "@/lib/constants";
import Reveal from "@/components/Reveal";

const contactItems = [
  { icon: MapPin, label: "Atelier", value: BUSINESS.address.display },
  { icon: Phone, label: "Telefone", value: BUSINESS.phone },
  { icon: Mail, label: "E-mail", value: BUSINESS.email },
  { icon: Clock, label: "Horário", value: BUSINESS.hours.display },
] as const;

const ContactSection = () => {
  const { consultDraft: draft } = useChatStore();
  const setDraft = (text: string) => chatStore.setConsultDraft(text);
  const [showError, setShowError] = useState(false);

  const message = draft.trim();
  // O que o cliente escreveu segue pronto na conversa do WhatsApp.
  const consultUrl = whatsappLink(
    message
      ? `Olá! Vim pelo site da TOP Móveis e gostaria de um orçamento.\n\n${message}`
      : undefined
  );

  // Sem texto, não abre o WhatsApp: mostra o aviso ao lado do campo.
  const handleSendClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!message) {
      e.preventDefault();
      setShowError(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      if (!message) {
        setShowError(true);
        return;
      }
      window.open(consultUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="text-primary font-medium text-xs tracking-[0.3em] uppercase">Contato</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-normal text-foreground mt-4 mb-5 tracking-tight">
            Vamos criar algo <em className="text-primary not-italic">extraordinário</em>
          </h2>
          <p className="text-foreground/70 text-lg font-light leading-relaxed">
            Conte-nos sobre o ambiente dos seus sonhos. Sua mensagem chega direto ao nosso WhatsApp e nossa equipe transforma sua visão em projeto.
          </p>
        </Reveal>

        {/* Main content container */}
        <Reveal className="bg-background/95 rounded-xl border border-border/50 p-6 sm:p-8 md:p-12 lg:p-16 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.06)]">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Project brief → WhatsApp */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs tracking-[0.25em] uppercase text-foreground/70 font-medium">
                  Conte-nos sobre o seu projeto
                </span>
              </div>

              <div className="relative">
                <Textarea
                  value={draft}
                  maxLength={1000}
                  aria-label="Descreva o seu projeto"
                  aria-invalid={showError}
                  aria-describedby={showError ? "consulta-erro" : undefined}
                  onChange={(e) => {
                    setDraft(e.target.value);
                    if (showError) setShowError(false);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Descreva o ambiente dos seus sonhos: cômodo, medidas, estilo, o que não pode faltar..."
                  className="min-h-[220px] bg-popover rounded-xl border border-border/60 px-5 py-5 text-base font-light leading-relaxed placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-accent/20 focus-visible:border-accent resize-none transition-all duration-300"
                />

                {showError && (
                  <p id="consulta-erro" role="alert" className="mt-3 text-sm text-red-700">
                    Conte um pouco sobre o seu projeto antes de enviar.
                  </p>
                )}

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-6">
                  <p className="text-sm text-foreground/70 font-light">
                    Tem fotos de inspiração? Envie direto na conversa do WhatsApp.
                  </p>

                  <Button
                    asChild
                    size="lg"
                    className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-7 h-12 font-light tracking-wide group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--accent)/0.4)] w-full sm:w-auto"
                  >
                    <a href={consultUrl} target="_blank" rel="noopener noreferrer" onClick={handleSendClick}>
                      Enviar pelo WhatsApp
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* WhatsApp direct link */}
              <div className="mt-12 pt-8 border-t border-border/40">
                <a
                  href={BUSINESS.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2 hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-center gap-4">
                    <MessageCircle className="h-5 w-5 text-primary" strokeWidth={1.5} />
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
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-5">
                  <item.icon className="h-4 w-4 text-primary mt-1 shrink-0" strokeWidth={1.5} />
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
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
