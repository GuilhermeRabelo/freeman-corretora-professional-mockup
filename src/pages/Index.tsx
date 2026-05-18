import { Link } from "react-router-dom";
import {
  HardHat,
  Briefcase,
  FileCheck2,
  Building2,
  Truck,
  HeartPulse,
  ShieldCheck,
  Container,
  ArrowRight,
  ArrowUpRight,
  Search,
  ClipboardList,
  PenLine,
  LifeBuoy,
  Quote,
} from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import heroImg from "@/assets/hero-corporate.jpg";
import shieldWhite from "@/assets/logo-shield-white.png";

const STATS = [
  { end: 35, suffix: "+", label: "Anos de Mercado" },
  { end: 500, suffix: "+", label: "Empresas Atendidas" },
  { end: 20, suffix: "+", label: "Seguradoras Parceiras" },
  { end: 8, suffix: "", label: "Linhas de Negócio" },
];

const FEATURED = [
  {
    icon: HardHat,
    title: "Riscos de Engenharia",
    desc: "Obras civis, montagem industrial e instalações em construção — análise técnica do projeto e cobertura para quebra de máquinas.",
    tag: "Especialidade",
  },
  {
    icon: Briefcase,
    title: "D&O — Administradores",
    desc: "Proteção patrimonial pessoal de executivos, conselheiros e administradores frente a decisões de gestão.",
    tag: "Especialidade",
  },
  {
    icon: FileCheck2,
    title: "Seguro Garantia",
    desc: "Licitações, contratos públicos e privados, judicial e aduaneiro — agilidade na emissão e cláusulas adequadas.",
    tag: "Especialidade",
  },
];

const SECONDARY = [
  { icon: Building2, title: "Patrimonial Empresarial" },
  { icon: Truck, title: "Frota & Auto" },
  { icon: HeartPulse, title: "Vida em Grupo" },
  { icon: ShieldCheck, title: "Responsabilidade Civil" },
  { icon: Container, title: "Transportes" },
];

const PROCESS = [
  {
    icon: Search,
    title: "Diagnóstico",
    desc: "Mapeamos riscos e necessidades específicas da sua operação.",
  },
  {
    icon: ClipboardList,
    title: "Cotação",
    desc: "Concorrência entre as principais seguradoras do mercado.",
  },
  {
    icon: PenLine,
    title: "Contratação",
    desc: "Apólice estruturada com cláusulas adequadas à sua realidade.",
  },
  {
    icon: LifeBuoy,
    title: "Sinistro",
    desc: "Acompanhamento dedicado da abertura à indenização.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Quando o transformador queimou em plena obra, a Freeman tinha um perito no canteiro em 24 horas. A indenização saiu em 18 dias — o suficiente para não atrasarmos o contrato.",
    name: "Marcos Andrade",
    role: "Diretor de Operações",
    company: "Construtora Horizonte",
  },
  {
    quote:
      "Sinistro de carga multimodal, com recusa inicial da seguradora. A equipe técnica da Freeman documentou caso por caso e reverteu em 6 semanas. Sem judicial, sem advogado.",
    name: "Patrícia Lemos",
    role: "Gerente de Logística",
    company: "Marinex Operadora Portuária",
  },
];

const CLIENTS = [
  "VERTAGO LOG.",
  "MARINEX",
  "CONSTRUTORA HORIZONTE",
  "INDÚSTRIAS PALMARES",
  "GRUPO ATLÂNTICO",
  "PORTUS TERMINAIS",
];

const PARTNERS = ["PORTO", "ALLIANZ", "TOKIO MARINE", "BRADESCO", "SULAMÉRICA", "MAPFRE"];

const PAGE_TITLE = "Freeman Corretora — Seguros corporativos em Santos/SP";
const PAGE_DESCRIPTION =
  "Há 35 anos protegendo empresas com soluções de seguros corporativos sob medida — engenharia, D&O, frota, vida em grupo, transportes e mais.";

