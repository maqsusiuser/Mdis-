import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { NAV, BRAND } from "@/data/site";
import { Logo, GoldButton } from "./ui";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setOpen(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const activeItem = NAV.find((n) => n.label === open);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Main bar */}
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "glass-dark border-b border-gold/15 shadow-2xl shadow-black/30"
            : "bg-gradient-to-b from-ink/80 to-transparent"
        )}
      >
        <div
          className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6"
          onMouseLeave={() => setOpen(null)}
        >
          <Logo light />

          {/* Desktop nav */}
          <nav className="hidden items-center xl:flex">
            <ul className="flex items-center">
              {NAV.map((item) => (
                <li
                  key={item.label}
                  onMouseEnter={() => setOpen(item.children ? item.label : null)}
                  className="relative"
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "link-underline inline-flex items-center gap-1 px-3.5 py-6 text-[13px] font-medium tracking-wide text-cream/85 transition-colors hover:text-goldlight",
                        isActive && "text-goldlight is-active"
                      )
                    }
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open === item.label && "rotate-180")} />
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <GoldButton to="/contact" className="px-5 py-2.5 text-[13px]">
              Schedule Consultation <ArrowRight className="h-4 w-4" />
            </GoldButton>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobile(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 text-goldlight xl:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Mega menu */}
        <AnimatePresence>
          {activeItem && activeItem.children && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full hidden xl:block"
              onMouseEnter={() => setOpen(activeItem.label)}
            >
              <div className="glass-dark border-y border-gold/15">
                <div className="mx-auto max-w-7xl px-6 py-7">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="font-serif text-xl text-goldlight">{activeItem.label}</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                    {activeItem.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.focus ? `${c.to}?focus=${c.focus}` : c.to}
                        className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-colors hover:border-gold/25 hover:bg-white/5"
                      >
                        <span className="mt-1 h-2 w-2 rotate-45 bg-gold/60 transition-transform group-hover:scale-125" />
                        <span>
                          <span className="block text-sm font-semibold text-parchment group-hover:text-goldlight">
                            {c.label}
                          </span>
                          {c.blurb && (
                            <span className="mt-0.5 block text-xs leading-relaxed text-cream/55">
                              {c.blurb}
                            </span>
                          )}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-ink/98 backdrop-blur-xl xl:hidden"
          >
            <div className="bg-grid-gold flex min-h-full flex-col">
              <div className="flex items-center justify-between border-b border-gold/15 px-5 py-4">
                <Logo light />
                <button
                  onClick={() => setMobile(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 text-goldlight"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 px-5 py-6">
                <ul className="space-y-1">
                  {NAV.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <NavLink
                        to={item.to}
                        end={item.to === "/"}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center justify-between border-b border-white/5 py-3 font-serif text-2xl text-cream/90",
                            isActive && "text-goldlight"
                          )
                        }
                      >
                        {item.label}
                        <ArrowRight className="h-5 w-5 text-gold/50" />
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="space-y-4 border-t border-gold/15 px-5 py-6">
                <GoldButton to="/contact" className="w-full">
                  Schedule a Consultation <ArrowRight className="h-4 w-4" />
                </GoldButton>
                <div className="space-y-1 text-sm text-cream/60">
                  <a href={`mailto:${BRAND.email}`} className="block hover:text-goldlight">{BRAND.email}</a>
                  <a href={`tel:${BRAND.phoneIN.replace(/\s/g, "")}`} className="block hover:text-goldlight">{BRAND.phoneIN}</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
