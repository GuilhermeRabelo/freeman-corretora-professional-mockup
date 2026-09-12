import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT_QUINT } from "@/lib/motion";

type Variant = "up" | "mask" | "blur";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  variant?: Variant;
};

export function Reveal({ children, delay = 0, className, y = 24, variant = "up" }: Props) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const states = {
    up: {
      initial: { opacity: 0, y },
      inView: { opacity: 1, y: 0 },
      duration: 0.42,
    },
    mask: {
      initial: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
      inView: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
      duration: 0.58,
    },
    blur: {
      initial: { opacity: 0, y: y * 0.5, filter: "blur(8px)" },
      inView: { opacity: 1, y: 0, filter: "blur(0px)" },
      duration: 0.48,
    },
  }[variant];

  return (
    <motion.div
      className={className}
      initial={states.initial}
      whileInView={states.inView}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: states.duration, delay, ease: EASE_OUT_QUINT }}
    >
      {children}
    </motion.div>
  );
}
