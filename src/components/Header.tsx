import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  // Scrollspy — track which section is in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      setActiveId(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isMenuOpen
          ? "bg-foreground/95 backdrop-blur-md border-b border-primary-foreground/10 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}>
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-lg">T</span>
            </div>
            <div>
              <span className="text-primary-foreground font-display font-bold text-lg block leading-none">TOP Móveis</span>
              <span className="text-primary-foreground/50 text-xs tracking-widest uppercase">Marcenaria</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-medium tracking-wide transition-all duration-300 pb-1 ${
                    isActive
                      ? "text-accent opacity-100"
                      : "text-primary-foreground opacity-75 hover:opacity-100 hover:text-accent"
                  }`}
                >
                  {link.label}
                  <span
                    className={`pointer-events-none absolute left-0 right-0 -bottom-0.5 h-px bg-accent transition-all duration-300 ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6">
              <a href={BUSINESS.social.whatsapp} target="_blank" rel="noopener noreferrer">Orçamento Grátis</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-primary-foreground/10 pt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative font-medium transition-all duration-300 pb-1 inline-block w-fit ${
                      isActive
                        ? "text-accent opacity-100"
                        : "text-primary-foreground opacity-75 hover:opacity-100 hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 right-0 -bottom-0.5 h-px bg-accent transition-all duration-300 ${
                        isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                      }`}
                    />
                  </a>
                );
              })}
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full mt-2 w-full">
                <a href={BUSINESS.social.whatsapp} target="_blank" rel="noopener noreferrer">Orçamento Grátis</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
