import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, Award, Users, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import {
  breadcrumbSchema,
  leadershipSchema,
  organizationSchema,
  pageSchema,
  schemaGraph,
} from "@/lib/structured-data";
import { PageHero } from "@/components/PageHero";
import rogerioPhoto from "@/assets/rogerio.webp";
import igorPhoto from "@/assets/igor.webp";

const DIRETORIA = [
  {
    role: "Sócio-Fundador",
    name: "Rogério Freeman",
    photo: rogerioPhoto,
    bio: "Rogério atua no mercado de seguros desde 1989. Está à frente da área de seguros patrimoniais da corretora.",
  },
  {
    role: "Sócio-Diretor",
    name: "Igor Freeman",
    photo: igorPhoto,
    bio: "Igor, desde 2020, participa do processo de sucessão, contribuindo para a modernização e expansão da empresa. É responsável pela área de Planos de Saúde.",
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

const PAGE_TITLE = "Sobre — Tradição em seguros corporativos desde 1989 | Freeman";
const PAGE_DESCRIPTION =
  "Conheça a história da Freeman Corretora, fundada em 1989 em Santos/SP. Tradição, ética e expertise técnica para proteger empresas em todo o Brasil.";

export default function SobrePage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

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
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/sobre"
        jsonLd={schemaGraph(
          organizationSchema,
          pageSchema("AboutPage", "/sobre"),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Sobre", path: "/sobre" },
          ]),
          leadershipSchema,
        )}
      />
      {/* INTERNAL HERO */}
      <PageHero eyebrow="Quem somos" title="A Freeman" lead="Construímos relações de confiança!" />

      {/* INSTITUTIONAL SPLIT */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-16 lg:mb-20">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-accent-red">
                Desde 1989
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
          </Reveal>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
            {DIRETORIA.map((person, i) => (
              <Reveal key={person.role} delay={i * 0.1}>
                <div className="group flex flex-col items-center text-center">
                  <div className="relative h-56 w-56 sm:h-64 sm:w-64">
                    {/* Halo navy que acende no hover — dá presença ao retrato */}
                    <span
                      aria-hidden="true"
                      className="absolute -inset-3 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle, color-mix(in srgb, var(--color-navy) 12%, transparent) 0%, transparent 70%)",
                      }}
                    />
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-surface-soft shadow-e2 ring-1 ring-divider transition-shadow duration-500 group-hover:shadow-e4">
                      <img
                        src={person.photo}
                        alt={person.name}
                        width={768}
                        height={768}
                        loading="lazy"
                        className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <p className="mt-8 font-sans text-2xl font-bold text-graphite">{person.name}</p>
                  <p className="mt-1 font-sans text-xs font-bold uppercase tracking-widest text-accent-red">
                    {person.role}
                  </p>
                  <p className="mx-auto mt-5 max-w-md font-sans text-sm leading-relaxed text-graphite/80">
                    {person.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mesh-navy grain relative overflow-hidden py-24 text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-16 text-center">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
                Nossos valores
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl">O que nos move</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.1} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-[4px] border border-white/15 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/35">
                  <div className="rule-glow absolute inset-x-0 top-0" />
                  <Icon
                    className="h-10 w-10 text-white transition-transform duration-200 group-hover:scale-110"
                    strokeWidth={1.25}
                  />
                  <h3 className="mt-6 text-2xl">{title}</h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-white/80">{desc}</p>
                </div>
              </Reveal>
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
                className="h-full bg-divider transition-transform ease-out"
                style={{
                  transformOrigin: "left",
                  transform: timelineVisible || reduceMotion ? "scaleX(1)" : "scaleX(0)",
                  transitionDuration: reduceMotion ? "0ms" : "1200ms",
                }}
              />
            </div>

            {TIMELINE.map((m, i) => {
              const isLast = i === TIMELINE.length - 1;
              const dotDelay = reduceMotion ? 0 : 300 + i * 280;
              const contentDelay = reduceMotion ? 0 : 450 + i * 280;
              const visible = timelineVisible || reduceMotion;
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
                    className="h-6 w-6 shrink-0 rounded-full border-4 border-background transition-all md:mx-auto"
                    style={{
                      backgroundColor: isLast
                        ? visible
                          ? "var(--color-accent-red)"
                          : "var(--color-navy)"
                        : "var(--color-navy)",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "scale(1)" : "scale(0)",
                      transitionDuration: reduceMotion ? "0ms" : "500ms",
                      transitionDelay: `${dotDelay}ms`,
                    }}
                  />
                  <div className="md:mt-5">
                    <div
                      className="flex items-baseline gap-2 font-sans text-3xl font-black transition-all md:justify-center"
                      style={{
                        color: isLast ? "var(--color-accent-red)" : "var(--color-navy)",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(12px)",
                        transitionDuration: reduceMotion ? "0ms" : "500ms",
                        transitionDelay: `${contentDelay}ms`,
                      }}
                    >
                      {m.year}
                      {isLast && (
                        <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-red">
                          Hoje
                        </span>
                      )}
                    </div>
                    <div
                      className="mt-2 font-sans text-sm text-graphite transition-all"
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(8px)",
                        transitionDuration: reduceMotion ? "0ms" : "500ms",
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

      {/* CTA */}
      <section className="mesh-navy grain relative overflow-hidden py-20">
        <Reveal className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left">
          <>
            <div>
              <h2 className="text-3xl md:text-4xl">Vamos conversar sobre a sua proteção?</h2>
              <p className="mt-3 font-sans text-base text-white/80">
                Nossa equipe monta a proteção ideal para você, sua família ou sua empresa.
              </p>
            </div>
            <Link
              to="/contato"
              className="sheen-navy group inline-flex shrink-0 items-center justify-center gap-2 rounded-[4px] bg-white px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy-medium shadow-e2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-e4"
            >
              Solicitar Cotação
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </>
        </Reveal>
      </section>
    </>
  );
}
