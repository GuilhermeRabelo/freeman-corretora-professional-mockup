import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoFullNavy from "@/assets/logo-full-navy.png";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/sobre", label: "Sobre", end: false },
  { to: "/servicos", label: "Serviços", end: false },
  { to: "/contato", label: "Contato", end: false },
] as const;

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "font-sans text-sm font-semibold uppercase tracking-wider text-graphite transition-colors hover:text-navy",
    isActive && "text-navy underline underline-offset-8 decoration-2",
  ]
    .filter(Boolean)
    .join(" ");

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-divider bg-background">
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
            <NavLink key={item.to} to={item.to} end={item.end} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contato"
            className="rounded-[4px] bg-navy px-5 py-3 font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-navy-medium"
          >
            Solicitar Cotação
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6 text-navy" /> : <Menu className="h-6 w-6 text-navy" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-divider bg-background md:hidden">
          <div className="flex flex-col px-6 py-4">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "border-b border-divider py-3 font-sans text-sm font-semibold uppercase tracking-wider text-graphite",
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
              className="mt-4 rounded-[4px] bg-navy px-5 py-3 text-center font-sans text-sm font-bold uppercase tracking-wider text-white"
            >
              Solicitar Cotação
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
