import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { STATS } from "@/data/stats";

export function TrustStats() {
  return (
    <section className="relative border-b border-divider bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-16 md:grid-cols-4">
        {STATS.map(({ icon: Icon, ...s }, i) => (
          <Reveal key={s.label} delay={i * 0.08} y={16}>
            <div className="relative px-2 text-center xl:px-6">
              {i > 0 && (
                <div className="rule-glow-y-navy absolute inset-y-2 left-0 hidden md:block" />
              )}
              <span className="relative mx-auto flex h-10 w-10 items-center justify-center">
                {/* Halo suave atrás do ícone — navy da marca em opacidade */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent-red)_14%,transparent)_0%,transparent_70%)]"
                />
                <Icon
                  className="relative h-6 w-6 text-accent-red"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>
              <AnimatedCounter
                end={s.end}
                suffix={s.suffix}
                className="tabular mt-3 block font-sans text-2xl font-black text-navy min-[375px]:text-3xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
              />
              <div className="mt-3 font-sans text-xs font-semibold uppercase tracking-widest text-graphite">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
