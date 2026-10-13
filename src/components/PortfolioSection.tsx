import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import Reveal from "@/components/Reveal";
import { BUSINESS } from "@/lib/constants";
import portfolioSala from "@/assets/portfolio-sala.jpeg";
import portfolioDormitorio from "@/assets/portfolio-dormitorio.jpeg";
import portfolioCozinha1 from "@/assets/portfolio-cozinha1.jpeg";
import portfolioCozinha2 from "@/assets/portfolio-cozinha2.jpeg";

const categories = ["Todos", "Cozinhas", "Dormitórios", "Salas", "Banheiros", "Escritórios"];

const projects = [
  { id: 1, title: "Cozinha Moderna Integrada", category: "Cozinhas", image: portfolioCozinha1 },
  { id: 2, title: "Suíte Master Contemporânea", category: "Dormitórios", image: portfolioDormitorio },
  { id: 3, title: "Painel de TV com LED", category: "Salas", image: portfolioSala },
  { id: 4, title: "Cozinha Gourmet Premium", category: "Cozinhas", image: portfolioCozinha2 },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const current = openIndex !== null ? filteredProjects[openIndex] : null;

  const showPrev = () =>
    setOpenIndex((i) => (i === null ? i : (i - 1 + filteredProjects.length) % filteredProjects.length));
  const showNext = () =>
    setOpenIndex((i) => (i === null ? i : (i + 1) % filteredProjects.length));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      showPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      showNext();
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Portfólio</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Projetos que inspiram
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça alguns dos mais de mil projetos que realizamos ao longo de nossa trajetória.
          </p>
        </Reveal>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              aria-pressed={activeCategory === cat}
              className={`rounded-full ${activeCategory === cat ? "bg-primary text-primary-foreground" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          /* Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <Reveal
                key={project.id}
                delay={i * 80}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`Ampliar foto: ${project.title}`}
                  aria-haspopup="dialog"
                  className="absolute inset-0 block h-full w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                >
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/60 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                    <ZoomIn className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 block p-6">
                    <span className="block text-xs font-medium uppercase tracking-wider text-accent">{project.category}</span>
                    <span className="mt-1 block font-display text-xl font-semibold text-primary-foreground">{project.title}</span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        ) : (
          /* Categoria sem fotos: leva o visitante ao Instagram */
          <Reveal className="rounded-2xl bg-foreground px-6 py-12 text-center text-primary-foreground md:px-12 md:py-16">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10 text-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-balance md:text-3xl">
              Veja nossos projetos de {activeCategory.toLowerCase()} no Instagram
            </h3>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-primary-foreground/70">
              Esta galeria ainda está sendo montada. Veja os trabalhos mais recentes direto no nosso perfil.
            </p>
            <Button
              asChild
              size="lg"
              className="group mt-8 h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90 focus-visible:ring-accent focus-visible:ring-offset-foreground"
            >
              <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer">
                Ver no Instagram
                <ArrowRight className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
              </a>
            </Button>
          </Reveal>
        )}
      </div>

      {/* Foto ampliada */}
      <Dialog open={current !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent
          onKeyDown={handleKeyDown}
          className="w-[calc(100vw-1.5rem)] max-w-4xl gap-0 overflow-hidden border-0 bg-foreground p-0 text-primary-foreground sm:rounded-2xl [&>button]:right-3 [&>button]:top-3 [&>button]:z-10 [&>button]:rounded-full [&>button]:bg-foreground/70 [&>button]:p-2 [&>button]:opacity-100 [&>button:focus]:ring-accent [&>button:focus]:ring-offset-foreground [&>button>svg]:h-5 [&>button>svg]:w-5"
        >
          {current && (
            <>
              <div className="relative flex items-center justify-center bg-black/40">
                <img
                  src={current.image}
                  alt={current.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
                {filteredProjects.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label="Foto anterior"
                      className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/70 text-primary-foreground transition-colors hover:bg-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <ChevronLeft className="h-5 w-5" aria-hidden />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Próxima foto"
                      className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/70 text-primary-foreground transition-colors hover:bg-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <ChevronRight className="h-5 w-5" aria-hidden />
                    </button>
                  </>
                )}
              </div>
              <div className="flex items-center justify-between gap-4 px-6 py-4">
                <div>
                  <DialogTitle className="font-display text-xl font-semibold leading-snug">{current.title}</DialogTitle>
                  <DialogDescription className="mt-1 text-sm text-primary-foreground/70">{current.category}</DialogDescription>
                </div>
                {filteredProjects.length > 1 && (
                  <span className="shrink-0 text-sm tabular-nums text-primary-foreground/70" aria-hidden>
                    {(openIndex ?? 0) + 1} / {filteredProjects.length}
                  </span>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
