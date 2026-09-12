import { useRef, type MouseEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Halo radial que segue o cursor dentro do card. A posição vai para o CSS por
 * custom property, então o React não re-renderiza a cada movimento do mouse.
 */
export function SpotlightCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useRef<DOMRect | null>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = rect.current ?? el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        rect.current = ref.current?.getBoundingClientRect() ?? null;
      }}
      onMouseLeave={() => {
        rect.current = null;
      }}
      onMouseMove={onMouseMove}
      className={className}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in srgb, var(--color-navy) 7%, transparent), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
