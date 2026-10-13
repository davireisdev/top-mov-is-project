import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle, CircleAlert, type LucideIcon } from "lucide-react";
import { chatStore, useChatStore } from "@/lib/chatStore";
import { BUSINESS, whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

const MAX_LENGTH = 1000;

const rooms = ["Cozinha", "Dormitório", "Sala", "Banheiro", "Escritório", "Outro"];

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BUSINESS.address.street}, ${BUSINESS.address.neighborhood}, ${BUSINESS.address.city} - ${BUSINESS.address.state}`
)}`;

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

const contactItems: ContactItem[] = [
  { icon: MapPin, label: "Atelier", value: BUSINESS.address.display, href: mapsUrl, external: true },
  { icon: Phone, label: "Telefone", value: BUSINESS.phone, href: `tel:${BUSINESS.phoneTel}` },
  { icon: Mail, label: "E-mail", value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  { icon: Clock, label: "Horário", value: BUSINESS.hours.display },
];

// Régua de marceneiro: marcas finas a cada 8px, marca de destaque a cada 40px.
const rulerStyle: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, hsl(var(--primary) / 0.75) 1px, transparent 1px), linear-gradient(to right, hsl(var(--foreground) / 0.3) 1px, transparent 1px)",
  backgroundSize: "40px 14px, 8px 7px",
  backgroundRepeat: "repeat-x",
  backgroundPosition: "left bottom",
};

const ContactSection = () => {
  const { consultDraft: draft } = useChatStore();
  const setDraft = (text: string) => chatStore.setConsultDraft(text);
  const [room, setRoom] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  const message = draft.trim();
  // O que o cliente escreveu (e o ambiente escolhido) segue pronto na conversa do WhatsApp.
  const consultUrl = whatsappLink(
    message
      ? [
          "Olá! Vim pelo site da TOP Móveis e gostaria de um orçamento.",
          room ? `Ambiente: ${room}` : null,
          message,
        ]
          .filter(Boolean)
          .join("\n\n")
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

        {/* Um único painel: bancada (formulário) + atelier (contatos) */}
        <Reveal className="grid overflow-hidden rounded-2xl bg-background shadow-[0_32px_64px_-32px_hsl(var(--foreground)/0.45)] lg:grid-cols-12">
          {/* Bancada */}
          <div className="bg-foreground p-6 text-primary-foreground sm:p-10 lg:col-span-7 lg:p-12">
            <h3 className="font-display text-2xl font-semibold text-balance sm:text-3xl">Conte seu projeto</h3>
            <p className="mt-3 max-w-md leading-relaxed text-primary-foreground/70">
              Cômodo, medidas e estilo já ajudam muito. Sua mensagem segue pronta para o nosso WhatsApp.
            </p>

            <div role="group" aria-labelledby="ambiente-label" className="mt-8">
              <p id="ambiente-label" className="mb-3 text-sm text-primary-foreground/70">
                Qual ambiente?
              </p>
              <div className="flex flex-wrap gap-2">
                {rooms.map((r) => {
                  const active = room === r;
                  return (
                    <button
                      key={r}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setRoom(active ? null : r)}
                      className={cn(
                        "rounded-full border px-3.5 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground",
                        active
                          ? "border-primary-foreground bg-primary-foreground font-medium text-foreground"
                          : "border-primary-foreground/30 text-primary-foreground/80 hover:border-primary-foreground/70 hover:text-primary-foreground"
                      )}
                    >
                      {r}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Folha do pedido, com régua no topo */}
            <div
              className={cn(
                "mt-6 overflow-hidden rounded-xl bg-background transition-shadow",
                showError
                  ? "ring-2 ring-red-300 ring-offset-2 ring-offset-foreground"
                  : "focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-foreground"
              )}
            >
              <div aria-hidden className="h-4 border-b border-border bg-secondary" style={rulerStyle} />
              <div className="relative">
                <Textarea
                  value={draft}
                  maxLength={MAX_LENGTH}
                  aria-label="Descreva o seu projeto"
                  aria-invalid={showError}
                  aria-describedby={showError ? "consulta-erro" : undefined}
                  onChange={(e) => {
                    setDraft(e.target.value);
                    if (showError) setShowError(false);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Ex.: cozinha de 12m², estilo moderno, com ilha central e bastante gaveta..."
                  className="min-h-[200px] resize-none rounded-none border-0 bg-transparent px-5 pb-10 pt-4 text-base leading-relaxed text-foreground caret-primary selection:bg-primary/20 placeholder:text-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute bottom-3 right-4 text-xs tabular-nums",
                    draft.length >= MAX_LENGTH - 100 ? "font-medium text-foreground" : "text-foreground/70"
                  )}
                >
                  {draft.length}/{MAX_LENGTH}
                </span>
              </div>
            </div>

            {showError && (
              <p id="consulta-erro" role="alert" className="mt-3 flex items-center gap-2 text-sm text-red-300">
                <CircleAlert className="h-4 w-4 shrink-0" aria-hidden />
                Conte um pouco sobre o seu projeto antes de enviar.
              </p>
            )}

            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
                Tem fotos de inspiração? Envie direto na conversa do WhatsApp.
              </p>
              <Button
                asChild
                size="lg"
                className="group h-12 w-full rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90 hover:shadow-[0_12px_24px_-12px_hsl(var(--accent)/0.9)] focus-visible:ring-accent focus-visible:ring-offset-foreground sm:w-auto"
              >
                <a href={consultUrl} target="_blank" rel="noopener noreferrer" onClick={handleSendClick}>
                  Enviar pelo WhatsApp
                  <ArrowRight className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* Atelier */}
          <div className="bg-background p-6 sm:p-10 lg:col-span-5 lg:p-12">
            <h3 className="font-display text-2xl font-semibold text-foreground text-balance sm:text-3xl">
              Onde nos encontrar
            </h3>

            <dl className="mt-8 space-y-6">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden />
                  </span>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-widest text-foreground/70">{item.label}</dt>
                    <dd className="mt-1 whitespace-pre-line leading-relaxed text-foreground">
                      {item.href ? (
                        <a
                          href={item.href}
                          {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <a
              href={BUSINESS.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex items-center justify-between gap-4 rounded-xl border border-border px-5 py-4 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span className="flex items-center gap-4">
                <MessageCircle className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                <span>
                  <span className="block font-display text-lg text-foreground">Prefere conversar agora?</span>
                  <span className="block text-sm text-foreground/70">Atendimento direto pelo WhatsApp</span>
                </span>
              </span>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-foreground/70 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                aria-hidden
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
