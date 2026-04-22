import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Freeman Corretora | Santos/SP" },
      {
        name: "description",
        content:
          "Fale com a Freeman Corretora. Solicite cotação de seguros corporativos por WhatsApp, e-mail ou formulário.",
      },
      { property: "og:title", content: "Contato — Freeman Corretora" },
      {
        property: "og:description",
        content: "Vamos conversar sobre a proteção do seu negócio.",
      },
    ],
  }),
  component: ContatoPage,
});

const WHATSAPP_URL =
  "https://wa.me/5513000000000?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o.";

const SEGUROS = [
  "Patrimonial Empresarial",
  "Frota & Auto Empresarial",
  "Vida em Grupo",
  "Responsabilidade Civil",
  "D&O",
  "Riscos de Engenharia",
  "Garantia",
  "Transportes",
  "Outro",
];

function ContatoPage() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    cargo: "",
    telefone: "",
    email: "",
    seguro: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    window.location.href = `mailto:contato@freemancorretora.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  return (
    <SiteLayout>
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
                { icon: MapPin, label: "Endereço", value: "Av. Ana Costa, 000 — Gonzaga\nSantos/SP — CEP 11060-000" },
                { icon: Phone, label: "Telefone", value: "+55 (13) 0000-0000" },
                { icon: Mail, label: "E-mail", value: "contato@freemancorretora.com.br" },
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
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-sm bg-whatsapp px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-navy transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-sm border border-divider bg-offwhite p-8 md:p-10"
          >
            <h2 className="text-2xl">Solicite uma cotação</h2>
            <p className="mt-2 font-sans text-sm text-graphite">
              Preencha os campos abaixo. Retornaremos com uma proposta personalizada.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { k: "nome", label: "Nome Completo *", type: "text", required: true },
                { k: "empresa", label: "Empresa (CNPJ) *", type: "text", required: true },
                { k: "cargo", label: "Cargo", type: "text" },
                { k: "telefone", label: "Telefone Comercial *", type: "tel", required: true },
                { k: "email", label: "E-mail Corporativo *", type: "email", required: true },
              ].map((f) => (
                <Field key={f.k} label={f.label}>
                  <input
                    type={f.type}
                    required={f.required}
                    value={form[f.k as keyof typeof form]}
                    onChange={set(f.k as keyof typeof form)}
                    className="w-full rounded-sm border border-divider bg-background px-4 py-3 font-sans text-sm text-graphite focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
                  />
                </Field>
              ))}

              <Field label="Seguro de Interesse *">
                <select
                  required
                  value={form.seguro}
                  onChange={set("seguro")}
                  className="w-full rounded-sm border border-divider bg-background px-4 py-3 font-sans text-sm text-graphite focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
                >
                  <option value="">Selecione…</option>
                  {SEGUROS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>

              <Field label="Mensagem">
                <textarea
                  rows={4}
                  value={form.mensagem}
                  onChange={set("mensagem")}
                  className="w-full rounded-sm border border-divider bg-background px-4 py-3 font-sans text-sm text-graphite focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
                />
              </Field>

              <button
                type="submit"
                className="block w-full rounded-sm bg-navy px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-navy-medium"
              >
                Enviar Solicitação
              </button>

              <p className="text-center font-sans text-xs text-graphite/70">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="border-t border-divider">
        <iframe
          title="Localização Freeman Corretora — Santos/SP"
          src="https://www.google.com/maps?q=Gonzaga,Santos,SP&output=embed"
          className="block h-80 w-full grayscale"
          loading="lazy"
        />
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-navy-medium">
        {label}
      </span>
      {children}
    </label>
  );
}
