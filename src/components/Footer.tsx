import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { BRAND, CREDENTIALS } from "@/data/site";
import { Logo, Ornament } from "./ui";

/* Inline brand glyphs (lucide removed brand icons) */
const LinkedIn = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);
const XIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
  </svg>
);
const Facebook = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07z" />
  </svg>
);
const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38 3.7 3.7 0 0 1-1.38.9c-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.73-2.12 1.38C1.36 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.73 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.8-.31 1.46-.73 2.12-1.38.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.12A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
  </svg>
);
const Youtube = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" />
  </svg>
);

const socials: ComponentType<SVGProps<SVGSVGElement>>[] = [LinkedIn, XIcon, Facebook, Instagram, Youtube];

const cols = [
  {
    title: "Services",
    links: [
      { label: "Polarion ALM", to: "/services?focus=polarion-alm" },
      { label: "Mendix Low-Code", to: "/services?focus=mendix-low-code" },
      { label: "Teamcenter PLM", to: "/services?focus=teamcenter-plm" },
      { label: "AI & Machine Learning", to: "/services?focus=ai-ml" },
      { label: "Custom Software", to: "/services?focus=custom-software" },
      { label: "Functional Safety", to: "/services?focus=functional-safety" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Industries", to: "/industries" },
      { label: "Products & Marketplace", to: "/products" },
      { label: "Hire To Pod", to: "/hire-to-pod" },
      { label: "Our Team", to: "/team" },
      { label: "Our Blog", to: "/blog" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Digital Transformation", to: "/services?focus=digital-transformation" },
      { label: "ASPICE Consulting", to: "/services?focus=aspice" },
      { label: "Cybersecurity", to: "/services?focus=cybersecurity" },
      { label: "Digital Marketing", to: "/services?focus=digital-marketing" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream/70">
      <div className="bg-grid-gold pointer-events-none absolute inset-0 opacity-40" />
      <div className="bg-radial-glow pointer-events-none absolute inset-x-0 top-0 h-64 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* CTA strip */}
        <div className="grid gap-8 border-b border-gold/15 py-14 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h3 className="font-serif text-3xl text-parchment sm:text-4xl">
              Let's engineer your <span className="text-gold-gradient">next transformation</span>.
            </h3>
            <p className="mt-3 max-w-xl text-cream/60">
              Talk to our pre-sales engineering team about Polarion, Teamcenter, Mendix, AI/ML or a fully custom build.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={`mailto:${BRAND.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-goldlight via-gold to-golddeep px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {BRAND.email} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/55">
              {BRAND.name} ({BRAND.short}) — a digital engineering & transformation partner for organizations operating
              in complex, regulated industries. Quality, optimized processes and continuous improvement, delivered for
              enterprise customers.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((S, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-cream/70 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                  aria-label="social link"
                >
                  <S className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-serif text-lg text-parchment">{c.title}</h4>
              <span className="mt-3 block h-px w-10 bg-gold/50" />
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="link-underline text-cream/60 hover:text-goldlight">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Credentials */}
        <div className="grid gap-4 border-t border-gold/15 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((c) => (
            <div key={c.title} className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-white/5">
                <c.icon className="h-5 w-5 text-goldlight" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-parchment">{c.title}</div>
                <div className="text-xs text-cream/50">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact line */}
        <div className="grid gap-4 border-t border-gold/15 py-7 text-sm sm:grid-cols-3">
          <span className="inline-flex items-center gap-2 text-cream/60">
            <MapPin className="h-4 w-4 text-gold" /> Hyderabad, Telangana, India
          </span>
          <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 text-cream/60 hover:text-goldlight">
            <Mail className="h-4 w-4 text-gold" /> {BRAND.email}
          </a>
          <a href={`tel:${BRAND.phoneIN.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-cream/60 hover:text-goldlight">
            <Phone className="h-4 w-4 text-gold" /> {BRAND.phoneIN} · {BRAND.phoneUS}
          </a>
        </div>

        <Ornament light className="pb-2 opacity-70" />

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/45 sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Crafted with precision · CMMI Level 5 · ISO 9001:2015</p>
        </div>
      </div>
    </footer>
  );
}
