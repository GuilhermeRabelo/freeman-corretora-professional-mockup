import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Car,
  Home as HomeIcon,
  Building,
  HeartPulse,
  Plane,
  HandCoins,
  ArrowRight,
  ArrowUpRight,
  Quote,
} from "lucide-react";
import { TrustStats } from "@/components/TrustStats";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { RevealHeading } from "@/components/RevealHeading";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Seo } from "@/components/Seo";
import { cardClass, cardEdgeClass } from "@/lib/ui";
import { EASE_OUT_QUINT } from "@/lib/motion";
import { organizationSchema, pageSchema, schemaGraph, websiteSchema } from "@/lib/structured-data";
import heroImg from "@/assets/logo-freeman-parede.webp";
import shieldWhite from "@/assets/logo-shield-white.png";
import portoLogo from "@/assets/partners/porto.svg";
import azulSegurosLogo from "@/assets/partners/azul-seguros.svg";
import hdiLogo from "@/assets/partners/hdi-seguros.svg";
import yelumLogo from "@/assets/partners/yelum-seguradora.svg";
import aliroLogo from "@/assets/partners/aliro-seguro.png";
import tokioMarineLogo from "@/assets/partners/tokio-marine.svg";
import suhaiLogo from "@/assets/partners/suhai-seguradora.svg";
import allianzLogo from "@/assets/partners/allianz.svg";
import bradescoSegurosLogo from "@/assets/partners/bradesco-seguros.svg";

// Dados ilustrativos — confirmar números reais com o cliente antes de publicar.
const CLAIMS_STATS = [
  { value: "R$ 40 milhões+", label: "Em indenizações pagas" },
  { value: "98%", label: "Taxa de renovação de contratos" },
  { value: "24h", label: "Tempo médio de 1ª resposta em sinistros" },
];

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FEATURED = [
  {
    icon: Car,
    title: "Seguro Automóvel",
    desc: "Coberturas para o veículo e danos a terceiros, assistência 24 horas e suporte em sinistros, de acordo com a sua necessidade.",
    tag: "Especialidade",
  },
  {
    icon: Building2,
    title: "Seguro Empresarial",
    desc: "Proteção do patrimônio, coberturas para a continuidade do negócio e opções de responsabilidade civil, conforme os riscos da sua empresa.",
    tag: "Especialidade",
  },
  {
    icon: Stethoscope,
    title: "Plano de Saúde",
    desc: "Planos individuais, familiares e empresariais, com diferentes redes e acomodações. Compare operadoras com a orientação da Freeman.",
    tag: "Especialidade",
  },
];

