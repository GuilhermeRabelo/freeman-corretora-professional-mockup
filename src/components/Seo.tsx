import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/structured-data";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function Seo({ title, description, path, noindex = false, jsonLd }: SeoProps) {
  const canonicalUrl = new URL(path, SITE_URL).toString();

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Freeman Corretora de Seguros" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {jsonLd ? <JsonLd data={jsonLd} /> : null}
    </>
  );
}
