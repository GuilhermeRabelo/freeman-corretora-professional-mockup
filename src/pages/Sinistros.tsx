import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Car,
  Home,
  Building2,
  Building,
  HeartPulse,
  Stethoscope,
  Plane,
  ChevronDown,
  Phone,
  FileText,
  MessageCircle,
  Clock,
  ShieldCheck,
  FileSearch,
  MessagesSquare,
  ClipboardCheck,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import shieldWhite from "@/assets/logo-shield-white.png";
import { WHATSAPP_URL } from "@/lib/constants";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import {
  breadcrumbSchema,
  organizationSchema,
  pageSchema,
  schemaGraph,
} from "@/lib/structured-data";

type ClaimType = {
  id: string;
  icon: typeof Car;
  title: string;
  guidance: string;
  documents: string[];
  emergencyPhoneLabel: string;
  emergencyPhone: string;
  whatsappMessage: string;
};

// Dados ilustrativos — confirmar documentos, telefones e SLA reais com o cliente antes de publicar.
const CLAIM_TYPES: ClaimType[] = [
  {
    id: "auto",
    icon: Car,
    title: "Seguro Automóvel",
    guidance:
      "Garanta sua segurança e a de terceiros antes de tudo. Não mova o veículo se houver risco, acione o guincho pela assistência 24h e fotografe o local.",
    documents: [
      "CNH do condutor e CRLV do veículo",
      "Boletim de Ocorrência (furto, roubo ou envolvimento de terceiros)",
      "Fotos do veículo, do local e dos danos",
      "Dados e CNH do(s) terceiro(s) envolvido(s), se houver",
    ],
    emergencyPhoneLabel: "Assistência 24h",
    emergencyPhone: "0800-000-0000",
    whatsappMessage: "Olá, preciso comunicar um sinistro de Seguro Automóvel.",
  },
  {
    id: "residencial",
    icon: Home,
    title: "Seguro Residencial",
    guidance:
      "Em caso de incêndio, alagamento ou arrombamento, interrompa o risco (registro de energia/água) com segurança e não descarte itens danificados antes da vistoria.",
    documents: [
      "Boletim de Ocorrência (roubo, furto ou vandalismo)",
      "Fotos e vídeos dos danos e do imóvel",
      "Comprovante de propriedade ou contrato de locação",
      "Notas fiscais dos bens danificados, quando disponíveis",
    ],
    emergencyPhoneLabel: "Assistência 24h",
    emergencyPhone: "0800-000-0000",
    whatsappMessage: "Olá, preciso comunicar um sinistro de Seguro Residencial.",
  },
  {
    id: "empresarial",
    icon: Building2,
    title: "Seguro Empresarial",
    guidance:
      "Preserve o local do sinistro sempre que possível para a perícia, documente perdas operacionais e avise a Freeman antes de qualquer reparo definitivo.",
    documents: [
      "Boletim de Ocorrência, quando aplicável",
      "Fotos e vídeos do local e dos danos",
      "Relação de bens/estoque atingidos com notas fiscais",
      "Documentos societários e contrato/apólice vigente",
    ],
    emergencyPhoneLabel: "Central de Sinistros 24h",
    emergencyPhone: "0800-000-0000",
    whatsappMessage: "Olá, preciso comunicar um sinistro de Seguro Empresarial.",
  },
  {
    id: "condominio",
    icon: Building,
    title: "Seguro Condomínio",
    guidance:
      "Comunique síndico e Freeman assim que identificar o dano em áreas comuns ou estrutura, e evite reparos definitivos antes da vistoria da seguradora.",
    documents: [
      "Ata de assembleia ou comunicado do síndico sobre o ocorrido",
      "Fotos e vídeos do dano nas áreas comuns/estrutura",
      "Orçamentos de reparo, quando já solicitados",
      "Convenção de condomínio e apólice vigente",
    ],
    emergencyPhoneLabel: "Assistência 24h",
    emergencyPhone: "0800-000-0000",
    whatsappMessage: "Olá, preciso comunicar um sinistro de Seguro Condomínio.",
  },
  {
    id: "vida",
    icon: HeartPulse,
    title: "Seguro de Vida",
    guidance:
      "A família ou beneficiário deve entrar em contato o quanto antes; nossa equipe orienta com sensibilidade cada etapa da solicitação de indenização.",
    documents: [
      "Certidão de óbito ou laudo médico (invalidez/doença grave)",
      "Documento de identidade do(a) segurado(a) e do(s) beneficiário(s)",
      "Apólice ou número de proposta",
      "Dados bancários do(s) beneficiário(s) para pagamento",
    ],
    emergencyPhoneLabel: "Central de Atendimento",
    emergencyPhone: "0800-000-0000",
    whatsappMessage: "Olá, preciso de orientação sobre um sinistro de Seguro de Vida.",
  },
  {
    id: "saude",
    icon: Stethoscope,
    title: "Plano de Saúde",
    guidance:
      "Para reembolso ou negativa de cobertura, reúna a documentação médica completa; nossa equipe intermedia diretamente com a operadora.",
    documents: [
      "Pedido médico e relatório com CID, quando aplicável",
      "Notas fiscais/recibos e comprovante de pagamento",
      "Carteirinha do plano e dados do beneficiário",
      "Guia de solicitação/autorização, se houver negativa",
    ],
    emergencyPhoneLabel: "Central de Atendimento",
    emergencyPhone: "0800-000-0000",
    whatsappMessage: "Olá, preciso de ajuda com um reembolso/sinistro do meu Plano de Saúde.",
  },
  {
    id: "viagem",
    icon: Plane,
    title: "Seguro Viagem",
    guidance:
      "Em caso de emergência médica, cancelamento ou extravio de bagagem, acione a central da seguradora antes de arcar com despesas por conta própria.",
    documents: [
      "Bilhete aéreo e comprovantes da viagem",
      "Relatório médico ou boletim de ocorrência (bagagem extraviada)",
      "Notas fiscais de despesas emergenciais",
      "Apólice ou número do certificado de seguro",
    ],
    emergencyPhoneLabel: "Assistência 24h (Internacional)",
    emergencyPhone: "0800-000-0000",
    whatsappMessage: "Olá, preciso comunicar um sinistro de Seguro Viagem.",
  },
];

