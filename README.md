# TOP Móveis Marcenaria — Site Institucional

Site institucional da **TOP Móveis Marcenaria**, empresa com mais de 30 anos de experiência em móveis planejados sob medida em Caraguatatuba — SP.

## Tecnologias

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** + **shadcn/ui** (componentes)
- **Supabase** (Edge Function para o chat com IA)
- **Embla Carousel** (carrossel de depoimentos)
- **React Router DOM** (roteamento SPA)

## Funcionalidades

- Landing page completa com Hero, Serviços, Processo, Portfólio, Sobre e Contato
- **Consultor Virtual com IA** — chat flutuante integrado ao Supabase Edge Functions + modelo Gemini
- **Scrollspy** no header — destaca o link do menu conforme a seção visível
- SEO otimizado: meta tags, Open Graph, Twitter Card e Schema.org (LocalBusiness)
- Design responsivo (mobile-first)
- Animações de entrada com IntersectionObserver (`Reveal`)
- Botão "Voltar ao topo"

## Estrutura do projeto

```
src/
├── assets/          # Imagens (hero, portfólio, processo)
├── components/      # Componentes da página e UI
│   ├── ui/          # Componentes shadcn/ui
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── ProcessSection.tsx
│   ├── PortfolioSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx   # Inclui seção de depoimentos
│   ├── FloatingChat.tsx
│   ├── BackToTop.tsx
│   └── Reveal.tsx
├── lib/
│   ├── constants.ts # Dados do negócio (telefone, endereço, redes sociais)
│   ├── chatStore.ts # Estado global do chat (useSyncExternalStore)
│   └── utils.ts
└── pages/
    └── Index.tsx

supabase/
└── functions/
    └── chat/
        └── index.ts  # Edge Function: consultor IA (streaming SSE)
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz (use `.env.example` como base):

```env
VITE_SUPABASE_URL=https://SEU_PROJECT_ID.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sua_anon_key_aqui
VITE_SUPABASE_PROJECT_ID=seu_project_id_aqui
```

> As variáveis `VITE_*` são expostas ao navegador pelo Vite. Nunca coloque chaves secretas aqui.

A Edge Function `chat` também precisa de um secret configurado no painel do Supabase:

| Secret | Descrição |
|---|---|
| `LOVABLE_API_KEY` | Chave da API Lovable AI (gateway de IA) |

## Deploy na Vercel

### Pré-requisitos
1. Conta na [Vercel](https://vercel.com)
2. Projeto Supabase configurado com a Edge Function `chat` deployada

### Passo a passo

1. **Importe o repositório** no painel da Vercel (New Project → Import Git Repository)

2. **Configure as variáveis de ambiente** em *Settings → Environment Variables*:

   | Variável | Valor |
   |---|---|
   | `VITE_SUPABASE_URL` | `https://SEU_PROJECT_ID.supabase.co` |
   | `VITE_SUPABASE_PUBLISHABLE_KEY` | Anon key do Supabase |
   | `VITE_SUPABASE_PROJECT_ID` | ID do projeto Supabase |

3. **Configurações de build** (Vercel detecta automaticamente pelo `vite.config.ts`):
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`

4. Clique em **Deploy** — o arquivo `vercel.json` já garante o roteamento correto da SPA.

### Deploy da Edge Function (Supabase)

```bash
supabase login
supabase link --project-ref SEU_PROJECT_ID
supabase secrets set LOVABLE_API_KEY=sua_chave_aqui
supabase functions deploy chat
```

## Desenvolvimento local

```bash
# Instalar dependências
npm install

# Copiar variáveis de ambiente
cp .env.example .env
# Edite .env com os valores reais

# Iniciar servidor de desenvolvimento
npm run dev
# Acesse http://localhost:8080
```

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run preview` | Preview do build local |
| `npm run lint` | Lint do código |
| `npm test` | Testes unitários (Vitest) |
