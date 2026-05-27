import { useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { chatStore, useChatStore, type ChatMsg } from "@/lib/chatStore";

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

// Defensive: strip basic markdown so chat always renders as clean plain text.
const stripMarkdown = (s: string) =>
  s
    .replace(/`{1,3}([^`]*)`{1,3}/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/_(.*?)_/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

const FloatingChat = () => {
  const { open, loading, messages } = useChatStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = async (textArg?: string) => {
    const text = (textArg ?? inputRef.current?.value ?? "").trim();
    if (!text || chatStore.get().loading) return;
    const userMsg: ChatMsg = { role: "user", content: text };
    const next = [...chatStore.get().messages, userMsg];
    chatStore.set({ messages: next, loading: true });
    if (inputRef.current) inputRef.current.value = "";

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: next }),
      });

      if (!resp.ok || !resp.body) {
        const err = await resp.json().catch(() => ({ error: "Erro ao conectar." }));
        chatStore.setMessages((prev) => [...prev, { role: "assistant", content: err.error || "Erro ao processar." }]);
        chatStore.set({ loading: false });
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let acc = "";
      let done = false;

      chatStore.setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (!done) {
        const { done: d, value } = await reader.read();
        if (d) break;
        buf += decoder.decode(value, { stream: true });
        let idx: number;
        while ((idx = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, idx);
          buf = buf.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") { done = true; break; }
          try {
            const p = JSON.parse(json);
            const delta = p.choices?.[0]?.delta?.content;
            if (delta) {
              acc += delta;
              chatStore.setMessages((prev) => {
                const copy = [...prev];
                copy[copy.length - 1] = { role: "assistant", content: acc };
                return copy;
              });
            }
          } catch {
            buf = line + "\n" + buf;
            break;
          }
        }
      }
    } catch (e) {
      chatStore.setMessages((prev) => [...prev, { role: "assistant", content: "Erro de conexão. Tente novamente." }]);
    } finally {
      chatStore.set({ loading: false });
    }
  };

  // Process pending messages queued from other components (e.g. ContactSection).
  useEffect(() => {
    const pending = chatStore.get().pendingSend;
    if (pending && !loading) {
      chatStore.consumePending();
      void send(pending);
    }
  }, [open, loading, messages]);

  return (
    <>
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => chatStore.toggle()}
        aria-label="Abrir chat com consultor"
        className={`fixed bottom-6 right-20 z-40 h-14 px-5 rounded-full bg-zinc-900 border border-accent/60 text-white shadow-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)] ${
          open ? "opacity-0 pointer-events-none translate-y-2" : "opacity-100"
        }`}
      >
        <MessageCircle className="h-5 w-5 text-accent" strokeWidth={1.75} />
        <span className="text-sm font-light tracking-wide hidden sm:inline">
          Fale com o Consultor: <span className="text-accent">MDF, Cores e Ferragens</span>
        </span>
        <span className="text-sm font-light sm:hidden">Consultor</span>
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-6 right-6 z-40 w-[calc(100vw-3rem)] sm:w-[380px] h-[520px] max-h-[80vh] rounded-2xl bg-zinc-900 border border-accent/40 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-zinc-950/50">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <div>
              <p className="text-white text-sm font-medium leading-tight">Consultor TOP Móveis</p>
              <p className="text-white/50 text-[10px] tracking-wider uppercase">MDF · Cores · Ferragens</p>
            </div>
          </div>
          <button onClick={() => chatStore.closeChat()} aria-label="Fechar" className="text-white/60 hover:text-white transition">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === "user"
                    ? "bg-accent text-accent-foreground"
                    : "bg-white/5 text-white/90 border border-white/5"
                }`}
              >
                {m.role === "assistant" ? stripMarkdown(m.content) : m.content}
                {!m.content && loading && i === messages.length - 1 ? "…" : ""}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => { e.preventDefault(); void send(); }}
          className="border-t border-white/10 p-3 flex items-center gap-2 bg-zinc-950/50"
        >
          <input
            ref={inputRef}
            placeholder="Pergunte sobre MDF, ferragens..."
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent/60"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="h-9 w-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center disabled:opacity-50 hover:scale-105 transition"
            aria-label="Enviar"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </>
  );
};

export default FloatingChat;