import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Car,
  Stethoscope,
  Home,
  Building2,
  Building,
  HeartPulse,
  Plane,
  HandCoins,
  ChevronDown,
} from "lucide-react";
import { PROCESS } from "@/data/process";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Seo } from "@/components/Seo";
import { cardClass, cardEdgeClass } from "@/lib/ui";
import { DUR_BASE, EASE_OUT_QUINT } from "@/lib/motion";
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
    benefits: [
      {
        title: "Proteção para o seu veículo",
        desc: "Conte com coberturas como colisão, roubo, furto, incêndio e eventos da natureza, de acordo com a sua necessidade.",
      },
      {
        title: "Danos a terceiros",
        desc: "Proteção para prejuízos materiais ou corporais causados a terceiros, trazendo tranquilidade para o seu dia a dia.",
      },
      {
        title: "Assistência 24 horas",
        desc: "Suporte em situações como pane, reboque, troca de pneus, chaveiro e carga de bateria, entre outros benefícios.",
      },
      {
        title: "Atendimento personalizado",
        desc: "Pós-venda qualificado, auxílio em assistências e quebra de vidros, acompanhamento de pagamentos e suporte em sinistros.",
      },
    ],
  },
  {
    icon: Stethoscope,
    title: "Plano de Saúde",
    desc: "Encontre o plano ideal para você, sua família ou sua empresa, comparando as melhores opções de operadoras, redes e benefícios.",
    benefits: [
      {
        title: "Acesso à rede de saúde",
        desc: "Conte com hospitais, clínicas, laboratórios e profissionais qualificados para atender você.",
      },
      {
        title: "Benefício que valoriza sua equipe",
        desc: "Oferecer plano de saúde ajuda a atrair e reter talentos, além de demonstrar cuidado com o bem-estar dos colaboradores da sua empresa.",
      },
      {
        title: "Opções para cada perfil",
        desc: "Planos individuais, familiares e empresariais, com diferentes redes, acomodações e faixas de preço.",
      },
      {
        title: "Escolha com orientação",
        desc: "Compare operadoras com o suporte da Freeman Corretora para encontrar o plano mais adequado às necessidades da sua empresa e dos seus familiares.",
      },
    ],
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    desc: "Proteção para sua casa e seus bens, além de assistências para facilitar o seu dia a dia.",
    benefits: [
      {
        title: "Proteção do seu patrimônio",
        desc: "Proteja sua residência contra incêndio, danos elétricos, vendaval, roubo e outros riscos, de acordo com as suas necessidades.",
      },
      {
        title: "Assistência residencial",
        desc: "Conte com serviços como chaveiro, eletricista, encanador e outras assistências para imprevistos do dia a dia.",
      },
      {
        title: "Suporte após a contratação",
        desc: "Conte com a Freeman Corretora na hora de acionar sua assistência e para acompanhar um processo de sinistro.",
      },
      {
        title: "Cobertura personalizada",
        desc: "O seguro pode ser adaptado às características do imóvel e às necessidades de cada cliente, evitando pagar por proteções desnecessárias.",
      },
    ],
  },
  {
    icon: Building2,
    title: "Seguro Empresarial",
    desc: "Soluções para proteger o patrimônio e a continuidade do seu negócio diante de imprevistos.",
    benefits: [
      {
        title: "Proteção do patrimônio",
        desc: "Proteção para instalações, equipamentos, móveis, estoques e outros bens essenciais para o funcionamento da empresa.",
      },
      {
        title: "Continuidade do negócio",
        desc: "Coberturas que podem ajudar a reduzir os impactos financeiros de imprevistos e contribuir para a retomada das atividades.",
      },
      {
        title: "Responsabilidade civil",
        desc: "Possibilidade de contratar proteção contra danos causados involuntariamente a terceiros.",
      },
      {
        title: "Soluções para cada empresa",
        desc: "As coberturas podem ser personalizadas considerando o segmento, porte, estrutura e principais riscos de cada negócio.",
      },
    ],
  },
  {
    icon: Building,
    title: "Seguro Condomínio",
    desc: "Proteção para condomínios residenciais e comerciais, com coberturas para a estrutura, áreas comuns e responsabilidades.",
    benefits: [
      {
        title: "Proteção da estrutura",
        desc: "Cobertura para danos à estrutura e às áreas comuns do condomínio decorrentes dos eventos previstos na apólice.",
      },
      {
        title: "Proteção de equipamentos",
        desc: "Possibilidade de cobertura para portões, elevadores, sistemas elétricos e outros equipamentos pertencentes ao condomínio.",
      },
      {
        title: "Responsabilidade civil",
        desc: "Coberturas que podem proteger o condomínio e seus responsáveis em situações envolvendo danos a moradores, visitantes ou terceiros.",
      },
      {
        title: "Coberturas personalizadas",
        desc: "O seguro pode ser estruturado conforme as características, necessidades e riscos de cada condomínio.",
      },
    ],
  },
  {
    icon: HeartPulse,
    title: "Seguro de Vida",
    desc: "Proteção financeira para você e sua família nos momentos em que mais precisarem.",
    benefits: [
      {
        title: "Proteção para quem você ama",
        desc: "Suporte financeiro aos beneficiários em caso de falecimento do segurado, conforme o capital contratado.",
      },
      {
        title: "Proteção também em vida",
        desc: "É possível contar com coberturas para invalidez, doenças graves e outras situações previstas na apólice.",
      },
      {
        title: "Segurança financeira",
        desc: "Ajuda a preservar a estabilidade financeira da família diante de situações inesperadas.",
      },
      {
        title: "Proteção personalizada",
        desc: "Capitais segurados e coberturas podem ser definidos de acordo com o momento de vida, as necessidades e os objetivos de cada cliente.",
      },
    ],
  },
  {
    icon: Plane,
    title: "Seguro Viagem",
    desc: "Viaje com tranquilidade e conte com proteção e assistência para imprevistos no Brasil ou no exterior.",
    benefits: [
      {
        title: "Assistência médica e hospitalar",
        desc: "Suporte para despesas médicas e hospitalares decorrentes de emergências durante a sua viagem.",
      },
      {
        title: "Proteção para imprevistos",
        desc: "O seguro viagem pode oferecer proteção para bagagem, atrasos, cancelamentos e outras situações.",
      },
      {
        title: "Viagens nacionais e internacionais",
        desc: "Opções de proteção para diferentes destinos, períodos de viagem e perfis de viajantes.",
      },
      {
        title: "Suporte durante a viagem",
        desc: "Em caso de emergência, o viajante conta com os canais de assistência da seguradora para receber orientação e suporte.",
      },
    ],
  },
  {
    icon: HandCoins,
    title: "Consórcio",
    desc: "Planeje a conquista do seu imóvel, veículo ou outros projetos de forma organizada e estratégica.",
    benefits: [
      {
        title: "Planejamento para suas conquistas",
        desc: "Uma alternativa para quem deseja se organizar financeiramente para adquirir um bem ou realizar um projeto.",
      },
      {
        title: "Sem juros de financiamento",
        desc: "Alcance seus objetivos sem os juros de um financiamento tradicional.",
      },
      {
        title: "Diferentes possibilidades",
        desc: "Existem grupos para aquisição de imóveis, automóveis, motocicletas, veículos pesados e contratação de determinados serviços.",
      },
      {
        title: "Poder de compra",
        desc: "Após a contemplação e seguindo as regras do grupo, a carta de crédito permite negociar a aquisição do bem dentro das condições estabelecidas.",
      },
    ],
  },
];

