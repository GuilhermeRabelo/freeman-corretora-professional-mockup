import { useLocation, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { WhatsappFab } from "./WhatsappFab";

export function SiteLayout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <motion.main
        key={pathname}
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Outlet />
      </motion.main>
      <SiteFooter />
      <WhatsappFab />
    </div>
  );
}
