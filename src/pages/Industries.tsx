import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  GoldButton,
  Ornament,
  Section,
  Chip,
} from "@/components/ui";
import { INDUSTRIES } from "@/data/site";

const COMPLIANCE = ["ASPICE", "DO-178C", "ARP4754A", "ISO 26262", "IEC 62304", "FDA", "GxP", "ISO 9001"];

export default function Industries() {
  const [params] = useSearchParams();

  useEffect(() => {
    const focus = params.get("focus");
    if (!focus) return;
    const el = document.getElementById(focus);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 320);
  }, [params]);

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Deep expertise in <span className="text-gold-gradient">high-stakes</span> sectors</>}
        subtitle="We focus on industries where compliance, safety and traceability define success — bringing certified processes and domain-specific frameworks to every engagement."
        crumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
      />

      <Section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <StaggerGroup className="grid gap-6 md:grid-cols-2">
            {INDUSTRIES.map((ind) => (
              <StaggerItem key={ind.id} className="h-full">
                <div
                  id={ind.id}
                  className="card-raise flex h-full scroll-mt-28 flex-col rounded-2xl border border-navy/10 bg-white p-8 hover:border-gold/40"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy2 text-goldlight">
                      <ind.icon className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-navy">{ind.name}</h3>
                      <p className="text-sm text-golddeep">{ind.tagline}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-slatey">Focus areas</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {ind.focus.map((f) => (
                      <Chip key={f}>{f}</Chip>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      {/* Compliance band */}
      <Section className="relative overflow-hidden bg-navy py-24">
        <div className="bg-grid-gold pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
              <ShieldCheck className="h-7 w-7 text-goldlight" />
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-3xl font-bold text-parchment sm:text-4xl">
              Compliance-focused <span className="text-gold-gradient">delivery</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-4 max-w-2xl text-cream/70">
              Real-world experience with the standards and frameworks that govern your industry — built into how we
              specify, build, validate and deliver.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap justify-center gap-2.5">
              {COMPLIANCE.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/5 px-4 py-2 text-sm font-medium text-cream/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-goldlight" /> {c}
                </span>
              ))}
            </div>
          </Reveal>
          <Ornament light className="mt-12" />
          <Reveal delay={0.3} className="mt-8">
            <GoldButton to="/services?focus=functional-safety">
              Explore safety & compliance <ArrowRight className="h-4 w-4" />
            </GoldButton>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