const SECONDARY = [
  { icon: HomeIcon, title: "Seguro Residencial" },
  { icon: Building, title: "Seguro Condomínio" },
  { icon: HeartPulse, title: "Seguro de Vida" },
  { icon: Plane, title: "Seguro Viagem" },
  { icon: HandCoins, title: "Consórcio" },
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

const PARTNERS = [
  { name: "Porto", logo: portoLogo },
  { name: "Azul Seguros", logo: azulSegurosLogo },
  { name: "HDI", logo: hdiLogo },
  { name: "Yelum Seguradora", logo: yelumLogo },
  { name: "Aliro Seguro", logo: aliroLogo },
  { name: "Tokio Marine", logo: tokioMarineLogo },
  { name: "Suhai Seguradora", logo: suhaiLogo },
  { name: "Allianz", logo: allianzLogo },
  { name: "Bradesco Seguros", logo: bradescoSegurosLogo },
];

const PAGE_TITLE = "Freeman Corretora | Seguro Auto, Saúde e Empresarial em Santos/SP";
const PAGE_DESCRIPTION =
  "Desde 1989 protegendo pessoas e empresas com seguro de automóvel, plano de saúde e soluções corporativas sob medida em Santos/SP e em todo o Brasil.";

export default function IndexPage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // Parallax sutil: a foto desce, o texto sobe. Desligado em reduced-motion.
  // O 9% inicial é o enquadramento original da foto, não um deslocamento.
  const imageY = useTransform(scrollYProgress, [0, 1], ["9%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <>
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/"
        jsonLd={schemaGraph(organizationSchema, websiteSchema, pageSchema("WebPage", "/"))}
      />
      {/* HERO */}
      <section ref={heroRef} className="grain relative overflow-hidden bg-navy text-white">
        {/* Backdrop image — tablet & mobile: subtle full-bleed texture behind the text */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-[60%_26%] opacity-[0.28] [filter:saturate(0.78)_contrast(1.05)_brightness(0.92)]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/92 to-navy" />
        </div>

        {/* Feature image — desktop: bleeds past the container to the viewport's right edge */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 right-0 hidden overflow-hidden lg:block">
          {/* Entrada: a foto assenta junto com o escalonamento do texto */}
          <motion.div
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE_OUT_QUINT }}
          >
            <motion.img
              src={heroImg}
              alt="Logo da Freeman Corretora aplicada na parede do escritório"
              width={1535}
              height={1024}
              fetchPriority="high"
              // O enquadramento (scale 1.25 + 9% para baixo) precisa viver no style
              // do framer: o transform inline dele sobrescreve as classes do
              // Tailwind, inclusive quando o movimento está desligado.
              style={{ y: reduceMotion ? "9%" : imageY, scale: 1.25 }}
              className="absolute inset-0 h-full w-full object-cover object-[40%_60%] [filter:saturate(0.76)_contrast(1.08)_brightness(0.96)]"
            />
          </motion.div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--color-navy) 0%, color-mix(in srgb, var(--color-navy) 70%, transparent) 18%, color-mix(in srgb, var(--color-navy) 40%, transparent) 38%, color-mix(in srgb, var(--color-navy) 15%, transparent) 60%, transparent 85%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 35%, transparent 60%)",
            }}
          />
          <div className="vignette absolute inset-0" />
        </div>

        {/* Segundo ponto de luz, atrás do texto — impede o navy de "morrer" à esquerda */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 8% 12%, rgba(255,255,255,0.10) 0%, transparent 62%)",
          }}
        />

        <motion.div
          className="relative z-10 mx-auto grid min-h-[86vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-24"
          variants={heroContainer}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          style={reduceMotion ? undefined : { y: textY }}
        >
          <div>
            <motion.p
              variants={heroItem}
              className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60"
            >
              Corretora de Seguros · Desde 1989
            </motion.p>
            <RevealHeading
              as="h1"
              delay={0.22}
              className="mt-6 text-display-1"
              lines={[
                <span key="l1" className="text-white/70">
                  Há três décadas protegendo
                </span>,
                <span key="l2">a sua vida e o seu patrimônio.</span>,
              ]}
            />
            <motion.p
              variants={heroItem}
              className="mt-7 max-w-xl font-sans text-base leading-relaxed text-white/80 md:text-lg"
            >
              Do seguro automóvel e plano de saúde às soluções sob medida para proteger a sua
              empresa — expertise em seguros desde 1989.
            </motion.p>
            <motion.div variants={heroItem} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contato"
                className="sheen-navy inline-flex items-center justify-center rounded-[4px] bg-white px-7 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy shadow-e2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-e4"
              >
                Solicitar Cotação
              </Link>
              <Link
                to="/servicos"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-[4px] border border-white/60 px-7 py-4 font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:border-white"
              >
                {/* Preenchimento que cresce de baixo em vez de um flash de opacidade */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-bottom scale-y-0 bg-white/12 transition-transform duration-300 ease-out group-hover:scale-y-100"
                />
                <span className="relative">Nossos Serviços</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* TRUST BAR / CREDENCIAIS */}
      <TrustStats />

      {/* SERVICES PREVIEW */}
      <section className="mesh-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-14 flex flex-col gap-6 border-b border-divider pb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-accent-red">
                  Especialidades em destaque
                </p>
                <h2 className="mt-3 text-4xl md:text-5xl">Onde a Freeman se diferencia.</h2>
              </div>
              <p className="max-w-md font-sans text-sm leading-relaxed text-graphite">
                Do seu carro ao patrimônio da sua empresa, cada apólice recebe a mesma análise
                técnica e o mesmo cuidado sob medida.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FEATURED.map(({ icon: Icon, title, desc, tag }, i) => (
              <Reveal key={title} delay={i * 0.1} className="h-full">
                <SpotlightCard className={cardClass}>
                  <span aria-hidden="true" className={cardEdgeClass} />
                  <Link to="/servicos" className="relative flex h-full flex-col p-8">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-accent-red">
                      {tag}
                    </span>
                    <Icon
                      className="mt-6 h-10 w-10 text-navy transition-transform duration-200 group-hover:scale-110"
                      strokeWidth={1.25}
                    />
                    <h3 className="mt-6 text-2xl leading-tight">{title}</h3>
                    <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-graphite">
                      {desc}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wider text-navy-medium transition-colors group-hover:text-navy">
                      Conhecer cobertura
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal>
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
                    className="group flex items-center gap-3 rounded-[4px] border border-divider bg-background px-4 py-3 shadow-e1 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy hover:shadow-e2"
                  >
                    <Icon
                      className="h-5 w-5 shrink-0 text-navy-medium transition-transform duration-200 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                    <span className="font-sans text-sm font-semibold text-graphite">{title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
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
          </Reveal>

          <ProcessSteps />

          <Reveal>
            <div className="mt-10">
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider text-navy hover:text-navy-medium"
              >
                Conhecer a Freeman <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SINISTROS / TESTIMONIALS */}
      <section className="mesh-navy grain relative overflow-hidden py-24 text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal>
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
                Em seguros, o que vale não é a apólice no papel — é o que acontece no dia em que ela
                é acionada. Nossa gestão de sinistros é o produto.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative mb-14 grid grid-cols-1 gap-6 py-8 sm:grid-cols-3">
              <div className="rule-glow absolute inset-x-0 top-0" />
              <div className="rule-glow absolute inset-x-0 bottom-0" />
              {CLAIMS_STATS.map((s, i) => (
                <div key={s.label} className="relative text-center">
                  {i > 0 && (
                    <div className="rule-glow-y absolute inset-y-1 left-0 hidden sm:block" />
                  )}
                  <div className="tabular font-sans text-3xl font-black text-white md:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-2 font-sans text-xs font-semibold uppercase tracking-widest text-white/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TESTIMONIALS.map(({ quote, name, role, company }, i) => (
              <Reveal key={name} delay={i * 0.1} className="h-full">
                <figure className="relative flex h-full flex-col gap-6 overflow-hidden rounded-[4px] border border-white/15 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/30 md:p-10">
                  <div className="rule-glow absolute inset-x-0 top-0" />
                  {/* Aspas em escala grande, sangrando atrás do texto */}
                  <Quote
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -top-4 h-40 w-40 text-white/[0.05]"
                    strokeWidth={0.75}
                  />
                  <Quote className="relative h-8 w-8 text-white/40" strokeWidth={1.25} />
                  <blockquote className="relative font-display text-2xl leading-snug text-white md:text-[1.6rem]">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <figcaption className="relative mt-auto border-t border-white/15 pt-5">
                    <p className="font-sans text-sm font-bold text-white">{name}</p>
                    <p className="mt-1 font-sans text-xs uppercase tracking-widest text-white/60">
                      {role} · {company}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <img
          src={shieldWhite}
          alt=""
          aria-hidden="true"
          width={420}
          height={420}
          className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] opacity-[0.04]"
          loading="lazy"
        />
      </section>

      {/* SOCIAL PROOF — INSURERS */}
      <section className="border-y border-divider bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal y={12}>
            <p className="text-center font-sans text-xs font-semibold uppercase tracking-widest text-graphite">
              Trabalhamos com as maiores seguradoras do mercado
            </p>
          </Reveal>
        </div>
        <div className="marquee-mask mt-8 overflow-hidden py-10">
          <div className="animate-marquee flex w-max">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center gap-12 pr-12"
              >
                {PARTNERS.map((p) => (
                  <div
                    key={`${copy}-${p.name}`}
                    className="group/logo relative flex h-20 shrink-0 items-center justify-center"
                  >
                    <img
                      src={p.logo}
                      alt={copy === 1 ? "" : p.name}
                      className="h-14 w-auto object-contain opacity-60 grayscale transition-[filter,opacity] duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
                    />
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-navy px-2.5 py-1 font-sans text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover/logo:opacity-100"
                    >
                      {p.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mesh-navy grain relative overflow-hidden py-20">
        <Reveal className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left">
          <>
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
              className="sheen-navy group inline-flex shrink-0 items-center justify-center gap-2 rounded-[4px] bg-white px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy-medium shadow-e2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-e4"
            >
              Agendar diagnóstico
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </>
        </Reveal>
      </section>
    </>
  );
}