// Dado ilustrativo — mesmo valor usado em Index.tsx (CLAIMS_STATS); confirmar SLA real antes de publicar.
const FIRST_RESPONSE = {
  value: "24h",
  label: "Tempo médio de 1ª resposta após a comunicação do sinistro",
};

const FREEMAN_ROLE = [
  {
    icon: FileSearch,
    title: "Abertura e triagem",
    desc: "Organizamos a documentação e abrimos o sinistro junto à seguradora.",
  },
  {
    icon: MessagesSquare,
    title: "Interlocução técnica",
    desc: "Falamos diretamente com o regulador/perito, evitando ruído de comunicação.",
  },
  {
    icon: ClipboardCheck,
    title: "Conferência da proposta",
    desc: "Revisamos valores e condições da indenização antes da sua aceitação.",
  },
  {
    icon: ShieldCheck,
    title: "Acompanhamento até o fim",
    desc: "Seguimos disponíveis até a liquidação e o pagamento da indenização.",
  },
];

const PAGE_TITLE = "Sinistros — Freeman Corretora | Santos/SP";
const PAGE_DESCRIPTION =
  "Sofreu um sinistro? Veja orientação imediata, documentos necessários e fale agora pelo WhatsApp com a Freeman Corretora.";

export default function SinistrosPage() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());

  const toggle = (id: string) =>
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  return (
    <>
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/sinistros"
        jsonLd={schemaGraph(
          organizationSchema,
          pageSchema("WebPage", "/sinistros"),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Sinistros", path: "/sinistros" },
          ]),
        )}
      />

      {/* HERO */}
      <PageHero
        eyebrow="Central de Sinistros"
        title="Sinistro é o momento em que a apólice prova seu valor."
        lead="Selecione o tipo de seguro abaixo para orientação imediata, documentos necessários e um canal direto com a Freeman."
        actions={
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sheen-navy inline-flex items-center justify-center gap-3 rounded-[4px] bg-whatsapp px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy shadow-e2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-e4"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        }
      />

      {/* CLAIM TYPES — ACCORDION GRID */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-14 flex flex-col gap-6 border-b border-divider pb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-navy-medium">
                  Selecione o tipo de seguro
                </p>
                <h2 className="mt-3 text-4xl md:text-5xl">O que você precisa agora</h2>
              </div>
              <p className="max-w-md font-sans text-sm leading-relaxed text-graphite">
                Cada tipo de seguro tem um fluxo próprio de documentos e contatos. Toque em um card
                para ver a orientação completa.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CLAIM_TYPES.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 0.08}>
                <ClaimCard
                  item={item}
                  isExpanded={expandedIds.has(item.id)}
                  onToggle={() => toggle(item.id)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FIRST RESPONSE */}
      <section className="mesh-light py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy shadow-e3">
              <Clock className="h-8 w-8 text-white" strokeWidth={1.5} />
            </div>
            <div className="tabular mt-6 font-sans text-4xl font-black text-navy md:text-5xl">
              {FIRST_RESPONSE.value}
            </div>
            <p className="mt-3 font-sans text-sm font-semibold uppercase tracking-widest text-navy-medium">
              {FIRST_RESPONSE.label}
            </p>
          </Reveal>
        </div>
      </section>

      {/* FREEMAN'S ROLE */}
      <section className="mesh-navy grain relative overflow-hidden py-24 text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-14 text-center">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
                Como atuamos
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl">Você não enfrenta a regulação sozinho.</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {FREEMAN_ROLE.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="group relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/35">
                    <Icon
                      className="h-7 w-7 text-white transition-transform duration-200 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-4 text-xl">{title}</h3>
                  <p className="mt-2 font-sans text-sm text-white/70">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <img
          src={shieldWhite}
          alt=""
          aria-hidden="true"
          width={320}
          height={320}
          className="pointer-events-none absolute -left-16 -bottom-16 h-[320px] w-[320px] opacity-[0.05]"
          loading="lazy"
        />
      </section>

      {/* CTA */}
      <section className="mesh-navy grain relative overflow-hidden py-20">
        <Reveal className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left">
          <>
            <div>
              <h2 className="text-3xl md:text-4xl">
                Já teve um sinistro e não sabe por onde começar?
              </h2>
              <p className="mt-3 font-sans text-base text-white/80">
                Fale com a nossa equipe agora mesmo pelo WhatsApp ou pelo formulário de contato.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="sheen-navy inline-flex items-center justify-center gap-3 rounded-[4px] bg-whatsapp px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy shadow-e2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-e4"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
              <Link
                to="/contato"
                className="sheen-navy inline-flex items-center justify-center rounded-[4px] bg-white px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy-medium shadow-e2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-e4"
              >
                Ir para Contato
              </Link>
            </div>
          </>
        </Reveal>
      </section>
    </>
  );
}

