import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import logoFullNavy from "@/assets/logo-full-navy.png";
import { EASE_OUT_QUINT } from "@/lib/motion";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/sobre", label: "Sobre", end: false },
  { to: "/servicos", label: "Serviços", end: false },
  { to: "/sinistros", label: "Sinistros", end: false },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // Esc fecha o menu mobile — exigência de escape-route do checklist de a11y.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-40 w-full transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "bg-background/80 shadow-e1 backdrop-blur-xl"
          : "border-b border-divider bg-background",
      ].join(" ")}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center" aria-label="Freeman Corretora — Início">
          <img
            src={logoFullNavy}
            alt="Freeman Corretora"
            className="h-12 w-auto"
            width={240}
            height={64}
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className="relative py-1">
              {({ isActive }) => (
                <>
                  <span
                    className={[
                      "font-sans text-sm font-semibold uppercase tracking-wider transition-colors",
                      isActive ? "text-navy" : "text-graphite hover:text-navy",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                  {isActive &&
                    (reduceMotion ? (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-navy" />
                    ) : (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-navy"
                        transition={{ duration: 0.28, ease: EASE_OUT_QUINT }}
                      />
                    ))}
                </>
              )}
            </NavLink>
          ))}
          <Link
            to="/contato"
            className="sheen rounded-[4px] bg-navy px-5 py-3 font-sans text-sm font-bold uppercase tracking-wider text-white shadow-e1 transition-all duration-200 hover:-translate-y-px hover:bg-navy-medium hover:shadow-e2"
          >
            Solicitar Cotação
          </Link>
        </nav>

        <button
          type="button"
          className="-m-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6 text-navy" /> : <Menu className="h-6 w-6 text-navy" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-nav"
            className="border-t border-divider bg-background md:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE_OUT_QUINT }}
          >
            <div className="flex flex-col px-6 py-4">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "block border-b border-divider py-3 font-sans text-sm font-semibold uppercase tracking-wider text-graphite",
                      isActive && "text-navy",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="sheen mt-4 rounded-[4px] bg-navy px-5 py-3 text-center font-sans text-sm font-bold uppercase tracking-wider text-white"
              >
                Solicitar Cotação
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
