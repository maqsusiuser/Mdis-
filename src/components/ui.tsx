import {
  type ReactNode,
  type CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import logoMark from "../assets/images/logo-icon.png";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ----------------------------- Reveal on scroll ----------------------------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
export const staggerChild = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}

/* ----------------------------- Animated counter ----------------------------- */
export function Counter({
  to,
  suffix = "",
  duration = 1.9,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start = 0;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}

/* ----------------------------- Eyebrow label ----------------------------- */
export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-3 text-[11px] font-semibold",
        light ? "text-goldlight" : "text-golddeep",
        className
      )}
    >
      <span
        className={cn(
          "h-px w-7",
          light ? "bg-goldlight/60" : "bg-gold/60"
        )}
      />
      {children}
    </span>
  );
}

/* ----------------------------- Section title ----------------------------- */
export function SectionTitle({
  eyebrow,
  title,
  intro,
  light = false,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow light={light} className={align === "center" ? "justify-center" : ""}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-5 font-serif text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.7rem]",
            light ? "text-parchment" : "text-navy"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              light ? "text-cream/80" : "text-slatey"
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ----------------------------- Ornament divider ----------------------------- */
export function Ornament({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const c = light ? "rgba(228,201,135,0.7)" : "rgba(156,122,44,0.55)";
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <span className="h-px w-16 sm:w-24" style={{ background: `linear-gradient(90deg, transparent, ${c})` }} />
      <svg width="34" height="14" viewBox="0 0 34 14" fill="none" aria-hidden>
        <path d="M17 1 L20 7 L17 13 L14 7 Z" fill={c} />
        <circle cx="6" cy="7" r="1.6" fill={c} />
        <circle cx="28" cy="7" r="1.6" fill={c} />
      </svg>
      <span className="h-px w-16 sm:w-24" style={{ background: `linear-gradient(270deg, transparent, ${c})` }} />
    </div>
  );
}

/* ----------------------------- Buttons ----------------------------- */
type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "gold" | "outline" | "ghost" | "light";
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
};

export function GoldButton({
  children,
  to,
  href,
  variant = "gold",
  className,
  onClick,
  style,
}: BtnProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";
  const variants: Record<string, string> = {
    gold: "bg-gradient-to-r from-goldlight via-gold to-golddeep text-ink shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40 hover:-translate-y-0.5",
    outline:
      "border border-gold/60 text-gold hover:bg-gold hover:text-ink hover:-translate-y-0.5",
    ghost: "text-navy hover:text-golddeep",
    light:
      "bg-parchment text-navy hover:bg-white hover:-translate-y-0.5 shadow-lg shadow-black/20",
  };
  const cls = cn(base, variants[variant], className);
  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {variant === "gold" && (
        <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
      )}
    </>
  );
  if (to)
    return (
      <Link to={to} className={cls} style={style} onClick={onClick}>
        {content}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={cls} style={style} onClick={onClick}>
        {content}
      </a>
    );
  return (
    <button type="button" className={cls} style={style} onClick={onClick}>
      {content}
    </button>
  );
}

/* ----------------------------- Logo / Monogram ----------------------------- */
export function Logo({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link to="/" className={cn("group flex items-center gap-3", className)}>
      <span className="relative inline-flex h-11 w-11 items-center justify-center">
        <img
          src={logoMark}
          alt="Maqsusi logo"
          className="h-11 w-11 object-contain drop-shadow-[0_2px_10px_rgba(123,47,176,0.35)] transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 -z-10 rounded-full bg-purple/20 blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-lg font-bold tracking-tight",
            light ? "text-parchment" : "text-navy"
          )}
        >
          Maqsusi
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-[0.28em]",
            light ? "text-goldlight/80" : "text-golddeep"
          )}
        >
          Digital Industries Software
        </span>
      </span>
    </Link>
  );
}

/* ----------------------------- Section wrapper ----------------------------- */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      {children}
    </section>
  );
}

/* ----------------------------- Capability chip ----------------------------- */
export function Chip({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium",
        light
          ? "border-gold/30 bg-white/5 text-cream/85"
          : "border-navy/12 bg-white text-navy/80"
      )}
    >
      <span className={cn("h-1 w-1 rounded-full", light ? "bg-goldlight" : "bg-gold")} />
      {children}
    </span>
  );
}

/* ----------------------------- Star field (decor) ----------------------------- */
export function StarField({ count = 26 }: { count?: number }) {
  const stars = Array.from({ length: count }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    delay: `${(i % 7) * 0.6}s`,
    dur: `${3 + (i % 4)}s`,
    size: i % 3 === 0 ? 2.4 : 1.4,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-goldlight"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.dur} ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
