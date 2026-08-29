import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { STATS } from "@/data/stats";

export function TrustStats() {
  return (
    <section className="border-b border-divider bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-16 md:grid-cols-4">
        {STATS.map(({ icon: Icon, ...s }, i) => (
          <Reveal key={s.label} delay={i * 0.08} y={16}>
            <div className={`px-6 text-center ${i > 0 ? "md:border-l md:border-divider" : ""}`}>
              <Icon
                className="mx-auto h-6 w-6 text-accent-red"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <AnimatedCounter
                end={s.end}
                suffix={s.suffix}
                className="mt-3 block font-sans text-5xl font-black text-navy md:text-6xl"
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
