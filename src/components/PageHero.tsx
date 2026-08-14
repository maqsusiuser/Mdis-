import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { StarField, Eyebrow, Ornament } from "./ui";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  crumbs?: { label: string; to?: string }[];
  align?: "center" | "left";
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-36 pb-20 text-center sm:pt-44 sm:pb-28">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-navy to-navy2" />
      <div className="bg-grid-gold pointer-events-none absolute inset-0 opacity-60" />
      <StarField count={30} />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(200,162,74,0.5), transparent 70%)" }}
      />

      <div
        className={`relative mx-auto max-w-3xl px-6 ${align === "center" ? "text-center" : "text-left"}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Eyebrow light className={align === "center" ? "justify-center" : ""}>
            {eyebrow}
          </Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          className="mt-5 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-parchment sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}

        {crumbs && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`mt-7 flex flex-wrap items-center gap-2 text-xs text-cream/55 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            {crumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="hover:text-goldlight">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-goldlight">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3 text-gold/50" />}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
        >
          <Ornament light className="mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
