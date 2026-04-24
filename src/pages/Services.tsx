import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HardHat,
  Briefcase,
  Building2,
  Truck,
  HeartPulse,
  ShieldCheck,
  FileCheck2,
  PackageCheck,
  Search,
  ClipboardList,
  PenLine,
  LifeBuoy,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";

const SERVICES = [
  {
    icon: HardHat,
    title: "Riscos de Engenharia",
    desc: "Cobertura para obras civis, montagens industriais e instalações em construção, com análise técnica do projeto.",
  },
  {
    icon: Briefcase,
    title: "D&O — Responsabilidade de Administradores",
    desc: "Proteção patrimonial pessoal de executivos, conselheiros e administradores frente a decisões de gestão.",
  },
  {
    icon: Building2,
    title: "Patrimonial Empresarial",
    desc: "Proteção integral de imóveis, equipamentos e estoques contra incêndio, roubo, danos elétricos e mais.",
  },
  {
    icon: Truck,
    title: "Frota & Auto Empresarial",
    desc: "Apólices únicas para frotas leves e pesadas, com franquia inteligente e gestão centralizada de sinistros.",
  },
  {
    icon: HeartPulse,
    title: "Vida em Grupo",
    desc: "Benefícios para colaboradores com coberturas customizadas, capital segurado e adesão simplificada.",
  },
  {
    icon: ShieldCheck,
    title: "Responsabilidade Civil",
    desc: "RC Geral, Profissional e Operações, protegendo sua empresa de danos causados a terceiros.",
  },
  {
    icon: FileCheck2,
    title: "Garantia",
    desc: "Seguro Garantia para licitações, contratos públicos e privados, judicial e aduaneiro.",
  },
  {
    icon: PackageCheck,
    title: "Transportes",
    desc: "Cobertura nacional e internacional para cargas, RCTR-C e RCF-DC, com atendimento 24h.",
  },
];

const PROCESS = [
  { icon: Search, title: "Diagnóstico", desc: "Mapeamos riscos e necessidades específicas da sua operação." },
  { icon: ClipboardList, title: "Cotação", desc: "Concorrência entre as principais seguradoras do mercado." },
  { icon: PenLine, title: "Contratação", desc: "Apólice estruturada com cláusulas adequadas à sua realidade." },
  { icon: LifeBuoy, title: "Sinistro", desc: "Acompanhamento dedicado da abertura à indenização." },
];

export default function ServicosPage() {
  useEffect(() => {
    document.title = "Serviços — Seguros Corporativos | Freeman Corretora";
  }, []);

  return (
    <SiteLayout>
      {/* INTERNAL HERO */}
      <section className="bg-navy-medium py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
            O que fazemos
          </p>
          <h1 className="mt-4 text-5xl !text-white md:text-6xl">Nossas Especialidades</h1>
          <p className="mt-5 font-sans text-lg text-white/80">
            Apólices desenhadas para a complexidade real do seu negócio.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="flex flex-col gap-6 border border-divider bg-background p-6 sm:flex-row sm:p-8"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-navy">
                  <Icon className="h-9 w-9 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl">{title}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-graphite">{desc}</p>
                  <Link
                    to="/contato"
                    className="mt-5 inline-flex items-center justify-center rounded-[4px] border border-navy px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-wider text-navy transition-colors hover:bg-navy hover:text-white"
                  >
                    Solicitar Cotação
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface-soft py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-navy-medium">
              Metodologia
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl">Como trabalhamos</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {PROCESS.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center border border-divider bg-background">
                  <Icon className="h-7 w-7 text-navy" strokeWidth={1.5} />
                </div>
                <div className="mt-4 font-sans text-xs font-bold uppercase tracking-widest text-navy-medium">
                  Etapa {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-xl">{title}</h3>
                <p className="mt-2 font-sans text-sm text-graphite">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-medium py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl !text-white md:text-4xl">Não encontrou o que procura?</h2>
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
        </div>
      </section>
    </SiteLayout>
  );
}
