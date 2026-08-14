import { Check, ShieldCheck, Trophy, ArrowRight, BadgePercent, Clock, Layers } from "lucide-react";
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
import { POD_TEAM, POD_PROCESS } from "@/data/site";

const RISK = [
  "Senior technical people leaving mid-project",
  "Slow, costly recruitment of replacements",
  "Delivery risk on critical programs",
];

const APPROACH = [
  { icon: BadgePercent, title: "Flexible Pricing", text: "Pricing groups that scale with your program." },
  { icon: Layers, title: "Structured Teams", text: "Balanced pods built around your stack." },
  { icon: Clock, title: "Flexible Billing", text: "Clear terms and flexible billing cycles." },
  { icon: ShieldCheck, title: "Risk Reduction", text: "Continuity engineered in from day one." },
];

export default function HireToPod() {
  return (
    <>
      <PageHero
        eyebrow="Hire To Pod"
        title={<>A flexible team model that <span className="text-gold-gradient">reduces risk</span></>}
        subtitle="Hire To Pod is a dedicated, structured development team designed to reduce project-delivery risk — with a complimentary business analyst and solution architect."
        crumbs={[{ label: "Home", to: "/" }, { label: "Hire To Pod" }]}
      />

      {/* Pod composition */}
      <Section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            align="center"
            eyebrow="Example Pod"
            title={<>A complete team, <span className="text-gold-gradient">ready to go</span></>}
            intro="A balanced pod with the right seniority mix — plus dedicated leadership at no additional cost."
          />
          <Ornament className="mt-8" />

          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {POD_TEAM.map((t) => (
              <StaggerItem key={t.role}>
                <div className="card-raise flex items-center gap-4 rounded-2xl border border-navy/10 bg-white p-6 hover:border-gold/40">
                  <span className="relative inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy2 text-goldlight">
                    <t.icon className="h-6 w-6" strokeWidth={1.6} />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-sm font-bold text-ink">
                      {t.count}
                    </span>
                  </span>
                  <span className="font-serif text-lg font-semibold text-navy">{t.role}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1} className="mt-6">
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-gold/30 bg-gold/[0.05] p-6 text-center sm:flex-row sm:gap-8">
              {["Dedicated Business Analyst — at no additional cost", "Dedicated Solution Architect — at no additional cost"].map(
                (t) => (
                  <span key={t} className="inline-flex items-center gap-2 text-sm font-medium text-navy">
                    <Check className="h-5 w-5 text-golddeep" /> {t}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Risk reduction */}
      <Section className="relative overflow-hidden bg-navy">
        <div className="bg-grid-gold pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                light
                eyebrow="Risk Reduction"
                title={<>Built for <span className="text-gold-gradient">delivery continuity</span></>}
                intro="Hire To Pod is engineered for organizations exposed to delivery risk when key people leave or replacements are hard to find."
              />
              <ul className="mt-8 space-y-3">
                {RISK.map((r) => (
                  <Reveal key={r}>
                    <li className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-goldlight" />
                      <span className="text-sm text-cream/75">{r}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <StaggerGroup className="grid gap-4 sm:grid-cols-2">
              {APPROACH.map((a) => (
                <StaggerItem key={a.title}>
                  <div className="card-raise h-full rounded-2xl border border-gold/15 bg-white/[0.03] p-6 hover:border-gold/40">
                    <a.icon className="h-7 w-7 text-goldlight" strokeWidth={1.6} />
                    <h3 className="mt-4 font-serif text-lg font-semibold text-parchment">{a.title}</h3>
                    <p className="mt-1 text-sm text-cream/65">{a.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            align="center"
            eyebrow="The Process"
            title={<>Four steps to <span className="text-gold-gradient">working together</span></>}
          />
          <Ornament className="mt-8" />
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {POD_PROCESS.map((p) => (
              <StaggerItem key={p.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/30 bg-white font-serif text-2xl font-bold text-golddeep">
                  {p.step}
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-slatey">{p.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      {/* Success rate */}
      <Section className="bg-ivory">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-gold/25 bg-gradient-to-br from-navy to-ink p-12 text-center">
              <Trophy className="h-12 w-12 text-goldlight" />
              <div className="font-serif text-6xl font-bold text-gold-gradient sm:text-7xl">
                <Counter to={95} suffix="%" />
              </div>
              <p className="max-w-md text-cream/75">
                A <span className="font-semibold text-goldlight">95% success rate</span> from repeat clients — the clearest
                measure of how Hire To Pod performs in the real world.
              </p>
              <GoldButton to="/contact" className="mt-2">
                Build your pod <ArrowRight className="h-4 w-4" />
              </GoldButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
