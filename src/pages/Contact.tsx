import { useCallback, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import {
  breadcrumbSchema,
  organizationSchema,
  pageSchema,
  schemaGraph,
} from "@/lib/structured-data";

const SEGUROS = [
  "Seguro Automóvel",
  "Plano de Saúde",
  "Seguro Residencial",
  "Seguro Empresarial",
  "Seguro Condomínio",
  "Seguro de Vida",
  "Seguro Viagem",
  "Consórcio",
  "Outro",
];

type FormKey = "nome" | "empresa" | "cargo" | "telefone" | "email" | "seguro" | "mensagem";

const VALIDATED_FIELDS: FormKey[] = ["nome", "empresa", "telefone", "email", "seguro"];

function getError(form: Record<FormKey, string>, k: FormKey): string {
  if (!VALIDATED_FIELDS.includes(k)) return "";
  if (k === "seguro") return form.seguro === "" ? "Selecione uma opção" : "";
  if (k === "email") {
    if (!form.email.trim()) return "Campo obrigatório";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "E-mail inválido";
    return "";
  }
  return form[k].trim() === "" ? "Campo obrigatório" : "";
}

const PAGE_TITLE = "Contato — Freeman Corretora | Santos/SP";
const PAGE_DESCRIPTION =
  "Solicite cotação ou fale com um especialista da Freeman Corretora. Atendimento dedicado em Santos/SP e em todo o Brasil.";

export default function ContatoPage() {
  const [searchParams] = useSearchParams();
  const seguroParam = searchParams.get("seguro") ?? "";

  const [form, setForm] = useState<Record<FormKey, string>>({
    nome: "",
    empresa: "",
    cargo: "",
    telefone: "",
    email: "",
    seguro: SEGUROS.includes(seguroParam) ? seguroParam : "",
    mensagem: "",
  });

  const [touched, setTouched] = useState<Set<FormKey>>(new Set());
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const markTouched = useCallback((k: FormKey) => setTouched((prev) => new Set([...prev, k])), []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      markTouched(e.target.name as FormKey);
    },
    [markTouched],
  );

  const inputClass = (hasError: boolean) =>
    [
      "w-full rounded-[4px] border bg-background px-4 py-3 font-sans text-sm text-graphite focus:outline-none focus:ring-2",
      hasError
        ? "border-accent-red focus:border-accent-red focus:ring-accent-red/20"
        : "border-divider focus:border-navy focus:ring-navy/20",
    ].join(" ");

  const nomeError = touched.has("nome") ? getError(form, "nome") : "";
  const empresaError = touched.has("empresa") ? getError(form, "empresa") : "";
  const telefoneError = touched.has("telefone") ? getError(form, "telefone") : "";
  const emailError = touched.has("email") ? getError(form, "email") : "";
  const seguroError = touched.has("seguro") ? getError(form, "seguro") : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(new Set(VALIDATED_FIELDS));
    if (VALIDATED_FIELDS.some((k) => getError(form, k))) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Falha no envio");
      setStatus("success");
      setForm({
        nome: "",
        empresa: "",
        cargo: "",
        telefone: "",
        email: "",
        seguro: "",
        mensagem: "",
      });
      setTouched(new Set());
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/contato"
        jsonLd={schemaGraph(
          organizationSchema,
          pageSchema("ContactPage", "/contato"),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Contato", path: "/contato" },
          ]),
        )}
      />
      <PageHero
        eyebrow="Fale conosco"
        title="Vamos conversar sobre a proteção do seu negócio."
        lead="Nossa equipe responde em até 1 dia útil. Para urgências, prefira o WhatsApp — temos atendimento dedicado para sinistros e dúvidas técnicas."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
          {/* INFO */}
          <div>
            <h2 className="text-display-3">Canais diretos</h2>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Endereço",
                  value: "Av. Senador Feijó, 686 — Sala 1525\nSantos/SP",
                },
                { icon: Phone, label: "Telefone", value: "(13) 99728-1866" },
                { icon: Mail, label: "E-mail", value: "contato@freemanseguros.com.br" },
                { icon: Clock, label: "Horário", value: "Segunda a Sexta · 9h às 18h" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="group flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] border border-divider bg-background shadow-e1 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-navy group-hover:shadow-e2">
                    <Icon className="h-5 w-5 text-navy" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-sans text-xs font-bold uppercase tracking-widest text-navy-medium">
                      {label}
                    </div>
                    <div className="mt-1 whitespace-pre-line font-sans text-sm text-graphite">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sheen-navy mt-10 inline-flex w-full items-center justify-center gap-3 rounded-[4px] bg-whatsapp px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy shadow-e2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-e4 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>

            {/* MAP EMBED */}
            <div className="mt-12 overflow-hidden rounded-[4px] border border-divider shadow-e2">
              <iframe
                title="Localização Freeman Corretora — Santos/SP"
                src="https://www.google.com/maps?q=Av.+Senador+Feij%C3%B3,+686+-+Santos,+SP&output=embed"
                className="block h-64 w-full sm:h-72"
                loading="lazy"
              />
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="h-fit rounded-[4px] border border-divider bg-offwhite p-8 shadow-e2 md:p-10"
          >
            <h2 className="text-2xl">Solicite uma cotação</h2>
            <p className="mt-2 font-sans text-sm text-graphite">
              Preencha os campos abaixo. Retornaremos com uma proposta personalizada.
            </p>
            <p className="mt-1 font-sans text-xs text-graphite/70">* Campos obrigatórios</p>

            <div className="mt-8 space-y-5">
              <Field name="nome" label="Nome Completo *" error={nomeError}>
                <input
                  type="text"
                  required
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!nomeError}
                  aria-describedby={nomeError ? "nome-error" : undefined}
                  className={inputClass(!!nomeError)}
                />
              </Field>

              <Field name="empresa" label="CPF/CNPJ *" error={empresaError}>
                <input
                  type="text"
                  required
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!empresaError}
                  aria-describedby={empresaError ? "empresa-error" : undefined}
                  className={inputClass(!!empresaError)}
                />
              </Field>

              <Field name="cargo" label="Cargo">
                <input
                  type="text"
                  name="cargo"
                  value={form.cargo}
                  onChange={handleChange}
                  className="w-full rounded-[4px] border border-divider bg-background px-4 py-3 font-sans text-sm text-graphite focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
                />
              </Field>

              <Field name="telefone" label="Telefone Comercial *" error={telefoneError}>
                <input
                  type="tel"
                  required
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!telefoneError}
                  aria-describedby={telefoneError ? "telefone-error" : undefined}
                  className={inputClass(!!telefoneError)}
                />
              </Field>

              <Field name="email" label="E-mail Corporativo *" error={emailError}>
                <input
                  type="email"
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? "email-error" : undefined}
                  className={inputClass(!!emailError)}
                />
              </Field>

              <Field name="seguro" label="Seguro de Interesse *" error={seguroError}>
                <select
                  required
                  name="seguro"
                  value={form.seguro}
                  onChange={(e) => {
                    handleChange(e);
                    markTouched("seguro");
                  }}
                  onBlur={handleBlur}
                  aria-invalid={!!seguroError}
                  aria-describedby={seguroError ? "seguro-error" : undefined}
                  className={inputClass(!!seguroError)}
                >
                  <option value="">Selecione…</option>
                  {SEGUROS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              <Field name="mensagem" label="Mensagem">
                <textarea
                  rows={4}
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  className="w-full rounded-[4px] border border-divider bg-background px-4 py-3 font-sans text-sm text-graphite focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
                />
              </Field>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="sheen block w-full rounded-[4px] bg-navy px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-white shadow-e2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-medium hover:shadow-e4 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-e2"
              >
                {status === "submitting" ? "Enviando…" : "Enviar Solicitação"}
              </button>

              {status === "success" && (
                <p className="text-center font-sans text-sm font-medium text-green-700">
                  Mensagem enviada! Retornaremos em breve.
                </p>
              )}

              {status === "error" && (
                <p className="text-center font-sans text-sm font-medium text-accent-red">
                  Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp/telefone.
                </p>
              )}

              <p className="text-center font-sans text-xs text-graphite/80">
                Ao enviar, você concorda com nossa{" "}
                <Link to="/privacidade" className="underline underline-offset-2 hover:text-navy">
                  política de privacidade
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  error,
  children,
}: {
  name: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-navy-medium">
        {label}
      </span>
      {children}
      {error && (
        <span
          id={`${name}-error`}
          role="alert"
          className="mt-1.5 block font-sans text-xs font-medium text-accent-red"
        >
          {error}
        </span>
      )}
    </label>
  );
}
