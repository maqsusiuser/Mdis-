import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown, Calendar, Play, MessageSquare } from "lucide-react";
import heroImg from "@/assets/images/hero.jpg";
import ecosystemImg from "@/assets/images/ecosystem.jpg";
import ctaImg from "@/assets/images/cta.jpg";
import {
  SERVICES,
  INDUSTRIES,
  STATS,
  CLIENTS,
  WHY_CHOOSE,
  DELIVERY,
  CREDENTIALS,
} from "@/data/site";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  Counter,
  SectionTitle,
  GoldButton,
  Eyebrow,
  Ornament,
  StarField,
  Chip,
} from "@/components/ui";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Home() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink" />
        <div className="bg-grid-gold pointer-events-none absolute inset-0 opacity-50" />
        <StarField count={34} />

        {/* rotating ornament ring */}
        <div className="pointer-events-none absolute -right-40 top-1/2 hidden h-[640px] w-[640px] -translate-y-1/2 lg:block">
          <div className="animate-spin-slow absolute inset-0 rounded-full border border-gold/15" />
          <div className="animate-spin-rev absolute inset-10 rounded-full border border-dashed border-gold/10" />
          <div className="animate-spin-slow absolute inset-24 rounded-full border border-gold/10" />
        </div>

        <div className="relative mx-auto w-full max-w-5xl px-6 pt-28 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex justify-center"
          >
            <Eyebrow light className="justify-center">
              <Sparkles className="h-3.5 w-3.5" /> Digital Engineering & Transformation
            </Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="mx-auto mt-6 max-w-4xl font-serif text-4xl font-bold leading-[1.06] tracking-tight text-parchment sm:text-6xl md:text-7xl"
          >
            Engineering the future of{" "}
            <span className="text-gold-gradient">regulated industries</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: EASE }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg"
          >
            Maqsusi Digital Industries Software partners with automotive, aerospace, life-sciences, banking and
            manufacturing leaders — orchestrating Polarion, Teamcenter, Mendix, AI/ML and custom engineering into a
            single, compliant digital thread.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease: EASE }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <GoldButton to="/contact">
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </GoldButton>
            <GoldButton to="/services" variant="outline">
              Explore Services
            </GoldButton>
          </motion.div>

          {/* trust chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52, ease: EASE }}
            className="mt-12 flex flex-wrap items-center justify-center gap-2.5"
          >
            {CREDENTIALS.map((c) => (
              <span
                key={c.title}
                className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/5 px-4 py-2 text-xs font-medium text-cream/75 backdrop-blur-sm"
              >
                <c.icon className="h-4 w-4 text-goldlight" /> {c.title}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 animate-floaty text-gold/60" />
        </motion.div>
      </section>

      {/* ============================ CLIENTS MARQUEE ============================ */}
      <div className="border-y border-navy/10 bg-parchment py-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-slatey">
          Trusted by industry leaders
        </p>
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-serif text-2xl font-semibold text-navy/40 transition-colors hover:text-golddeep sm:text-3xl"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16" aria-hidden>
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} className="whitespace-nowrap font-serif text-2xl font-semibold text-navy/40 sm:text-3xl">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ============================ POSITIONING ============================ */}
      <section className="relative overflow-hidden bg-ivory py-24">
        <div className="bg-grid-light pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Who We Are"
              title={
                <>
                  A transformation partner for{" "}
                  <span className="text-gold-gradient">high-stakes industries</span>
                </>
              }
              intro="We help organizations in complex, regulated sectors modernize engineering and operations — combining deep domain expertise with the Siemens ecosystem, AI/ML and bespoke software to deliver measurable outcomes."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {INDUSTRIES.map((ind) => (
                  <Link key={ind.id} to={`/industries?focus=${ind.id}`}>
                    <Chip>
                      <ind.icon className="h-3.5 w-3.5 text-golddeep" /> {ind.name}
                    </Chip>
                  </Link>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-4">
                <GoldButton to="/about">
                  About MDIS <ArrowRight className="h-4 w-4" />
                </GoldButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={36}>
            <div className="perspective relative">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/25 shadow-2xl shadow-navy/20">
                <img src={ecosystemImg} alt="Digital transformation ecosystem" className="aspect-[4/3] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-serif text-xl text-parchment">One connected ecosystem</p>
                  <p className="text-sm text-cream/70">ALM · PLM · Low-code · AI · Custom engineering</p>
                </div>
              </div>
              <div className="animate-floaty absolute -left-5 -top-5 hidden rounded-2xl border border-gold/30 bg-parchment p-4 shadow-xl sm:block">
                <p className="font-serif text-3xl text-golddeep">12+</p>
                <p className="text-xs text-slatey">years of expertise</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ STATS ============================ */}
      <section className="relative overflow-hidden bg-navy py-20">
        <div className="bg-dots-gold pointer-events-none absolute inset-0 opacity-30" />
        <div className="bg-radial-glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6">
          <StaggerGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <div className="font-serif text-5xl font-bold text-gold-gradient sm:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-wider text-cream/70">{s.label}</div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============================ SERVICES ============================ */}
      <section className="relative bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            align="center"
            eyebrow="What We Do"
            title={
              <>
                Solutions across the <span className="text-gold-gradient">engineering lifecycle</span>
              </>
            }
            intro="From application and product lifecycle management to intelligent automation — a full spectrum of services engineered for regulated enterprise environments."
          />
          <Ornament className="mt-8" />

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <StaggerItem key={s.id}>
                <Link
                  to={`/services?focus=${s.id}`}
                  className="card-raise group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-7 hover:border-gold/40"
                >
                  <span className="inline-flex h-13 w-13 items-center justify-center rounded-xl bg-navy/5 p-3 text-navy transition-colors group-hover:bg-navy group-hover:text-goldlight">
                    <s.icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-navy">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slatey">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-golddeep">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-12 text-center">
            <GoldButton to="/services" variant="outline">
              View all services <ArrowRight className="h-4 w-4" />
            </GoldButton>
          </Reveal>
        </div>
      </section>

      {/* ============================ INDUSTRIES ============================ */}
      <section className="relative overflow-hidden bg-parchment py-24">
        <div className="bg-grid-light pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            align="center"
            eyebrow="Industries"
            title={<>Built for <span className="text-gold-gradient">regulated</span> complexity</>}
            intro="Deep, domain-specific expertise across the sectors where compliance, safety and traceability are non-negotiable."
          />
          <Ornament className="mt-8" />

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map((ind) => (
              <StaggerItem key={ind.id} className="h-full">
                <Link
                  to={`/industries?focus=${ind.id}`}
                  className="card-raise group flex h-full flex-col items-start rounded-2xl border border-navy/10 bg-white p-6 hover:border-gold/40"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy2 text-goldlight transition-transform group-hover:scale-110">
                    <ind.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-navy">{ind.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {ind.focus.slice(0, 3).map((f) => (
                      <span key={f} className="rounded-full bg-navy/5 px-2.5 py-1 text-[11px] font-medium text-slatey">
                        {f}
                      </span>
                    ))}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============================ WHY CHOOSE ============================ */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="bg-grid-gold pointer-events-none absolute inset-0 opacity-40" />
        <StarField count={18} />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            light
            align="center"
            eyebrow="Why MDIS"
            title={<>Why companies <span className="text-gold-gradient">choose us</span></>}
            intro="Certified consultants, pre-built accelerators and global delivery — purpose-built for compliance-critical programs."
          />
          <Ornament light className="mt-8" />

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((w) => (
              <StaggerItem key={w.title}>
                <div className="card-raise group h-full rounded-2xl border border-gold/15 bg-white/[0.03] p-7 backdrop-blur-sm hover:border-gold/40 hover:bg-white/[0.06]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-goldlight">
                    <w.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-parchment">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{w.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============================ DELIVERY APPROACH ============================ */}
      <section className="relative bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            align="center"
            eyebrow="Delivery Approach"
            title={<>Discover → Design → Build → <span className="text-gold-gradient">Integrate → Optimize</span></>}
            intro="A disciplined five-stage process that turns ambition into a governed, continuously improving solution."
          />
          <Ornament className="mt-8" />

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block" />
            <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {DELIVERY.map((d) => (
                <StaggerItem key={d.step} className="text-center">
                  <div className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-gold/30" />
                    <span className="absolute inset-0 rounded-full bg-gold/10" />
                    <d.icon className="relative h-6 w-6 text-golddeep" strokeWidth={1.7} />
                    <span className="absolute -right-1 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-goldlight">
                      {d.step}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-navy">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatey">{d.text}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section className="relative overflow-hidden">
        <img src={ctaImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
        <div className="bg-grid-gold pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <Reveal>
            <Eyebrow light className="justify-center">Let's begin</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-parchment sm:text-5xl">
              Ready to transform your <span className="text-gold-gradient">engineering</span>?
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-xl text-cream/70">
              Schedule a consultation, request a demo, or talk to our experts about your next initiative.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <GoldButton to="/contact">
                <Calendar className="h-4 w-4" /> Schedule Consultation
              </GoldButton>
              <GoldButton to="/products" variant="outline">
                <Play className="h-4 w-4" /> Request a Demo
              </GoldButton>
              <GoldButton to="/team" variant="ghost" className="text-goldlight">
                <MessageSquare className="h-4 w-4" /> Talk to Experts
              </GoldButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
