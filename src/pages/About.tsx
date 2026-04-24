import { useEffect } from "react";
import { Eye, Award, Users, User } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";

const DIRETORIA = [
  { role: "Diretor", name: "" },
  { role: "Sócio", name: "" },
];

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

export default function SobrePage() {
  useEffect(() => {
    document.title = "Sobre a Freeman — 35 anos de tradição em seguros corporativos";
  }, []);

  return (
    <SiteLayout>
      {/* INTERNAL HERO */}
      <section className="bg-navy-medium py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
            Quem somos
          </p>
          <h1 className="mt-4 text-5xl !text-white md:text-6xl">Sobre a Freeman</h1>
          <p className="mt-5 font-sans text-lg text-white/80">Tradição, Ética e Foco em Resultados.</p>
        </div>
      </section>

      {/* INSTITUTIONAL SPLIT */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div className="flex items-start justify-center gap-10 sm:gap-16">
            {DIRETORIA.map((person) => (
              <div key={person.role} className="flex flex-col items-center">
                <div className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-dashed border-graphite/40 bg-white grayscale sm:h-48 sm:w-48">
                  <User className="h-16 w-16 text-graphite/50" strokeWidth={1.25} />
                </div>
                <p className="mt-5 font-sans text-base font-semibold text-graphite">
                  {person.role}
                </p>
                {person.name && (
                  <p className="mt-1 font-sans text-sm text-graphite/70">{person.name}</p>
                )}
              </div>
            ))}
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
