import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import {
  breadcrumbSchema,
  organizationSchema,
  pageSchema,
  schemaGraph,
} from "@/lib/structured-data";

// Texto modelo — submeter à revisão jurídica do cliente antes de publicar.
// A seção "Cookies e dados de navegação" pressupõe o Google Analytics que ainda será instalado.

const PAGE_TITLE = "Política de Privacidade — Freeman Corretora";
const PAGE_DESCRIPTION =
  "Saiba como a Freeman Corretora coleta, usa, compartilha e protege seus dados pessoais, conforme a LGPD.";

const LAST_UPDATE = "setembro de 2026";
const CONTACT_EMAIL = "contato@freemanseguros.com.br";

const headingClass = "font-sans text-xs font-bold uppercase tracking-widest text-navy-medium";
const bodyClass = "mt-4 font-sans text-sm leading-relaxed text-graphite";
const linkClass = "underline underline-offset-2 hover:text-navy";

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/privacidade"
        jsonLd={schemaGraph(
          organizationSchema,
          pageSchema("WebPage", "/privacidade"),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Política de Privacidade", path: "/privacidade" },
          ]),
        )}
      />
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-navy-medium">
            Legal
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl">Política de Privacidade</h1>
          <p className="mt-4 font-sans text-xs uppercase tracking-widest text-graphite/70">
            Última atualização: {LAST_UPDATE}
          </p>

          <Reveal className="mt-12 space-y-10">
            <p className="font-sans text-base leading-relaxed text-graphite">
              A Freeman Corretora de Seguros respeita a sua privacidade e trata os dados pessoais
              que recebe de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Esta
              política descreve quais dados coletamos neste site, como os utilizamos, com quem os
              compartilhamos e quais são os seus direitos.
            </p>

            <div>
              <h2 className={headingClass}>Quais dados coletamos</h2>
              <p className={bodyClass}>
                Coletamos as informações que você fornece voluntariamente no nosso formulário de
                contato:{" "}
                <strong>
                  nome, CPF/CNPJ, cargo, telefone, e-mail, seguro de interesse e a mensagem enviada
                </strong>
                . Também utilizamos cookies de análise para entender dados de navegação, como
                páginas visitadas, tempo de permanência, origem do acesso, localização aproximada e
                tipo de dispositivo.
              </p>
            </div>

            <div>
              <h2 className={headingClass}>Para que usamos esses dados</h2>
              <p className={bodyClass}>
                Os dados do formulário são utilizados exclusivamente para responder à sua
                solicitação, elaborar cotações de seguro e manter o contato comercial sobre o seu
                pedido. Os dados de navegação nos ajudam a entender o tráfego do site e aprimorar a
                experiência dos visitantes.{" "}
                <strong>
                  Não utilizamos seus dados para envio de spam nem para qualquer finalidade
                  diferente das descritas aqui.
                </strong>
              </p>
            </div>

            <div>
              <h2 className={headingClass}>Base legal do tratamento</h2>
              <p className={bodyClass}>
                Tratamos seus dados com base no seu consentimento, manifestado ao enviar o
                formulário, e na execução de procedimentos preliminares a um eventual contrato de
                seguro, conforme o art. 7º da LGPD. Você pode revogar o consentimento a qualquer
                momento.
              </p>
            </div>

            <div>
              <h2 className={headingClass}>Compartilhamento de dados</h2>
              <p className={bodyClass}>
                Como corretora, podemos compartilhar seus dados com as seguradoras e parceiros
                estritamente necessários para elaborar a cotação ou contratar o seguro que você
                solicitou. Também utilizamos um provedor de envio de e-mail para entregar as
                mensagens do formulário à nossa equipe.{" "}
                <strong>Não vendemos, alugamos nem cedemos seus dados pessoais a terceiros</strong>{" "}
                para outras finalidades, exceto quando exigido por lei ou por autoridade competente.
              </p>
            </div>

            <div>
              <h2 className={headingClass}>Cookies e dados de navegação</h2>
              <p className={bodyClass}>
                Este site utiliza cookies — pequenos arquivos armazenados no seu navegador — para
                melhorar a sua experiência e analisar o tráfego, incluindo cookies de análise do
                Google Analytics, processados de forma agregada. Ao continuar navegando e aceitar o
                uso de cookies, você consente com a sua utilização. Você pode desativá-los a
                qualquer momento nas configurações do seu navegador.
              </p>
            </div>

            <div>
              <h2 className={headingClass}>Conteúdos incorporados e links externos</h2>
              <p className={bodyClass}>
                A página de contato exibe um mapa incorporado do Google Maps, que pode coletar dados
                de navegação segundo as políticas do próprio Google. Este site também pode conter
                links para páginas de terceiros, sobre as quais não temos controle e cujas práticas
                de privacidade não são de nossa responsabilidade.
              </p>
            </div>

            <div>
              <h2 className={headingClass}>Por quanto tempo guardamos seus dados</h2>
              <p className={bodyClass}>
                Mantemos os dados pelo tempo necessário ao atendimento da sua solicitação, à
                administração das apólices contratadas e ao cumprimento das obrigações legais e
                regulatórias aplicáveis à atividade de corretagem de seguros.
              </p>
            </div>

            <div>
              <h2 className={headingClass}>Seus direitos</h2>
              <p className={bodyClass}>
                A LGPD garante a você o direito de confirmar a existência de tratamento, acessar,
                corrigir, anonimizar, portar ou eliminar seus dados, revogar o consentimento e obter
                informações sobre com quem os compartilhamos. Você também é livre para recusar o
                fornecimento de dados pessoais — nesse caso, pode não ser possível elaborar a
                cotação solicitada.
              </p>
            </div>

            <div>
              <h2 className={headingClass}>Como solicitar a exclusão dos seus dados</h2>
              <p className={bodyClass}>
                Para exercer qualquer um desses direitos, envie um e-mail para{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                  {CONTACT_EMAIL}
                </a>
                . Responderemos no prazo previsto em lei.
              </p>
            </div>

            <div>
              <h2 className={headingClass}>Alterações desta política</h2>
              <p className={bodyClass}>
                Podemos atualizar esta política para refletir mudanças nos nossos serviços ou na
                legislação. A versão vigente é sempre a publicada nesta página, com a data de
                atualização indicada acima.
              </p>
            </div>

            <div className="border-t border-divider pt-8">
              <p className="font-sans text-sm leading-relaxed text-graphite/80">
                O uso deste site será considerado como aceitação das nossas práticas de privacidade.
                Se você tiver dúvidas sobre como tratamos os seus dados, entre em{" "}
                <Link to="/contato" className={linkClass}>
                  contato
                </Link>{" "}
                conosco.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
