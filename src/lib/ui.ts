/**
 * Card padrão da marca — repetido em Home, Serviços e Sinistros.
 * Repouso com elevação e1, hover sobe para e3. O canto de 4px é assinatura.
 */
export const cardClass =
  "group relative flex h-full flex-col overflow-hidden rounded-[4px] border border-divider bg-background shadow-e1 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-e3 focus-within:border-navy focus-within:shadow-e3";

/**
 * Variante para cards que não são links (as ações ficam dentro deles). No hover o
 * card não sobe nem ganha sombra, para não prometer um clique no card inteiro.
 */
export const staticCardClass =
  "group relative flex h-full flex-col overflow-hidden rounded-[4px] border border-divider bg-background shadow-e1 transition-colors duration-300 hover:border-navy focus-within:border-navy";

/** Fio de 2px em accent-red que desenha da esquerda no hover do card. */
export const cardEdgeClass =
  "absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent-red transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-within:scale-x-100";
