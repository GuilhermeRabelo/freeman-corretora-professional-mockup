import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { EASE_SPRING } from "@/lib/motion";

export function WhatsappFab() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 items-center rounded-full bg-whatsapp pl-[0.9375rem] pr-[0.9375rem] text-navy shadow-e3 ring-1 ring-black/5 transition-[padding,box-shadow] duration-200 hover:shadow-e4 md:hover:pr-6"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.6, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.38, delay: 0.65, ease: EASE_SPRING }}
    >
      <MessageCircle className="h-7 w-7 shrink-0" strokeWidth={2.25} />
      {/* Rótulo que abre no hover — só em telas com ponteiro */}
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap font-sans text-sm font-bold uppercase tracking-wider transition-[max-width,margin] duration-200 group-hover:ml-2.5 group-hover:max-w-[10rem] md:inline-block">
        Fale conosco
      </span>
    </motion.a>
  );
}
