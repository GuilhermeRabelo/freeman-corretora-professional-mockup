import { Link } from "react-router-dom";
import { motion, useReducedMotion, type Variants } from "framer-motion";
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
import heroImg from "@/assets/logo-freeman-parede.png";
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
    icon: Building2,
    title: "Seguro Empresarial",
    desc: "Soluções para proteger o patrimônio e a continuidade do seu negócio diante de imprevistos.",
    tag: "Especialidade",
  },
  {
    icon: Stethoscope,
    title: "Plano de Saúde",
    desc: "Encontre o plano ideal para você, sua família ou sua empresa, comparando as melhores opções de operadoras, redes e benefícios.",
    tag: "Especialidade",
  },
  {
    icon: Car,
    title: "Seguro Automóvel",
    desc: "Proteção para o seu veículo, com coberturas e assistências escolhidas de acordo com o seu perfil.",
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

const PAGE_TITLE = "Freeman Corretora — Seguros corporativos em Santos/SP";
const PAGE_DESCRIPTION =
  "Há 35 anos protegendo empresas com soluções de seguros corporativos sob medida — engenharia, D&O, frota, vida em grupo, transportes e mais.";

export default function IndexPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESCRIPTION} />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={PAGE_DESCRIPTION} />
      <meta property="og:type" content="website" />
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
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
          <img
            src={heroImg}
            alt="Logo da Freeman Corretora aplicada na parede do escritório"
            width={1535}
            height={1024}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full translate-y-[9%] scale-125 object-cover object-[40%_60%] [filter:saturate(0.76)_contrast(1.08)_brightness(0.96)]"
          />
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
          <div
            className="absolute inset-0"
            style={{
              boxShadow: "inset 0 0 140px 10px rgba(33,37,67,0.35)",
            }}
          />
        </div>

        <motion.div
          className="relative z-10 mx-auto grid min-h-[80vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-0"
          variants={heroContainer}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
        >
          <div>
            <motion.p
              variants={heroItem}
              className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60"
            >
              Corretora de Seguros · Desde 1989
            </motion.p>
            <motion.h1
              variants={heroItem}
              className="mt-6 text-5xl leading-[1.05] md:text-6xl lg:text-7xl"
            >
              Há três décadas protegendo a sua vida e o seu patrimônio.
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/80 md:text-lg"
            >
              Com 35 anos de expertise, a Freeman Corretora oferece soluções de seguros corporativos
              sob medida para a continuidade do seu negócio.
            </motion.p>
            <motion.div variants={heroItem} className="mt-10 flex flex-col gap-4 sm:flex-row">
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
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* TRUST BAR / CREDENCIAIS */}
      <TrustStats />

      {/* SERVICES PREVIEW */}
      <section className="bg-surface-soft py-24">
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
                Linhas de risco que exigem análise técnica profunda e cláusulas desenhadas sob
                medida. Nosso time mergulha na operação antes de cotar.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FEATURED.map(({ icon: Icon, title, desc, tag }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <Link
                  to="/servicos"
                  className="group relative flex h-full flex-col rounded-[4px] border border-divider bg-background p-8 transition-all hover:-translate-y-1 hover:border-navy hover:shadow-card-hover"
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
                    className="flex items-center gap-3 border border-divider bg-background px-4 py-3"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-navy-medium" strokeWidth={1.5} />
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
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
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
            <div className="mb-14 grid grid-cols-1 gap-6 border-y border-white/15 py-8 sm:grid-cols-3">
              {CLAIMS_STATS.map((s) => (
                <div
                  key={s.label}
                  className="text-center sm:border-l sm:border-white/15 sm:first:border-l-0"
                >
                  <div className="font-sans text-3xl font-black text-white md:text-4xl">
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
              <Reveal key={name} delay={i * 0.1}>
                <figure className="flex h-full flex-col gap-6 border border-white/15 bg-white/[0.03] p-8 md:p-10">
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
        <div className="marquee-mask group mt-8 overflow-hidden pt-10">
          <div className="animate-marquee flex w-max gap-8 pr-8 group-hover:[animation-play-state:paused]">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="group/logo relative flex h-16 shrink-0 items-center justify-center"
              >
                <img src={p.logo} alt={p.name} className="h-10 w-auto object-contain" />
                <span
                  role="tooltip"
                  className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-navy px-2.5 py-1 font-sans text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover/logo:opacity-100"
                >
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-medium py-20">
        <Reveal className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left">
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
              className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-white px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy-medium transition-colors hover:bg-white/90"
            >
              Agendar diagnóstico <ArrowUpRight className="h-4 w-4" />
            </Link>
          </>
        </Reveal>
      </section>
    </>
  );
}
