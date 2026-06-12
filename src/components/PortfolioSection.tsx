import { useState } from "react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
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

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Portfólio</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Projetos que inspiram
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça alguns dos milhares de projetos que realizamos ao longo de nossa trajetória.
          </p>
        </Reveal>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              className={`rounded-full ${activeCategory === cat ? "bg-primary text-primary-foreground" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={i * 80}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs text-accent font-medium tracking-wider uppercase">{project.category}</span>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mt-1">{project.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
