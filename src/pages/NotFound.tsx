import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <title>Página não encontrada — Freeman Corretora</title>
      <meta name="description" content="A página que você procura não existe ou foi movida." />
      <meta name="robots" content="noindex" />
      <div className="max-w-md text-center">
        <h1 className="text-7xl">404</h1>
        <h2 className="mt-4 font-sans text-xl font-semibold text-navy">Página não encontrada</h2>
        <p className="mt-2 font-sans text-sm text-graphite">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-[4px] bg-navy px-5 py-3 font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-navy-medium"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