export default function IndexPage() {
  return (
    <>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESCRIPTION} />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={PAGE_DESCRIPTION} />
      <meta property="og:type" content="website" />
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-0">
          <div className="relative z-10">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
              Corretora de Seguros · Desde 1989
            </p>
            <h1 className="mt-6 text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              Proteção sólida para empresas que não podem parar.
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/80 md:text-lg">
              Com 35 anos de expertise, a Freeman Corretora oferece soluções de seguros corporativos
              sob medida para a continuidade do seu negócio.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-[4px] bg-white px-7 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-white/90"
              >
                Solicitar Cotação
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center justify-center rounded-[4px] border border-white/60 px-7 py-4 font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>

          <div className="relative hidden h-[80vh] lg:block">
            <img
              src={heroImg}
              alt="Edifícios corporativos modernos vistos de baixo"
              width={1280}
              height={1280}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/30" />
          </div>
        </div>

        {/* Shield watermark */}
        <img
          src={shieldWhite}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-20 h-[480px] w-[480px] opacity-[0.04]"
          loading="lazy"
        />
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-divider bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-16 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 text-center ${i > 0 ? "md:border-l md:border-divider" : ""}`}
            >
              <AnimatedCounter
                end={s.end}
                suffix={s.suffix}
                className="font-sans text-5xl font-black text-navy md:text-6xl"
              />
              <div className="mt-3 font-sans text-xs font-semibold uppercase tracking-widest text-graphite">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-surface-soft py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col gap-6 border-b border-divider pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-accent-red">
                Especialidades em destaque
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl">Onde a Freeman se diferencia.</h2>
            </div>
            <p className="max-w-md font-sans text-sm leading-relaxed text-graphite">
              Linhas de risco que exigem análise técnica profunda e cláusulas desenhadas sob medida.
              Nosso time mergulha na operação antes de cotar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FEATURED.map(({ icon: Icon, title, desc, tag }) => (
              <Link
                key={title}
                to="/servicos"
                className="group relative flex flex-col rounded-[4px] border border-divider bg-background p-8 transition-all hover:-translate-y-1 hover:border-navy hover:shadow-[0_12px_32px_-16px_rgba(33,37,67,0.25)]"
              >
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-accent-red">
                  {tag}
                </span>
                <Icon className="mt-6 h-10 w-10 text-navy" strokeWidth={1.25} />
                <h3 className="mt-6 text-2xl leading-tight">{title}</h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-graphite">
                  {desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wider text-navy-medium transition-colors group-hover:text-navy">
                  Conhecer cobertura <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 border-t border-divider pt-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-navy-medium">
                Também atendemos
              </p>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-navy hover:text-navy-medium"
              >
                Ver todas as linhas <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {SECONDARY.map(({ icon: Icon, title }) => (
                <li
                  key={title}
                  className="flex items-center gap-3 border border-divider bg-background px-4 py-3"
                >
                  <Icon className="h-5 w-5 shrink-0 text-navy-medium" strokeWidth={1.5} />
                  <span className="font-sans text-sm font-semibold text-graphite">{title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-accent-red">
                Metodologia
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl">Como trabalhamos.</h2>
            </div>
            <p className="max-w-md font-sans text-sm leading-relaxed text-graphite">
              Quatro etapas claras, do diagnóstico inicial à liquidação do sinistro. Sem caixa
              preta, sem letra miúda.
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-px overflow-hidden border border-divider bg-divider md:grid-cols-4">
            {PROCESS.map(({ icon: Icon, title, desc }, i) => (
              <li key={title} className="relative flex flex-col gap-4 bg-background p-8 md:p-10">
                <span className="font-display text-5xl leading-none text-divider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="h-7 w-7 text-navy" strokeWidth={1.5} />
                <h3 className="text-xl">{title}</h3>
                <p className="font-sans text-sm leading-relaxed text-graphite">{desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider text-navy hover:text-navy-medium"
            >
              Conhecer a Freeman <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SINISTROS / TESTIMONIALS */}
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
                O momento da verdade
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl">
                Quando o sinistro acontece, somos parte da sua equipe.
              </h2>
            </div>
            <p className="max-w-md font-sans text-sm leading-relaxed text-white/70">
              Em seguros, o que vale não é a apólice no papel — é o que acontece no dia em que ela é
              acionada. Nossa gestão de sinistros é o produto.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TESTIMONIALS.map(({ quote, name, role, company }) => (
              <figure
                key={name}
                className="flex flex-col gap-6 border border-white/15 bg-white/[0.03] p-8 md:p-10"
              >
                <Quote className="h-8 w-8 text-white/40" strokeWidth={1.25} />
                <blockquote className="font-display text-2xl leading-snug text-white md:text-[1.6rem]">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto border-t border-white/15 pt-5">
                  <p className="font-sans text-sm font-bold text-white">{name}</p>
                  <p className="mt-1 font-sans text-xs uppercase tracking-widest text-white/60">
                    {role} · {company}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <img
          src={shieldWhite}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] opacity-[0.04]"
          loading="lazy"
        />
      </section>

      {/* SOCIAL PROOF — CLIENTS + INSURERS */}
      <section className="border-y border-divider bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center font-sans text-xs font-bold uppercase tracking-[0.25em] text-navy-medium">
            Empresas que confiam na Freeman
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {CLIENTS.map((c) => (
              <li
                key={c}
                className="flex h-14 items-center justify-center border border-divider px-3 font-sans text-[11px] font-black uppercase tracking-[0.18em] text-graphite/80"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6">
          <p className="text-center font-sans text-xs font-semibold uppercase tracking-widest text-graphite">
            Trabalhamos com as maiores seguradoras do mercado
          </p>
        </div>
        <div className="marquee-mask group mt-8 overflow-hidden">
          <div className="animate-marquee flex w-max gap-8 pr-8 group-hover:[animation-play-state:paused]">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div
                key={`${p}-${i}`}
                className="flex h-16 w-48 shrink-0 items-center justify-center border border-divider font-sans text-sm font-black uppercase tracking-widest text-graphite/75 grayscale transition-colors hover:text-navy hover:grayscale-0"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-medium py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
              Sem compromisso
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Diagnóstico gratuito do seu programa de seguros.
            </h2>
            <p className="mt-3 font-sans text-base text-white/80">
              Nosso time analisa as apólices vigentes, identifica lacunas de cobertura e aponta
              oportunidades de economia — antes de qualquer cotação.
            </p>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-white px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy-medium transition-colors hover:bg-white/90"
          >
            Agendar diagnóstico <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