const PAGE_TITLE = "Serviços — Seguros | Freeman Corretora";
const PAGE_DESCRIPTION =
  "8 linhas de seguros: automóvel, saúde, residencial, empresarial, condomínio, vida, viagem e consórcio. Atendimento dedicado em Santos/SP.";

export default function ServicosPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

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
      <PageHero
        eyebrow="O que fazemos"
        title="Nossas Especialidades"
        lead="Apólices desenhadas sob medida — para o seu carro, sua família ou o seu negócio."
      />

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

          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
            {SERVICES.map(({ icon: Icon, title, desc, benefits }, i) => (
              <Reveal key={title} delay={(i % 2) * 0.1}>
                <SpotlightCard className={cardClass}>
                  <span aria-hidden="true" className={cardEdgeClass} />
                  <div className="relative flex flex-col p-6 md:p-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] bg-navy shadow-e2 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl leading-tight">{title}</h3>
                    </div>
                    <p className="mt-4 font-sans text-sm leading-relaxed text-graphite">{desc}</p>
                    <div className="mt-5 border-t border-divider">
                      <button
                        type="button"
                        id={`service-trigger-${i}`}
                        aria-expanded={expandedService === i}
                        aria-controls={`service-benefits-${i}`}
                        onClick={() => setExpandedService((current) => (current === i ? null : i))}
                        className="flex min-h-12 w-full cursor-pointer items-center justify-between gap-3 rounded-[4px] py-3 text-left font-sans text-sm font-bold text-navy hover:text-navy-medium"
                      >
                        <span>
                          {expandedService === i
                            ? "Ocultar detalhes"
                            : title === "Consórcio"
                              ? "Ver opções e benefícios"
                              : "Ver coberturas e benefícios"}
                          <span className="sr-only"> de {title}</span>
                        </span>
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-4 w-4 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${expandedService === i ? "rotate-180" : ""}`}
                        />
                      </button>
                      <motion.div
                        id={`service-benefits-${i}`}
                        role="region"
                        aria-labelledby={`service-trigger-${i}`}
                        aria-hidden={expandedService !== i}
                        inert={expandedService !== i}
                        initial={false}
                        animate={{
                          height: expandedService === i ? "auto" : 0,
                          opacity: expandedService === i ? 1 : 0,
                        }}
                        transition={{ duration: reduceMotion ? 0 : DUR_BASE, ease: EASE_OUT_QUINT }}
                        className="overflow-hidden"
                      >
                        <dl className="space-y-4 pb-2 pt-3">
                          {benefits.map((benefit) => (
                            <div key={benefit.title}>
                              <dt className="font-sans text-sm font-bold text-navy">
                                {benefit.title}
                              </dt>
                              <dd className="mt-1 font-sans text-sm leading-relaxed text-graphite">
                                {benefit.desc}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </motion.div>
                    </div>
                    <Link
                      to={`/contato?seguro=${encodeURIComponent(title)}`}
                      className="mt-4 inline-flex items-center justify-center self-start rounded-[4px] border border-navy px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy hover:text-white hover:shadow-e2"
                    >
                      Solicitar Cotação
                    </Link>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mesh-light py-24">
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
                <div className="group relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[4px] border border-divider bg-background shadow-e1 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-navy group-hover:shadow-e2">
                    <Icon
                      className="h-7 w-7 text-navy transition-transform duration-200 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="tabular mt-4 font-sans text-xs font-bold uppercase tracking-widest text-navy-medium">
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
      <section className="mesh-navy grain relative overflow-hidden py-20">
        <Reveal className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left">
          <>
            <div>
              <h2 className="text-3xl md:text-4xl">Não encontrou o que procura?</h2>
              <p className="mt-3 font-sans text-base text-white/80">
                Nossa equipe desenha apólices sob medida para operações complexas.
              </p>
            </div>
            <Link
              to="/contato"
              className="sheen-navy inline-flex shrink-0 items-center justify-center rounded-[4px] bg-white px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy-medium shadow-e2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-e4"
            >
              Falar com Especialista
            </Link>
          </>
        </Reveal>
      </section>
    </>
  );
}
