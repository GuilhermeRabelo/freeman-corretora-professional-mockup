import { motion, useReducedMotion } from "framer-motion";
import { PROCESS } from "@/data/process";

export function ProcessSteps() {
  const reduceMotion = useReducedMotion();

  return (
    <ol className="grid grid-cols-1 gap-px overflow-hidden border border-divider bg-divider md:grid-cols-4">
      {PROCESS.map(({ icon: Icon, title, desc }, i) =>
        reduceMotion ? (
          <li key={title} className="relative flex flex-col gap-4 bg-background p-8 md:p-10">
            <span className="font-display text-5xl leading-none text-divider">
              {String(i + 1).padStart(2, "0")}
            </span>
            <Icon className="h-7 w-7 text-navy" strokeWidth={1.5} />
            <h3 className="text-xl">{title}</h3>
            <p className="font-sans text-sm leading-relaxed text-graphite">{desc}</p>
          </li>
        ) : (
          <motion.li
            key={title}
            className="relative flex flex-col gap-4 bg-background p-8 md:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          >
            <span className="font-display text-5xl leading-none text-divider">
              {String(i + 1).padStart(2, "0")}
            </span>
            <Icon className="h-7 w-7 text-navy" strokeWidth={1.5} />
            <h3 className="text-xl">{title}</h3>
            <p className="font-sans text-sm leading-relaxed text-graphite">{desc}</p>
          </motion.li>
        ),
      )}
    </ol>
  );
}
