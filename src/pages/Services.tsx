import { Link } from "react-router-dom";
import shieldWhite from "@/assets/logo-shield-white.png";
import {
  Car,
  Stethoscope,
  Home,
  Building2,
  Building,
  HeartPulse,
  Plane,
  HandCoins,
} from "lucide-react";
import { PROCESS } from "@/data/process";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import {
  breadcrumbSchema,
  organizationSchema,
  pageSchema,
  schemaGraph,
  servicesSchema,
} from "@/lib/structured-data";

const SERVICES = [
  {
    icon: Car,
    title: "Seguro Automóvel",
    desc: "Proteção para o seu veículo, com coberturas e assistências escolhidas de acordo com o seu perfil.",
  },
  {
    icon: Stethoscope,
    title: "Plano de Saúde",
    desc: "Encontre o plano ideal para você, sua família ou sua empresa, comparando as melhores opções de operadoras, redes e benefícios.",
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    desc: "Proteção para sua casa e seus bens, além de assistências para facilitar o seu dia a dia.",
  },
  {
    icon: Building2,
    title: "Seguro Empresarial",
    desc: "Soluções para proteger o patrimônio e a continuidade do seu negócio diante de imprevistos.",
  },
  {
    icon: Building,
    title: "Seguro Condomínio",
    desc: "Proteção para condomínios residenciais e comerciais, com coberturas para a estrutura, áreas comuns e responsabilidades.",
  },
  {
    icon: HeartPulse,
    title: "Seguro de Vida",
    desc: "Proteção financeira para você e sua família nos momentos em que mais precisarem.",
  },
  {
    icon: Plane,
    title: "Seguro Viagem",
    desc: "Viaje com tranquilidade e conte com proteção e assistência para imprevistos no Brasil ou no exterior.",
  },
  {
    icon: HandCoins,
    title: "Consórcio",
    desc: "Planeje a conquista do seu imóvel, veículo ou outros projetos de forma organizada e estratégica.",
  },
];

const PAGE_TITLE = "Serviços — Seguros | Freeman Corretora";
const PAGE_DESCRIPTION =
  "8 linhas de seguros: automóvel, saúde, residencial, empresarial, condomínio, vida, viagem e consórcio. Atendimento dedicado em Santos/SP.";

export default function ServicosPage() {
  return (
    <>
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/servicos"
        jsonLd={schemaGraph(
          organizationSchema,
          pageSchema("WebPage", "/servicos"),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Serviços", path: "/servicos" },
          ]),
          servicesSchema,
        )}
      />
      {/* INTERNAL HERO */}
      <section className="relative overflow-hidden bg-navy-medium py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
            O que fazemos
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl">Nossas Especialidades</h1>
          <p className="mt-5 font-sans text-lg text-white/80">
            Apólices desenhadas sob medida — para o seu carro, sua família ou o seu negócio.
          </p>
        </div>
        <img
          src={shieldWhite}
          alt=""
          aria-hidden="true"
          width={260}
          height={260}
          className="pointer-events-none absolute -right-10 bottom-0 h-[260px] w-[260px] opacity-[0.05]"
          loading="lazy"
        />
      </section>

      {/* SERVICES — GRID */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-14 flex flex-col gap-6 border-b border-divider pb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-navy-medium">
                  Linhas de negócio
                </p>
                <h2 className="mt-3 text-4xl md:text-5xl">Oito frentes. Uma corretora.</h2>
              </div>
              <p className="max-w-md font-sans text-sm leading-relaxed text-graphite">
                Cada apólice é estruturada com cláusulas adequadas à sua realidade — pessoa física
                ou jurídica — sem pacote pronto, sem letra miúda.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SERVICES.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={(i % 2) * 0.1}>
                <div className="flex h-full flex-col rounded-[4px] border border-divider bg-background p-8 transition-all hover:-translate-y-1 hover:border-navy hover:shadow-card-hover">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[4px] bg-navy">
                    <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-2xl leading-tight">{title}</h3>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-graphite">
                    {desc}
                  </p>
                  <Link
                    to={`/contato?seguro=${encodeURIComponent(title)}`}
                    className="mt-6 inline-flex items-center justify-center self-start rounded-[4px] border border-navy px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-navy hover:text-white"
                  >
                    Solicitar Cotação
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface-soft py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-16 text-center">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-navy-medium">
                Metodologia
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl">Como trabalhamos</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {PROCESS.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center border border-divider bg-background">
                    <Icon className="h-7 w-7 text-navy" strokeWidth={1.5} />
                  </div>
                  <div className="mt-4 font-sans text-xs font-bold uppercase tracking-widest text-navy-medium">
                    Etapa {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 text-xl">{title}</h3>
                  <p className="mt-2 font-sans text-sm text-graphite">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-medium py-20">
        <Reveal className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left">
          <>
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
          </>
        </Reveal>
      </section>
    </>
  );
}
