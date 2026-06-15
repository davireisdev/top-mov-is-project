# TOP Móveis Marcenaria — Site Institucional

Site profissional da **TOP Móveis Marcenaria**, empresa com mais de 30 anos de experiência em móveis planejados sob medida em Caraguatatuba — SP.

> **Para o Davi:** Este README explica tudo o que foi feito no projeto, como ele funciona, e o que você precisa fazer para colocar o site no ar. Leia com calma — está tudo aqui.

---

## O que é este projeto?

Este é o site completo da TOP Móveis. Ele é uma **SPA (Single Page Application)** — tudo carrega uma única vez e a navegação entre as seções é suave, sem recarregar a página.

**O site tem:**

- Página inicial com foto de fundo profissional e chamada para orçamento
- Seção de Serviços (tipos de móveis)
- Como funciona o processo de atendimento
- Portfólio com fotos de projetos reais
- História e diferenciais da empresa
- Seção de Contato com link direto para o WhatsApp
- Carrossel de depoimentos de clientes
- **Chat flutuante com Inteligência Artificial** — um consultor virtual que responde dúvidas sobre MDF, cores e ferragens em tempo real

---

## O que foi feito (do início ao fim)

O projeto foi criado e evoluído em várias etapas. Aqui está um resumo de tudo que foi construído:

| Etapa           | O que foi feito                                                                 |
| --------------- | ------------------------------------------------------------------------------- |
| Base do projeto | Criação com Vite + React + TypeScript a partir de um template                   |
| Design          | Definição do tema visual (tons escuros com laranja) e layout das seções         |
| Portfólio       | Upload das fotos reais de projetos e criação dos cards visuais                  |
| Hero Section    | Foto de fundo profissional com sobreposição escura para legibilidade do texto   |
| WhatsApp        | Todos os botões de orçamento conectados ao WhatsApp da empresa                  |
| Chat com IA     | Consultor virtual integrado ao Supabase + Google Gemini (IA gratuita)           |
| Depoimentos     | Carrossel automático com avaliações de clientes                                 |
| Responsividade  | Site adaptado para celular, tablet e desktop                                    |
| Navegação       | Menu que destaca automaticamente o item conforme o usuário rola a página        |
| SEO             | Otimização para o Google: título, descrição, endereço e horários no Schema.org  |
| Contato         | Seção modernizada com endereço completo, telefone, e-mail e horários            |
| Organização     | Dados da empresa centralizados em um único arquivo (`src/lib/constants.ts`)     |
| Independência   | **Removidas todas as dependências do Lovable** — o projeto agora é 100% próprio |
| Deploy          | Configuração completa para subir na Vercel sem erros                            |

### Sobre a remoção do Lovable

O projeto foi originalmente criado usando a plataforma Lovable. Nesta etapa final, **todas as dependências foram removidas**:

- `lovable-tagger` removido do `package.json` e do `vite.config.ts`
- Gateway de IA da Lovable substituído pela **API oficial do Google Gemini** (gratuita)
- Pacotes `@ai-sdk/openai-compatible` e `ai` removidos (não eram usados)
- Headers CORS do chat reescritos sem importar do pacote da Lovable

O chat continua funcionando exatamente igual — só agora com a chave de IA própria da TOP Móveis.

---

## Estrutura de pastas

```
top-moveis-craft/
│
├── public/                  # Arquivos públicos (favicon, robots.txt)
│
├── src/
│   ├── assets/              # Imagens do site (hero, portfólio, processo)
│   ├── components/          # Componentes visuais do site
│   │   ├── ui/              # Botões, modais, carrossel (shadcn/ui)
│   │   ├── Header.tsx       # Menu de navegação fixo no topo
│   │   ├── HeroSection.tsx  # Seção principal com foto de fundo
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx       # Rodapé + carrossel de depoimentos
│   │   ├── FloatingChat.tsx # Chat flutuante com IA
│   │   ├── BackToTop.tsx    # Botão de voltar ao topo
│   │   └── Reveal.tsx       # Animação de entrada ao rolar a página
│   │
│   ├── lib/
│   │   ├── constants.ts     # ← DADOS DA EMPRESA (telefone, endereço, links)
│   │   ├── chatStore.ts     # Estado global do chat (sem biblioteca extra)
│   │   └── utils.ts
│   │
│   └── pages/
│       └── Index.tsx        # Página principal (junta todos os componentes)
│
├── supabase/
│   └── functions/
│       └── chat/
│           └── index.ts     # Servidor do chat com IA (roda no Supabase)
│
├── .env.example             # Modelo das variáveis de ambiente (sem senhas reais)
├── vercel.json              # Configuração para o deploy na Vercel
└── index.html               # Entrada do site (SEO, meta tags, Schema.org)
```

