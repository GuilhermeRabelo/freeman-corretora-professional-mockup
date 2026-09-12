import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";

export default function NotFound() {
  return (
    <div className="mesh-light relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4">
      <Seo
        title="Página não encontrada — Freeman Corretora"
        description="A página que você procura não existe ou foi movida."
        path={window.location.pathname}
        noindex
      />
      <span
        aria-hidden="true"
        className="text-shine pointer-events-none absolute select-none font-display text-[clamp(14rem,42vw,30rem)] leading-none opacity-[0.07]"
      >
        404
      </span>
      <div className="relative z-10 max-w-md text-center">
        <h1 className="text-display-2">404</h1>
        <h2 className="mt-4 font-sans text-xl font-semibold text-navy">Página não encontrada</h2>
        <p className="mt-2 font-sans text-sm text-graphite">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="sheen inline-flex items-center justify-center rounded-[4px] bg-navy px-6 py-3.5 font-sans text-sm font-bold uppercase tracking-wider text-white shadow-e2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-medium hover:shadow-e4"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
