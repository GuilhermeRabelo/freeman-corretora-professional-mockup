import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5513997281866?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o.";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(new Set(VALIDATED_FIELDS));
    if (VALIDATED_FIELDS.some((k) => getError(form, k))) return;
    const subject = `Solicitação de cotação — ${form.seguro || "Seguro Corporativo"}`;
    const body = [
      `Nome: ${form.nome}`,
      `Empresa (CNPJ): ${form.empresa}`,
      `Cargo: ${form.cargo}`,
      `Telefone: ${form.telefone}`,
      `E-mail: ${form.email}`,
      `Seguro de interesse: ${form.seguro}`,
      "",
      "Mensagem:",
      form.mensagem,
    ].join("\n");
    window.location.href = `mailto:contato@freemanseguros.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESCRIPTION} />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={PAGE_DESCRIPTION} />
      <meta property="og:type" content="website" />
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
          {/* INFO */}
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-navy-medium">
              Fale conosco
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl">
              Vamos conversar sobre a proteção do seu negócio.
            </h1>
            <p className="mt-6 font-sans text-base leading-relaxed text-graphite">
              Nossa equipe responde em até 1 dia útil. Para urgências, prefira o WhatsApp — temos
              atendimento dedicado para sinistros e dúvidas técnicas.
            </p>

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
                <div key={label} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-divider">
                    <Icon className="h-5 w-5 text-navy" strokeWidth={1.5} />
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
              className="mt-10 inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-[4px] bg-whatsapp px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>

            {/* MAP EMBED */}
            <div className="mt-12 overflow-hidden rounded-[4px] border border-divider shadow-sm">
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
            className="rounded-[4px] border border-divider bg-offwhite p-8 md:p-10"
          >
            <h2 className="text-2xl">Solicite uma cotação</h2>
            <p className="mt-2 font-sans text-sm text-graphite">
              Preencha os campos abaixo. Retornaremos com uma proposta personalizada.
            </p>

            <div className="mt-8 space-y-5">
              <Field label="Nome Completo *" error={nomeError}>
                <input
                  type="text"
                  required
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass(!!nomeError)}
                />
              </Field>

              <Field label="Empresa (CNPJ) *" error={empresaError}>
                <input
                  type="text"
                  required
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass(!!empresaError)}
                />
              </Field>

              <Field label="Cargo">
                <input
                  type="text"
                  name="cargo"
                  value={form.cargo}
                  onChange={handleChange}
                  className="w-full rounded-[4px] border border-divider bg-background px-4 py-3 font-sans text-sm text-graphite focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
                />
              </Field>

              <Field label="Telefone Comercial *" error={telefoneError}>
                <input
                  type="tel"
                  required
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass(!!telefoneError)}
                />
              </Field>

              <Field label="E-mail Corporativo *" error={emailError}>
                <input
                  type="email"
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass(!!emailError)}
                />
              </Field>

              <Field label="Seguro de Interesse *" error={seguroError}>
                <select
                  required
                  name="seguro"
                  value={form.seguro}
                  onChange={(e) => {
                    handleChange(e);
                    markTouched("seguro");
                  }}
                  onBlur={handleBlur}
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

              <Field label="Mensagem">
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
                className="block w-full rounded-[4px] bg-navy px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-navy-medium"
              >
                Enviar Solicitação
              </button>

              <p className="text-center font-sans text-xs text-graphite/80">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
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
        <span className="mt-1.5 block font-sans text-xs font-medium text-accent-red">{error}</span>
      )}
    </label>
  );
}
