import type { ReactNode } from "react";
import shieldWhite from "@/assets/logo-shield-white.png";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, lead, actions }: Props) {
  return (
    <section className="mesh-navy grain relative overflow-hidden py-20 text-center text-white">
      <div className="vignette pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl">{title}</h1>
        {lead && <p className="mt-5 font-sans text-base text-white/80 md:text-lg">{lead}</p>}
        {actions && <div className="mt-8">{actions}</div>}
      </div>

      <img
        src={shieldWhite}
        alt=""
        aria-hidden="true"
        width={260}
        height={260}
        className="pointer-events-none absolute -right-10 bottom-0 h-[260px] w-[260px] opacity-[0.05]"
        loading="lazy"
      />
    </section>
  );
}