function ClaimCard({
  item,
  isExpanded,
  onToggle,
}: {
  item: ClaimType;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const panelId = `claim-panel-${item.id}`;
  const buttonId = `claim-trigger-${item.id}`;
  const Icon = item.icon;
  const waHref = `https://wa.me/5513997281866?text=${encodeURIComponent(item.whatsappMessage)}`;

  return (
    <div className="group rounded-[4px] border border-divider bg-background shadow-e1 transition-all duration-300 hover:border-navy hover:shadow-e2">
      <button
        type="button"
        id={buttonId}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center gap-4 p-6 text-left"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] bg-navy">
          <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
        </div>
        <span className="flex-1 font-display text-xl leading-tight text-navy">{item.title}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-navy-medium transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-divider px-6 pb-6 pt-5">
              <p className="font-sans text-sm leading-relaxed text-graphite">{item.guidance}</p>

              <div className="mt-5">
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-navy-medium">
                  Documentos necessários
                </p>
                <ul className="mt-3 space-y-2">
                  {item.documents.map((doc) => (
                    <li key={doc} className="flex gap-2 font-sans text-sm text-graphite">
                      <FileText
                        className="mt-0.5 h-4 w-4 shrink-0 text-navy-medium"
                        strokeWidth={1.5}
                      />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex items-center gap-3 border-t border-divider pt-5">
                <Phone className="h-4 w-4 shrink-0 text-navy-medium" strokeWidth={1.5} />
                <span className="font-sans text-sm text-graphite">
                  {item.emergencyPhoneLabel}:{" "}
                  <strong className="text-navy">{item.emergencyPhone}</strong>
                </span>
              </div>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-[4px] bg-whatsapp px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider text-navy transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" />
                Comunicar Sinistro no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
