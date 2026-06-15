import { Star, Quote, MessageCircle } from "lucide-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Reveal from "@/components/Reveal";
import { BUSINESS } from "@/lib/constants";

const testimonials = [
  {
    name: "Maria Helena S.",
    role: "Cozinha Planejada",
    highlight: "Simplesmente perfeito!",
    body: "A equipe da TOP Móveis entendeu exatamente o que eu queria. Minha cozinha ficou muito além das expectativas.",
  },
  {
    name: "Carlos Eduardo M.",
    role: "Home Office Completo",
    highlight: "Profissionalismo do início ao fim.",
    body: "O projeto 3D me deu total segurança antes de aprovar. O resultado final ficou impecável e funcional.",
  },
  {
    name: "Ana Paula R.",
    role: "Apartamento Completo",
    highlight: "Qualidade excepcional.",
    body: "Fizemos todos os móveis com a TOP Móveis. Pontualidade na entrega e atendimento extraordinário.",
  },
];

const navLinks = [
  { label: "Home", href: "#inicio" },
  { label: "Projetos", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
  { label: "Orçamento", href: "#contato" },
];

const Footer = () => {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <footer
      id="depoimentos"
      className="relative bg-zinc-900 text-white overflow-hidden"
    >
      {/* Subtle dark wood radial wash — extremely faint, no grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, hsl(0 0% 100% / 0.04), transparent 60%)",
        }}
      />

      <div className="relative container mx-auto px-6 pt-24 pb-10">
        {/* TESTIMONIALS */}
        <Reveal className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-accent font-medium text-xs tracking-[0.3em] uppercase">Depoimentos</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-white mt-4 mb-5 tracking-tight">
            O que nossos clientes dizem
          </h2>
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm text-white/70 font-light">Avaliado com 5 estrelas</span>
          </div>
        </Reveal>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="w-full max-w-5xl mx-auto mb-20"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm p-6 hover:bg-white/[0.06] hover:border-accent/30 transition-all duration-500">
                  <Quote className="h-8 w-8 text-accent/40 mb-4" />
                  <p className="text-white font-medium mb-3 leading-relaxed">"{t.highlight}"</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{t.body}</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-white/40 text-xs tracking-wide">{t.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* LOGO + MINI NAV */}
        <div className="text-center mb-14">
          <div className="inline-flex flex-col items-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-11 h-11 rounded-lg border border-white/20 bg-gradient-to-br from-white/10 to-white/0 flex items-center justify-center">
                <span className="font-display font-bold text-xl bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">T</span>
              </div>
              <div className="text-left">
                <span className="font-display text-2xl font-normal block leading-none bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  TOP Móveis
                </span>
                <span className="text-white/40 text-[10px] tracking-[0.35em] uppercase">Marcenaria</span>
              </div>
            </div>
          </div>

          <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm">
            {navLinks.map((link, i) => (
              <div key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  className="px-3 py-1 text-white/70 hover:text-accent transition-colors font-light tracking-wide"
                >
                  {link.label}
                </a>
                {i < navLinks.length - 1 && <span className="text-white/20">|</span>}
              </div>
            ))}
          </nav>
        </div>

        {/* SOCIAL + DIVIDER */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 order-2 sm:order-1">
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent/60 transition-all duration-300 hover:scale-110"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={BUSINESS.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent/60 transition-all duration-300 hover:scale-110"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
          <p className="text-white/40 text-xs tracking-wide font-light order-1 sm:order-2 text-center">
            © {new Date().getFullYear()} {BUSINESS.name}. Todos os direitos reservados. <span className="text-white/60">{BUSINESS.tagline}.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
