import { useEffect } from "react";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/structured-data";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

/**
 * Atualiza as tags que já existem no index.html em vez de renderizar novas —
 * o React não deduplica com o <head> estático, o que gerava títulos e canonicals duplicados.
 */
function setHeadAttr(selector: string, attr: "content" | "href", value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value);
}

export function Seo({ title, description, path, noindex = false, jsonLd }: SeoProps) {
  const canonicalUrl = new URL(path, SITE_URL).toString();

  useEffect(() => {
    document.title = title;
    setHeadAttr('meta[name="description"]', "content", description);
    setHeadAttr('meta[name="robots"]', "content", noindex ? "noindex, nofollow" : "index, follow");
    setHeadAttr('link[rel="canonical"]', "href", canonicalUrl);
    setHeadAttr('meta[property="og:title"]', "content", title);
    setHeadAttr('meta[property="og:description"]', "content", description);
    setHeadAttr('meta[property="og:url"]', "content", canonicalUrl);
    setHeadAttr('meta[name="twitter:title"]', "content", title);
    setHeadAttr('meta[name="twitter:description"]', "content", description);
  }, [title, description, canonicalUrl, noindex]);

  return jsonLd ? <JsonLd data={jsonLd} /> : null;
}
