# TOP Móveis Marcenaria — Site Institucional

Site profissional da **TOP Móveis Marcenaria**, empresa com mais de 30 anos de experiência em móveis planejados sob medida em Caraguatatuba — SP.

---

## O que é este projeto?

Landing page completa e responsiva construída com React + TypeScript. Funciona como uma **SPA (Single Page Application)** — tudo carrega uma vez e a navegação entre seções é suave, sem recarregar a página.

**Seções:**
- Hero com foto de fundo profissional e chamada para orçamento
- Serviços — tipos de móveis oferecidos
- Processo — como funciona o atendimento
- Portfólio — fotos reais de projetos
- Sobre — história e diferenciais da empresa
- Contato — endereço, telefone e link direto para o WhatsApp
- Depoimentos — carrossel automático de avaliações
- **Chat flutuante com IA** — consultor virtual que responde sobre MDF, cores e ferragens em tempo real

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| React 18 + TypeScript | Base do site |
| Vite | Build e desenvolvimento |
| Tailwind CSS + shadcn/ui | Estilização e componentes |
| Supabase Edge Functions | Servidor do chat com IA |
| Google Gemini 2.0 Flash | Modelo de IA (gratuito) |
| Embla Carousel | Carrossel de depoimentos |
| React Router DOM | Navegação SPA |

---

## Estrutura de pastas

```
top-moveis-craft/
│
├── src/
│   ├── assets/              # Imagens (hero, portfólio, processo)
│   ├── components/
│   │   ├── ui/              # Componentes shadcn/ui
│   │   ├── Header.tsx       # Navegação fixa com scrollspy
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx       # Rodapé + depoimentos
│   │   ├── FloatingChat.tsx # Chat flutuante com IA
│   │   ├── BackToTop.tsx
│   │   └── Reveal.tsx       # Animação de entrada ao rolar
│   ├── lib/
│   │   ├── constants.ts     # ← DADOS DA EMPRESA (edite aqui)
│   │   ├── chatStore.ts     # Estado global do chat
│   │   └── utils.ts
│   └── pages/
│       └── Index.tsx        # Página principal
│
├── supabase/
│   └── functions/chat/
│       └── index.ts         # Edge Function do chat (já deployada)
│
├── .env.example             # Modelo das variáveis de ambiente
├── vercel.json              # Configuração de SPA routing na Vercel
└── index.html               # Meta tags, SEO, Schema.org
```

> Para atualizar telefone, endereço ou redes sociais edite apenas `src/lib/constants.ts` — ele alimenta o site inteiro.

---

## Infraestrutura já configurada

| Serviço | Status | Detalhes |
|---|---|---|
| Supabase | ✅ Ativo | Projeto `top-moveis` — ID `jhsdamfzwjdcifxvzuho` |
| Edge Function `chat` | ✅ Deployada | `https://jhsdamfzwjdcifxvzuho.supabase.co/functions/v1/chat` |
| `GEMINI_API_KEY` | ✅ Configurada | Secret definido no painel do Supabase |
| Verify JWT | ✅ Desligado | Necessário para o chat funcionar sem autenticação |

---

## Variáveis de ambiente

Crie um arquivo `.env` na raiz (use `.env.example` como base):

```env
VITE_SUPABASE_URL=https://jhsdamfzwjdcifxvzuho.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sua_anon_key_aqui
VITE_SUPABASE_PROJECT_ID=jhsdamfzwjdcifxvzuho
```

> A anon key está disponível em: Supabase → seu projeto → Settings → API → `anon / public`.

---

## Como rodar localmente

```bash
# 1. Clone o repositório
git clone git@github.com:davireis03913-pixel/top-moveis-craft.git
cd top-moveis-craft

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Preencha o .env com os valores reais

# 4. Inicie o servidor local
npm run dev
# Acesse http://localhost:8080
```

---

## Deploy na Vercel

O único passo pendente para o site ir ao ar.

**1 —** Acesse [vercel.com](https://vercel.com) e entre com a conta do GitHub

**2 —** Clique em **"Add New Project"** → **"Import Git Repository"** → selecione `top-moveis-craft`

**3 —** Em **"Environment Variables"** adicione:

| Variável | Valor |
|---|---|
| `VITE_SUPABASE_URL` | `https://jhsdamfzwjdcifxvzuho.supabase.co` |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Anon key do Supabase (Settings → API) |
| `VITE_SUPABASE_PROJECT_ID` | `jhsdamfzwjdcifxvzuho` |

**4 —** Clique em **"Deploy"**

> O `vercel.json` já garante que todas as rotas da SPA funcionam corretamente — sem ele, qualquer refresh resultaria em erro 404.

---

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento em `localhost:8080` |
| `npm run build` | Build de produção na pasta `dist/` |
| `npm run preview` | Preview do build antes de publicar |
| `npm run lint` | Verificação de erros no código |
| `npm test` | Testes automáticos com Vitest |

---

## Repositório

[github.com/davireis03913-pixel/top-moveis-craft](https://github.com/davireis03913-pixel/top-moveis-craft)
