import { Link } from "react-router-dom";
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
              Há 35 anos protegendo empresas com soluções de seguros corporativos sob medida em
              Santos e em todo o Brasil.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-xs font-bold uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-3 font-sans text-sm text-white/75">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-white">Sobre</Link></li>
              <li><Link to="/servicos" className="hover:text-white">Serviços</Link></li>
              <li><Link to="/contato" className="hover:text-white">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-xs font-bold uppercase tracking-widest">
              Contato
            </h4>
            <ul className="space-y-3 font-sans text-sm text-white/75">
              <li>+55 (13) 0000-0000</li>
              <li>contato@freemancorretora.com.br</li>
              <li>Seg–Sex · 9h às 18h</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-xs font-bold uppercase tracking-widest">
              Endereço
            </h4>
            <p className="font-sans text-sm leading-relaxed text-white/75">
              Av. Ana Costa, 000<br />
              Gonzaga · Santos/SP<br />
              CEP 11060-000
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="font-sans text-xs uppercase tracking-widest text-white/50">
            Parceiros: Porto Seguro · Allianz · Tokio Marine · Bradesco · SulAmérica · Mapfre
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 font-sans text-xs text-white/50 md:flex-row md:justify-between">
          <span>
            © {new Date().getFullYear()} Freeman Corretora de Seguros. Todos os direitos
            reservados.
          </span>
          <span>SUSEP nº 00000000 · CNPJ 00.000.000/0001-00</span>
        </div>
      </div>
    </footer>
  );
}