> **Dica:** Para atualizar telefone, endereço ou redes sociais, edite apenas `src/lib/constants.ts`. Esse arquivo alimenta o site inteiro automaticamente.

---

## Tecnologias utilizadas

| Tecnologia              | Para que serve                                          |
| ----------------------- | ------------------------------------------------------- |
| React 18 + TypeScript   | Base do site (interface visual com tipagem segura)      |
| Vite                    | Ferramenta que compila e otimiza o código para produção |
| Tailwind CSS            | Estilização visual (cores, tamanhos, espaçamentos)      |
| shadcn/ui               | Componentes prontos (botões, modais, carrossel)         |
| Supabase Edge Functions | Servidor do chat com IA (sem custo para baixo volume)   |
| Google Gemini API       | Modelo de IA que responde o chat (gratuito)             |
| React Router DOM        | Navegação entre páginas sem recarregar                  |
| Embla Carousel          | Carrossel de depoimentos com autoplay                   |

---

## Como rodar localmente (no seu computador)

### Pré-requisitos

- [Node.js](https://nodejs.org) versão 18 ou superior instalado
- Git instalado

### Passo a passo

```bash
# 1. Clone o repositório
git clone git@github.com:davireis03913-pixel/top-moveis-craft.git

# 2. Entre na pasta
cd top-moveis-craft

# 3. Instale as dependências
npm install

# 4. Copie o arquivo de variáveis de ambiente
cp .env.example .env
# Abra o arquivo .env e preencha com os valores reais do Supabase

# 5. Inicie o servidor local
npm run dev
# Acesse http://localhost:8080
```

---

## Como colocar o site no ar (deploy na Vercel)

### O que é a Vercel?

É onde o site fica hospedado na internet. É **gratuita** para projetos como este.

---

### PARTE 1 — Publicar o site na Vercel

**Passo 1 — Crie uma conta**
Acesse [vercel.com](https://vercel.com) e entre com sua conta do GitHub.

**Passo 2 — Importe o repositório**

- Clique em **"Add New Project"**
- Clique em **"Import Git Repository"**
- Selecione o repositório `top-moveis-craft`

**Passo 3 — Configure as variáveis de ambiente**
Antes de clicar em Deploy, role a página até **"Environment Variables"** e adicione as 3 variáveis abaixo:

| Nome                            | Onde encontrar                                                       |
| ------------------------------- | -------------------------------------------------------------------- |
| `VITE_SUPABASE_URL`             | Painel do Supabase → seu projeto → Settings → API → Project URL      |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Painel do Supabase → seu projeto → Settings → API → anon/public key  |
| `VITE_SUPABASE_PROJECT_ID`      | Painel do Supabase → seu projeto → Settings → General → Reference ID |

**Passo 4 — Deploy**
Clique em **"Deploy"**. A Vercel detecta o Vite automaticamente.

> O arquivo `vercel.json` já está configurado para que o site funcione corretamente (sem ele, ao recarregar qualquer página aparece erro 404).

---

### PARTE 2 — Ativar o chat com IA (Supabase + Google Gemini)

O chat com IA precisa de dois passos extras: uma chave do Google e publicar a função no Supabase.

#### 2.1 — Obter a chave do Google Gemini (gratuita)

1. Acesse [aistudio.google.com](https://aistudio.google.com)
2. Faça login com uma conta Google
3. Clique em **"Get API Key"** → **"Create API key"**
4. Copie a chave gerada (começa com `AIza...`)

#### 2.2 — Publicar a Edge Function no Supabase

Abra o terminal na pasta do projeto e rode os comandos abaixo:

```bash
# Instale o CLI do Supabase (só precisa fazer uma vez)
npm install -g supabase

# Faça login na sua conta Supabase
supabase login

# Conecte ao projeto (substitua pelo seu Project ID)
supabase link --project-ref SEU_PROJECT_ID

# Configure a chave do Gemini como secret seguro
supabase secrets set GEMINI_API_KEY=sua_chave_aqui

# Publique a função do chat
supabase functions deploy chat
```

Pronto — o chat estará funcionando no site publicado.

---

## Scripts disponíveis

| Comando           | O que faz                                      |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Inicia o servidor local de desenvolvimento     |
| `npm run build`   | Gera a versão otimizada na pasta `dist/`       |
| `npm run preview` | Visualiza o build localmente antes de publicar |
| `npm run lint`    | Verifica erros no código                       |
| `npm test`        | Roda os testes automáticos                     |

---

## Repositório no GitHub

[github.com/davireis03913-pixel/top-moveis-craft](https://github.com/davireis03913-pixel/top-moveis-craft)
