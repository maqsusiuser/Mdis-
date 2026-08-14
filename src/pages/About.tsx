import { Quote, TrendingUp, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  SectionTitle,
  GoldButton,
  Ornament,
  Section,
  Counter,
} from "@/components/ui";
import { EXPERTISE_AREAS, MISSION, TESTIMONIALS } from "@/data/site";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>A decade of <span className="text-gold-gradient">engineering trust</span></>}
        subtitle="Maqsusi Digital Industries Software is an IT and digital-transformation partner with roughly a decade of experience — delivering quality solutions, meeting deadlines and helping organizations transform."
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      {/* Intro */}
      <Section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle
              eyebrow="Our Story"
              title={<>Technology with a <span className="text-gold-gradient">human purpose</span></>}
              intro="We work across industries, focused on delivering quality solutions on time and helping organizations digitally transform. Our teams combine experienced professionals with technology specialists in Polarion, Mendix, life sciences, software development and digital transformation."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-3">
                {EXPERTISE_AREAS.map((a) => (
                  <div key={a} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                    <span className="text-navy/80">{a}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={36}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "Customer Success", v: "First priority in every engagement" },
                { k: "Quality", v: "Optimized processes, CMMI Level 5" },
                { k: "Innovation", v: "Continuous improvement by design" },
                { k: "Partnership", v: "Long-term, transparent relationships" },
              ].map((c) => (
                <div key={c.k} className="rounded-2xl border border-navy/10 bg-white p-6">
                  <p className="font-serif text-lg font-semibold text-navy">{c.k}</p>
                  <p className="mt-1 text-sm text-slatey">{c.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="bg-navy">
        <div className="bg-grid-gold pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            light
            align="center"
            eyebrow="Vision & Mission"
            title={<>Transforming the <span className="text-gold-gradient">IT landscape</span></>}
            intro="Our vision is to transform the IT landscape and help businesses achieve their potential through technological connectivity and innovation."
          />
          <Ornament light className="mt-8" />

          <StaggerGroup className="mt-14 grid gap-5 lg:grid-cols-3">
            {MISSION.map((m) => (
              <StaggerItem key={m.title}>
                <div className="card-raise h-full rounded-2xl border border-gold/15 bg-white/[0.03] p-8 backdrop-blur-sm">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-goldlight">
                    <m.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-parchment">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{m.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      {/* Growth */}
      <Section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 rounded-3xl border border-gold/25 bg-gradient-to-br from-navy to-ink p-10 sm:p-14 lg:grid-cols-[1fr_auto]">
            <div>
              <Reveal>
                <span className="eyebrow text-goldlight">Company Growth</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h3 className="mt-4 font-serif text-3xl font-bold text-parchment sm:text-4xl">
                  Scaling impact, year after year
                </h3>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-4 max-w-xl text-cream/70">
                  Through disciplined delivery and lasting partnerships, MDIS has grown steadily — reaching approximately{" "}
                  <span className="font-semibold text-goldlight">$12 million in revenue by 2024</span> while expanding
                  across automotive, aerospace, life sciences, banking and manufacturing.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="flex items-center gap-4 rounded-2xl border border-gold/25 bg-white/5 px-8 py-6">
                <TrendingUp className="h-10 w-10 text-goldlight" />
                <div>
                  <div className="font-serif text-4xl font-bold text-gold-gradient sm:text-5xl">
                    $<Counter to={12} />M
                  </div>
                  <div className="text-xs uppercase tracking-wider text-cream/60">Revenue · 2024</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Ornament className="mb-10" />
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.org}>
              <Quote className="mx-auto h-10 w-10 text-gold" />
              <p className="mt-6 font-display text-2xl font-medium leading-relaxed text-navy sm:text-3xl">
                “{t.quote}”
              </p>
              <div className="mt-7">
                <p className="font-serif text-lg font-semibold text-navy">{t.author}</p>
                <p className="text-sm text-golddeep">{t.org}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.2} className="mt-10">
            <GoldButton to="/contact">
              Partner with us <ArrowRight className="h-4 w-4" />
            </GoldButton>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
