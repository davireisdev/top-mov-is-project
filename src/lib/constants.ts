/** Número do WhatsApp: DDI + DDD + número, só dígitos. Único lugar a editar. */
const WHATSAPP_NUMBER = "5512997918829";

/** Link direto `wa.me` (gratuito, não expira), com mensagem pré-preenchida opcional. */
export const whatsappLink = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const BUSINESS = {
  name: "TOP Móveis Marcenaria",
  tagline: "Marcenaria de Alta Costura",
  phone: "(12) 99791-8829",
  phoneTel: "+5512997918829",
  email: "topmoveis.marcenaria11@gmail.com",
  address: {
    street: "Avenida Rio Branco, 1690",
    neighborhood: "Indaiá",
    city: "Caraguatatuba",
    state: "SP",
    zip: "11660-600",
    full: "Avenida Rio Branco, 1690\nIndaiá, Caraguatatuba — SP\n11660-600",
    display: "Av. Rio Branco, 1690 — Indaiá\nCaraguatatuba — SP · 11660-600",
  },
  hours: {
    weekdays: "Seg a Sex — 8h às 18h",
    saturday: "Sáb — 8h às 12h",
    display: "Seg a Sex — 8h às 18h\nSáb — 8h às 12h",
  },
  social: {
    whatsapp: whatsappLink("Olá! Vim pelo site da TOP Móveis e gostaria de fazer um orçamento."),
    instagram: "https://www.instagram.com/topmoveis.marcenaria/",
  },
} as const;
