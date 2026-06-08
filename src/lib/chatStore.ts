import { useSyncExternalStore } from "react";

export type ChatMsg = { role: "user" | "assistant"; content: string };

type State = {
  open: boolean;
  loading: boolean;
  messages: ChatMsg[];
  pendingSend: string | null;
  consultDraft: string;
};

let state: State = {
  open: false,
  loading: false,
  messages: [
    {
      role: "assistant",
      content:
        "Olá! Sou o Consultor Virtual da TOP Móveis. Estou aqui para te ajudar com MDF, cores, ferragens e projetos 3D. O que você está pensando em planejar hoje? (Ex: Cozinha, Quarto, Banheiro...)",
    },
  ],
  pendingSend: null,
  consultDraft: "",
};

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export const chatStore = {
  get: () => state,
  subscribe: (l: () => void) => {
    listeners.add(l);
    return () => listeners.delete(l);
  },
  set: (patch: Partial<State>) => {
    state = { ...state, ...patch };
    emit();
  },
  setMessages: (updater: (prev: ChatMsg[]) => ChatMsg[]) => {
    state = { ...state, messages: updater(state.messages) };
    emit();
  },
  openChat: () => {
    if (!state.open) {
      state = { ...state, open: true };
      emit();
    }
  },
  closeChat: () => {
    state = { ...state, open: false };
    emit();
  },
  toggle: () => {
    state = { ...state, open: !state.open };
    emit();
  },
  /** Opens floating chat and queues a message to send. */
  openWithMessage: (text: string) => {
    const trimmed = text.trim();
    state = { ...state, open: true, pendingSend: trimmed || null };
    emit();
  },
  consumePending: () => {
    const p = state.pendingSend;
    if (p !== null) {
      state = { ...state, pendingSend: null };
      emit();
    }
    return p;
  },
  setConsultDraft: (text: string) => {
    state = { ...state, consultDraft: text };
    emit();
  },
};

export function useChatStore() {
  return useSyncExternalStore(chatStore.subscribe, chatStore.get, chatStore.get);
}