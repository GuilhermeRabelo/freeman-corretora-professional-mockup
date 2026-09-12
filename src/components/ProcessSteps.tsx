import { motion, useReducedMotion } from "framer-motion";
import { PROCESS } from "@/data/process";
import { EASE_OUT_QUINT } from "@/lib/motion";

const itemClass =
  "group relative flex flex-col gap-4 bg-background p-8 transition-colors duration-300 hover:bg-surface-soft md:p-10";

function StepBody({ index, Icon, title, desc }: StepBodyProps) {
  return (
    <>
      <span className="text-shine tabular font-display text-display-3 leading-none opacity-35 transition-opacity duration-300 group-hover:opacity-100">
        {String(index + 1).padStart(2, "0")}
      </span>
      <Icon
        className="h-7 w-7 text-navy transition-transform duration-200 group-hover:scale-110"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <h3 className="text-xl">{title}</h3>
      <p className="font-sans text-sm leading-relaxed text-graphite">{desc}</p>
    </>
  );
}

type StepBodyProps = {
  index: number;
  Icon: (typeof PROCESS)[number]["icon"];
  title: string;
  desc: string;
};

export function ProcessSteps() {
  const reduceMotion = useReducedMotion();

  return (
    <ol className="grid grid-cols-1 gap-px overflow-hidden border border-divider bg-divider shadow-e1 md:grid-cols-4">
      {PROCESS.map(({ icon: Icon, title, desc }, i) =>
        reduceMotion ? (
          <li key={title} className={itemClass}>
            <StepBody index={i} Icon={Icon} title={title} desc={desc} />
          </li>
        ) : (
          <motion.li
            key={title}
            className={itemClass}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.42, delay: i * 0.08, ease: EASE_OUT_QUINT }}
          >
            <StepBody index={i} Icon={Icon} title={title} desc={desc} />
          </motion.li>
        ),
      )}
    </ol>
  );
}
