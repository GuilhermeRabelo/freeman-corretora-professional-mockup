import { useEffect, useRef, useState } from "react";
import { Eye, Award, Users } from "lucide-react";
import shieldWhite from "@/assets/logo-shield-white.png";
import rogerioPhoto from "@/assets/rogerio.webp";
import igorPhoto from "@/assets/igor.webp";

const DIRETORIA = [
  {
    role: "Sócio-Fundador",
    name: "Rogério Freeman",
    photo: rogerioPhoto,
    bio: "Com mais de três décadas de dedicação ao mercado de seguros, Rogério iniciou sua trajetória em 1989 na Itaú Seguros antes de empreender e fundar a Freeman Corretora. É formado e pós-graduado em Administração de Empresas, e divide sua expertise como professor da Escola de Negócios e Seguros (ENS) e palestrante. Atua ativamente como liderança no Sincor-SP, reforçando seu compromisso com a ética e o desenvolvimento do setor.",
  },
  {
    role: "Head de Operações e Inovação",
    name: "Igor Freeman",
    photo: igorPhoto,
    bio: "Publicitário de formação, Igor ingressou na Freeman Corretora em 2020 para liderar o processo sucessório e a transformação digital do negócio. Sua entrada marcou um novo capítulo para a empresa, unindo a tradição de mercado da corretora com inovação, comunicação ágil e uma identidade visual moderna, pensada para o cliente contemporâneo.",
  },
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
  { year: String(new Date().getFullYear()), label: "500+ empresas atendidas" },
];

const PAGE_TITLE = "Sobre — 35 anos de tradição em seguros corporativos | Freeman";
const PAGE_DESCRIPTION =
  "Conheça a história da Freeman Corretora, fundada em 1989 em Santos/SP. Tradição, ética e expertise técnica para proteger empresas em todo o Brasil.";

export default function SobrePage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESCRIPTION} />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={PAGE_DESCRIPTION} />
      <meta property="og:type" content="website" />
      {/* INTERNAL HERO */}
      <section className="relative overflow-hidden bg-navy-medium py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
            Quem somos
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl">Sobre a Freeman</h1>
          <p className="mt-5 font-sans text-lg text-white/80">
            Tradição, Ética e Foco em Resultados.
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

      {/* INSTITUTIONAL SPLIT */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 lg:mb-20">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-accent-red">
              35 anos de história
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
                concorrência entre as principais seguradoras e termina com gestão ativa de sinistros
                para que sua empresa nunca pare.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
            {DIRETORIA.map((person) => (
              <div key={person.role} className="flex flex-col items-center text-center">
                <div className="h-56 w-56 overflow-hidden rounded-full bg-surface-soft sm:h-64 sm:w-64">
                  <img src={person.photo} alt={person.name} className="h-full w-full" />
                </div>
                <p className="mt-8 font-sans text-2xl font-bold text-graphite">{person.name}</p>
                <p className="mt-1 font-sans text-xs font-bold uppercase tracking-widest text-accent-red">
                  {person.role}
                </p>
                <p className="mx-auto mt-5 max-w-md font-sans text-sm leading-relaxed text-graphite/80">
                  {person.bio}
                </p>
              </div>
            ))}
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
            <h2 className="mt-4 text-4xl md:text-5xl">O que nos move</h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-white/15 p-8">
                <Icon className="h-10 w-10 text-white" strokeWidth={1.25} />
                <h3 className="mt-6 text-2xl">{title}</h3>
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
          <div
            ref={timelineRef}
            className="relative grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-10"
          >
            {/* horizontal animated line — desktop */}
            <div className="absolute left-0 right-0 top-3 hidden h-px overflow-hidden md:block">
              <div
                className="h-full bg-divider transition-transform duration-[1200ms] ease-out"
                style={{
                  transformOrigin: "left",
                  transform: timelineVisible ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </div>

            {TIMELINE.map((m, i) => {
              const isLast = i === TIMELINE.length - 1;
              const dotDelay = 300 + i * 280;
              const contentDelay = 450 + i * 280;
              return (
                <div
                  key={m.year}
                  className="relative flex gap-5 pb-10 last:pb-0 md:block md:gap-0 md:pb-0 md:text-center"
                >
                  {/* vertical connector — mobile only */}
                  {!isLast && (
                    <div className="absolute left-3 top-6 bottom-0 w-px -translate-x-1/2 bg-divider md:hidden" />
                  )}
                  <div
                    className="h-6 w-6 shrink-0 rounded-full border-4 border-background transition-all duration-500 md:mx-auto"
                    style={{
                      backgroundColor: isLast
                        ? timelineVisible
                          ? "#c83d3d"
                          : "#212543"
                        : "#212543",
                      opacity: timelineVisible ? 1 : 0,
                      transform: timelineVisible ? "scale(1)" : "scale(0)",
                      transitionDelay: `${dotDelay}ms`,
                    }}
                  />
                  <div className="md:mt-5">
                    <div
                      className="font-sans text-3xl font-black transition-all duration-500"
                      style={{
                        color: isLast ? "#c83d3d" : "#212543",
                        opacity: timelineVisible ? 1 : 0,
                        transform: timelineVisible ? "translateY(0)" : "translateY(12px)",
                        transitionDelay: `${contentDelay}ms`,
                      }}
                    >
                      {m.year}
                    </div>
                    <div
                      className="mt-2 font-sans text-sm text-graphite transition-all duration-500"
                      style={{
                        opacity: timelineVisible ? 1 : 0,
                        transform: timelineVisible ? "translateY(0)" : "translateY(8px)",
                        transitionDelay: `${contentDelay + 60}ms`,
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
