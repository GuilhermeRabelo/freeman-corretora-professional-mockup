import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5513000000000?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o.";

export function WhatsappFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-navy shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.25} />
    </a>
  );
}
