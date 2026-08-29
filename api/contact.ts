import type { VercelRequest, VercelResponse } from "@vercel/node";

type FormKey = "nome" | "empresa" | "cargo" | "telefone" | "email" | "seguro" | "mensagem";

const VALIDATED_FIELDS: FormKey[] = ["nome", "empresa", "telefone", "email", "seguro"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValid(body: Record<string, unknown>): body is Record<FormKey, string> {
  for (const key of VALIDATED_FIELDS) {
    const value = body[key];
    if (typeof value !== "string" || value.trim() === "") return false;
  }
  const email = body.email as string;
  return EMAIL_RE.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const body = req.body as Record<string, unknown>;
  if (!body || !isValid(body)) {
    res.status(400).json({ ok: false, error: "Campos obrigatórios inválidos" });
    return;
  }

  const form = body as Record<FormKey, string>;
  const subject = `Solicitação de cotação — ${form.seguro || "Seguro Corporativo"}`;
  const text = [
    `Nome: ${form.nome}`,
    `Empresa (CNPJ): ${form.empresa}`,
    `Cargo: ${form.cargo ?? ""}`,
    `Telefone: ${form.telefone}`,
    `E-mail: ${form.email}`,
    `Seguro de interesse: ${form.seguro}`,
    "",
    "Mensagem:",
    form.mensagem ?? "",
  ].join("\n");

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Freeman Corretora <contato@freemanseguros.com.br>",
      to: "contato@freemanseguros.com.br",
      reply_to: form.email,
      subject,
      text,
    }),
  });

  if (!resendRes.ok) {
    res.status(502).json({ ok: false, error: "Falha ao enviar e-mail" });
    return;
  }

  res.status(200).json({ ok: true });
}
