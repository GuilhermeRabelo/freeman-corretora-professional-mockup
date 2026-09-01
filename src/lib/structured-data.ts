export const SITE_URL = "https://freemanseguros.com.br";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const organizationSchema: Record<string, unknown> = {
  "@type": "InsuranceAgency",
  "@id": ORGANIZATION_ID,
  name: "Freeman Corretora de Seguros",
  alternateName: "Freeman Seguros",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  foundingDate: "1989",
  description:
    "Corretora de seguros em Santos/SP com atendimento a pessoas e empresas em todo o Brasil.",
  telephone: "+55-13-99728-1866",
  email: "contato@freemanseguros.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Senador Feijó, 686, Sala 1525, Vila Mathias",
    addressLocality: "Santos",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  sameAs: [
    "https://www.instagram.com/freemanseguros",
    "https://www.linkedin.com/company/freemanseguros",
  ],
};

export const websiteSchema: Record<string, unknown> = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Freeman Corretora de Seguros",
  inLanguage: "pt-BR",
  publisher: { "@id": ORGANIZATION_ID },
};

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

export const servicesSchema: Record<string, unknown> = {
  "@type": "ItemList",
  name: "Seguros e soluções oferecidos pela Freeman",
  itemListElement: [
    "Seguro Automóvel",
    "Plano de Saúde",
    "Seguro Residencial",
    "Seguro Empresarial",
    "Seguro Condomínio",
    "Seguro de Vida",
    "Seguro Viagem",
    "Consórcio",
  ].map((name, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: "Brasil",
    },
  })),
};

export const leadershipSchema: Record<string, unknown> = {
  "@type": "ItemList",
  name: "Diretoria da Freeman Corretora de Seguros",
  itemListElement: [
    {
      "@type": "Person",
      name: "Rogério Freeman",
      jobTitle: "Sócio-Fundador",
      worksFor: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "Person",
      name: "Igor Freeman",
      jobTitle: "Sócio-Diretor",
      worksFor: { "@id": ORGANIZATION_ID },
    },
  ],
};

export function pageSchema(type: "WebPage" | "AboutPage" | "ContactPage", path: string) {
  return {
    "@type": type,
    "@id": `${new URL(path, SITE_URL).toString()}#webpage`,
    url: new URL(path, SITE_URL).toString(),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: "pt-BR",
  };
}

export function schemaGraph(...nodes: Array<Record<string, unknown>>) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
