import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Truck,
  HeartPulse,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-corporate.jpg";
import shieldWhite from "@/assets/logo-shield-white.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Freeman Corretora — Seguros Corporativos em Santos/SP" },
      {
        name: "description",
        content:
          "35 anos de expertise em seguros corporativos. Soluções sob medida em Patrimonial, Frota, Vida em Grupo, D&O e Responsabilidade Civil.",
      },
      { property: "og:title", content: "Freeman Corretora — Proteção sólida para empresas" },
      {
        property: "og:description",
        content:
          "Há 35 anos protegendo empresas com apólices personalizadas e atendimento dedicado.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { value: "35+", label: "Anos de Mercado" },
  { value: "500+", label: "Empresas Atendidas" },
  { value: "100%", label: "Apólices Personalizadas" },
  { value: "24h", label: "Atendimento Dedicado" },
];

const SERVICES = [
  {
    icon: Building2,
    title: "Seguro Patrimonial",
    desc: "Proteção completa para o patrimônio da sua empresa contra incêndio, roubo e danos diversos.",
  },
  {
    icon: Truck,
    title: "Frota & Auto Empresarial",
    desc: "Cobertura abrangente para frotas leves e pesadas, com gestão de sinistros centralizada.",
  },
  {
    icon: HeartPulse,
    title: "Vida em Grupo",
    desc: "Benefícios corporativos que valorizam seus colaboradores e fortalecem sua cultura.",
  },
  {
    icon: ShieldCheck,
    title: "Responsabilidade Civil",
    desc: "Proteção contra danos causados a terceiros no exercício das atividades empresariais.",
  },
];

const PARTNERS = [
  "PORTO",
  "ALLIANZ",
  "TOKIO MARINE",
  "BRADESCO",
  "SULAMÉRICA",
  "MAPFRE",
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-0">
          <div className="relative z-10">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
              Corretora de Seguros · Desde 1989
            </p>
            <h1 className="mt-6 text-5xl !text-white leading-[1.05] md:text-6xl lg:text-7xl">
              Proteção sólida para empresas que não podem parar.
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/80 md:text-lg">
              Com 35 anos de expertise, a Freeman Corretora oferece soluções de seguros
              corporativos sob medida para a continuidade do seu negócio.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-white/90"
              >
                Solicitar Cotação
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center justify-center rounded-sm border border-white/60 px-7 py-4 font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>

          <div className="relative h-[60vh] lg:h-[80vh]">
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
              <div className="font-sans text-5xl font-black text-navy md:text-6xl">{s.value}</div>
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
          <div className="mb-16 text-center">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-navy-medium">
              O que fazemos
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl">Soluções Corporativas</h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-base text-graphite">
              Apólices desenhadas para a complexidade operacional da sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex flex-col rounded-sm border border-divider bg-background p-8 transition-transform hover:-translate-y-1"
              >
                <Icon className="h-10 w-10 text-navy" strokeWidth={1.25} />
                <h3 className="mt-6 text-xl">{title}</h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-graphite">
                  {desc}
                </p>
                <Link
                  to="/servicos"
                  className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wider text-navy-medium transition-colors group-hover:text-navy"
                >
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="border-y border-divider bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center font-sans text-xs font-semibold uppercase tracking-widest text-graphite">
            Trabalhamos com as maiores seguradoras do mercado
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((p) => (
              <div
                key={p}
                className="flex h-16 items-center justify-center border border-divider font-sans text-sm font-black uppercase tracking-widest text-graphite/50 grayscale transition-all hover:text-navy hover:grayscale-0"
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
          <div>
            <h2 className="text-3xl !text-white md:text-4xl">Pronto para proteger seu negócio?</h2>
            <p className="mt-3 font-sans text-base text-white/80">
              Fale com um especialista hoje mesmo e receba uma análise sem compromisso.
            </p>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy-medium transition-colors hover:bg-white/90"
          >
            Solicitar Cotação
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
