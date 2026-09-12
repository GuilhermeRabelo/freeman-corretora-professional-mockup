import { useLocation, Outlet } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_QUINT } from "@/lib/motion";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { WhatsappFab } from "./WhatsappFab";

export function SiteLayout() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[4px] focus:bg-navy focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <motion.main
        id="main-content"
        key={pathname}
        className="flex-1"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.22, ease: EASE_OUT_QUINT }}
      >
        <Outlet />
      </motion.main>
      <SiteFooter />
      <WhatsappFab />
    </div>
  );
}
