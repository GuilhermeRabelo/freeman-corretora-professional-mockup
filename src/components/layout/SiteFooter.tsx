import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import logoFullWhite from "@/assets/logo-full-white.png";

/** Sublinhado que desenha da esquerda no hover. */
const linkClass =
  "relative inline-block py-1.5 transition-colors hover:text-white after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white/60 after:transition-transform after:duration-300 hover:after:scale-x-100";

export function SiteFooter() {
  return (
    <footer className="mesh-navy grain relative overflow-hidden text-white">
      <div className="rule-glow absolute inset-x-0 top-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-16 md:pb-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <img
              src={logoFullWhite}
              alt="Freeman Corretora"
              className="h-12 w-auto"
              width={240}
              height={64}
              loading="lazy"
            />
            <p className="mt-6 max-w-xs font-sans text-sm leading-relaxed text-white/75">
              Protegendo a sua vida e o seu patrimônio desde 1989.
            </p>
          </div>

          <div>
            <h2 className="mb-5 font-sans text-xs font-bold uppercase tracking-widest">
              Navegação
            </h2>
            <ul className="space-y-1 font-sans text-sm text-white/75">
              <li>
                <Link to="/" className={linkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className={linkClass}>
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className={linkClass}>
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sinistros" className={linkClass}>
                  Sinistros
                </Link>
              </li>
              <li>
                <Link to="/contato" className={linkClass}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* No mobile vai para o fim: o e-mail não cabe em meia coluna */}
          <div className="order-last col-span-2 md:order-none md:col-span-1">
            <h2 className="mb-5 font-sans text-xs font-bold uppercase tracking-widest">Contato</h2>
            <ul className="space-y-1 font-sans text-sm text-white/75">
              <li>
                <a href="tel:+5513997281866" className={linkClass}>
                  (13) 99728-1866
                </a>
              </li>
              <li>
                <a href="mailto:contato@freemanseguros.com.br" className={linkClass}>
                  contato@freemanseguros.com.br
                </a>
              </li>
              <li className="py-1.5">Seg–Sex · 9h às 18h</li>
            </ul>
            <div className="mt-5 flex gap-4">
              <a
                href="https://www.instagram.com/freemanseguros"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Freeman Seguros"
                className="inline-flex h-11 w-11 items-center justify-center text-white/75 transition-colors duration-200 hover:text-white"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/company/freemanseguros"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Freeman Seguros"
                className="inline-flex h-11 w-11 items-center justify-center text-white/75 transition-colors duration-200 hover:text-white"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-5 font-sans text-xs font-bold uppercase tracking-widest">Endereço</h2>
            <p className="font-sans text-sm leading-relaxed text-white/75">
              Av. Senador Feijó, 686, Sala 1525
              <br />
              Vila Mathias, Santos – SP
            </p>
          </div>
        </div>

        <div className="relative mt-8 flex flex-col gap-2 pt-6 font-sans text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div className="rule-glow absolute inset-x-0 top-0" />
          <span>
            © {new Date().getFullYear()} Freeman Corretora de Seguros. Todos os direitos reservados.
          </span>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <Link to="/privacidade" className={linkClass}>
              Política de Privacidade
            </Link>
            <span>CNPJ 36.756.226/0001-64</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
