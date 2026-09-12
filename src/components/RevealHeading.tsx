import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT_QUINT } from "@/lib/motion";

type Props = {
  /** Cada item vira uma linha revelada por máscara, escalonada. */
  lines: ReactNode[];
  as?: "h1" | "h2";
  className?: string;
  delay?: number;
  /** Dispara ao entrar na viewport em vez de no mount. */
  onScroll?: boolean;
};

const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.05, delayChildren: delay },
  }),
};

const line: Variants = {
  hidden: { y: "108%" },
  visible: { y: "0%", transition: { duration: 0.58, ease: EASE_OUT_QUINT } },
};

export function RevealHeading({
  lines,
  as: Tag = "h2",
  className,
  delay = 0,
  onScroll = false,
}: Props) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <Tag className={className}>
        {lines.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
      </Tag>
    );
  }

  const MotionTag = Tag === "h1" ? motion.h1 : motion.h2;
  const trigger = onScroll
    ? ({ whileInView: "visible", viewport: { once: true, amount: 0.5 } } as const)
    : ({ animate: "visible" } as const);

  return (
    <MotionTag
      className={className}
      variants={container}
      custom={delay}
      initial="hidden"
      {...trigger}
    >
      {lines.map((l, i) => (
        // A máscara precisa de um pouco de folga vertical para não cortar
        // descendentes (g, p, q) do Changa One.
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span variants={line} className="block">
            {l}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
