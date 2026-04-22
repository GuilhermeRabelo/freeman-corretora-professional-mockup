import { createFileRoute } from "@tanstack/react-router";
import { Eye, Award, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import aboutImg from "@/assets/about-corporate.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Freeman — 35 anos de tradição em seguros corporativos" },
      {
        name: "description",
        content:
          "Conheça a história da Freeman Corretora: 35 anos de tradição, ética e foco em resultados para empresas brasileiras.",
      },
      { property: "og:title", content: "Sobre a Freeman Corretora" },
      {
        property: "og:description",
        content: "Tradição, ética e foco em resultados desde 1989.",
      },
      { property: "og:image", content: aboutImg },
      { name: "twitter:image", content: aboutImg },
    ],
  }),
  component: SobrePage,
});

const VALUES = [
  {
    icon: Eye,
    title: "Transparência Absoluta",
    desc: "Comunicação clara em cada etapa, sem letras miúdas. Você sempre sabe pelo que está pagando.",
  },
  {
    icon: Award,
    title: "Expertise Técnica",
    desc: "Análise de riscos profunda e desenho de apólices feito por especialistas com décadas de mercado.",
  },
  {
    icon: Users,
    title: "Foco no Cliente",
    desc: "Atendimento consultivo e acompanhamento dedicado, do diagnóstico ao sinistro.",
  },
];

const TIMELINE = [
  { year: "1989", label: "Fundação em Santos/SP" },
  { year: "2002", label: "Expansão para grandes contas" },
  { year: "2015", label: "Operações nacionais" },
  { year: "2025", label: "500+ empresas atendidas" },
];

function SobrePage() {
  return (
    <SiteLayout>
      {/* INTERNAL HERO */}
      <section className="bg-navy-medium py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
            Quem somos
          </p>
          <h1 className="mt-4 text-5xl !text-white md:text-6xl">Sobre a Freeman</h1>
          <p className="mt-5 font-sans text-lg text-white/80">
            Tradição, Ética e Foco em Resultados.
          </p>
        </div>
      </section>

      {/* INSTITUTIONAL SPLIT */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div className="border-2 border-navy">
            <img
              src={aboutImg}
              alt="Diretoria da Freeman Corretora em reunião"
              width={1280}
              height={1280}
              loading="lazy"
              className="block h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-sans text-sm font-bold uppercase tracking-[0.25em] text-accent-red">
              35 anos de história.
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Entendemos o risco para proteger o seu sucesso.
            </h2>
            <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-graphite">
              <p>
                Fundada em 1989 em Santos, a Freeman Corretora nasceu com um propósito claro:
                oferecer ao mercado corporativo uma consultoria técnica de seguros realmente
                independente, livre de pressões comerciais e focada na proteção real do patrimônio
                empresarial.
              </p>
              <p>
                Atendemos hoje mais de 500 empresas — de indústrias e operações logísticas a
                escritórios de serviços profissionais — desenhando apólices sob medida que
                acompanham a complexidade de cada operação.
              </p>
              <p>
                Nossa abordagem é consultiva: começa com diagnóstico de riscos, segue com
                concorrência entre as principais seguradoras e termina com gestão ativa de
                sinistros para que sua empresa nunca pare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
              Nossos valores
            </p>
            <h2 className="mt-4 text-4xl !text-white md:text-5xl">O que nos move</h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-white/15 p-8">
                <Icon className="h-10 w-10 text-white" strokeWidth={1.25} />
                <h3 className="mt-6 text-2xl !text-white">{title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-white/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl">Linha do tempo</h2>
          </div>
          <div className="relative grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-3 hidden h-px bg-divider md:block" />
            {TIMELINE.map((m) => (
              <div key={m.year} className="relative text-center">
                <div className="mx-auto h-6 w-6 rounded-full border-4 border-background bg-navy" />
                <div className="mt-5 font-sans text-3xl font-black text-navy">{m.year}</div>
                <div className="mt-2 font-sans text-sm text-graphite">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
