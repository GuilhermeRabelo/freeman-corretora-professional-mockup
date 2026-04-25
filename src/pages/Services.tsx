import { useEffect } from "react";
import { Link } from "react-router-dom";
import shieldWhite from "@/assets/logo-shield-white.png";
import { ArrowUpRight, Search, ClipboardList, PenLine, LifeBuoy } from "lucide-react";

const SERVICES = [
  {
    title: "Riscos de Engenharia",
    desc: "Cobertura para obras civis, montagens industriais e instalações em construção, com análise técnica do projeto.",
    tags: ["Obras civis", "Montagem", "Performance"],
  },
  {
    title: "D&O — Responsabilidade de Administradores",
    desc: "Proteção patrimonial pessoal de executivos, conselheiros e administradores frente a decisões de gestão.",
    tags: ["Executivos", "Conselho", "Patrimônio pessoal"],
  },
  {
    title: "Patrimonial Empresarial",
    desc: "Proteção integral de imóveis, equipamentos e estoques contra incêndio, roubo, danos elétricos e mais.",
    tags: ["Incêndio", "Equipamentos", "Lucros cessantes"],
  },
  {
    title: "Frota & Auto Empresarial",
    desc: "Apólices únicas para frotas leves e pesadas, com franquia inteligente e gestão centralizada de sinistros.",
    tags: ["Frota leve", "Pesados", "Franquia inteligente"],
  },
  {
    title: "Vida em Grupo",
    desc: "Benefícios para colaboradores com coberturas customizadas, capital segurado e adesão simplificada.",
    tags: ["Capital flexível", "Adesão digital", "Assistências"],
  },
  {
    title: "Responsabilidade Civil",
    desc: "RC Geral, Profissional e Operações, protegendo sua empresa de danos causados a terceiros.",
    tags: ["RC Geral", "Profissional", "Operações"],
  },
  {
    title: "Garantia",
    desc: "Seguro Garantia para licitações, contratos públicos e privados, judicial e aduaneiro.",
    tags: ["Licitações", "Judicial", "Aduaneiro"],
  },
  {
    title: "Transportes",
    desc: "Cobertura nacional e internacional para cargas, RCTR-C e RCF-DC, com atendimento 24h.",
    tags: ["Nacional", "Internacional", "RCTR-C"],
  },
];

const PROCESS = [
  { icon: Search, title: "Diagnóstico", desc: "Mapeamos riscos e necessidades específicas da sua operação." },
  { icon: ClipboardList, title: "Cotação", desc: "Concorrência entre as principais seguradoras do mercado." },
  { icon: PenLine, title: "Contratação", desc: "Apólice estruturada com cláusulas adequadas à sua realidade." },
  { icon: LifeBuoy, title: "Sinistro", desc: "Acompanhamento dedicado da abertura à indenização." },
];

export default function ServicosPage() {
  useEffect(() => {
    document.title = "Serviços — Seguros Corporativos | Freeman Corretora";
  }, []);

  return (
    <>
      {/* INTERNAL HERO */}
      <section className="relative overflow-hidden bg-navy-medium py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
            O que fazemos
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl">Nossas Especialidades</h1>
          <p className="mt-5 font-sans text-lg text-white/80">
            Apólices desenhadas para a complexidade real do seu negócio.
          </p>
        </div>
        <img
          src={shieldWhite}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 bottom-0 h-[260px] w-[260px] opacity-[0.05]"
          loading="lazy"
        />
      </section>

      {/* SERVICES — EDITORIAL LIST */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 flex flex-col gap-6 border-b border-divider pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-navy-medium">
                Linhas de negócio
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl">Oito frentes. Uma corretora.</h2>
            </div>
            <p className="max-w-md font-sans text-sm leading-relaxed text-graphite">
              Cada apólice é estruturada com cláusulas adequadas à realidade da operação — sem pacote
              pronto, sem letra miúda.
            </p>
          </div>

          <ol>
            {SERVICES.map(({ title, desc, tags }, i) => (
              <li key={title} className="group border-b border-divider last:border-b-0">
                <Link
                  to="/contato"
                  className="grid grid-cols-[auto_1fr_auto] items-start gap-x-6 gap-y-3 py-8 transition-colors hover:bg-surface-soft md:grid-cols-[3.5rem_1fr_14rem_auto] md:gap-x-10 md:py-10"
                >
                  <span
                    aria-hidden="true"
                    className="self-start font-display text-3xl leading-none text-divider transition-colors group-hover:text-navy md:text-4xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-2xl leading-tight transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-graphite">
                      {desc}
                    </p>
                  </div>

                  <ul className="col-span-2 col-start-2 flex flex-wrap gap-1.5 md:col-span-1 md:col-start-3 md:flex-col md:items-start md:gap-1.5 md:self-start md:pt-2">
                    {tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-[4px] border border-divider px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-navy-medium md:rounded-none md:border-0 md:px-0 md:py-0 md:before:mr-2 md:before:inline-block md:before:h-px md:before:w-3 md:before:translate-y-[-3px] md:before:bg-navy-medium md:before:align-middle"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <span
                    aria-hidden="true"
                    className="col-start-3 row-start-1 self-start text-navy md:col-start-4"
                  >
                    <ArrowUpRight
                      className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface-soft py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-navy-medium">
              Metodologia
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl">Como trabalhamos</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {PROCESS.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center border border-divider bg-background">
                  <Icon className="h-7 w-7 text-navy" strokeWidth={1.5} />
                </div>
                <div className="mt-4 font-sans text-xs font-bold uppercase tracking-widest text-navy-medium">
                  Etapa {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-xl">{title}</h3>
                <p className="mt-2 font-sans text-sm text-graphite">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-medium py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl">Não encontrou o que procura?</h2>
            <p className="mt-3 font-sans text-base text-white/80">
              Nossa equipe desenha apólices sob medida para operações complexas.
            </p>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center rounded-[4px] bg-white px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy-medium transition-colors hover:bg-white/90"
          >
            Falar com Especialista
          </Link>
        </div>
      </section>
    </>
  );
}
