import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import logoFullWhite from "@/assets/logo-full-white.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
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
            <ul className="space-y-3 font-sans text-sm text-white/75">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-white">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sinistros" className="hover:text-white">
                  Sinistros
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 font-sans text-xs font-bold uppercase tracking-widest">Contato</h2>
            <ul className="space-y-3 font-sans text-sm text-white/75">
              <li>(13) 99728-1866</li>
              <li>contato@freemanseguros.com.br</li>
              <li>Seg–Sex · 9h às 18h</li>
            </ul>
            <div className="mt-5 flex gap-4">
              <a
                href="https://www.instagram.com/freemanseguros"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Freeman Seguros"
                className="-m-2 p-2 text-white/75 hover:text-white"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/company/freemanseguros"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Freeman Seguros"
                className="-m-2 p-2 text-white/75 hover:text-white"
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

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 font-sans text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Freeman Corretora de Seguros. Todos os direitos reservados.
          </span>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <Link to="/privacidade" className="hover:text-white">
              Política de Privacidade
            </Link>
            <span>SUSEP nº 00000000 · CNPJ 36.756.226/0001-64</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
