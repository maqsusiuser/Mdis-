import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  SectionTitle,
  GoldButton,
  Ornament,
  Section,
} from "@/components/ui";
import { TEAM, type Member } from "@/data/site";

const GROUPS = ["All", "Leadership", "Delivery", "Engineering", "Growth"] as const;

const groupColor: Record<Member["group"], string> = {
  Leadership: "bg-gold/15 text-golddeep",
  Delivery: "bg-blue-500/10 text-blue-700",
  Engineering: "bg-emerald-500/10 text-emerald-700",
  Growth: "bg-rose-500/10 text-rose-700",
};

const TRAITS = ["Innovators", "Developers", "Problem solvers", "Technology specialists", "IT professionals"];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export default function Team() {
  const [group, setGroup] = useState<(typeof GROUPS)[number]>("All");
  const list = group === "All" ? TEAM : TEAM.filter((m) => m.group === group);

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title={<>The people behind the <span className="text-gold-gradient">engineering</span></>}
        subtitle="A blend of experienced professionals and technology specialists — innovators, developers and problem solvers united by a passion for transformation."
        crumbs={[{ label: "Home", to: "/" }, { label: "Team" }]}
      />

      {/* Traits */}
      <Section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            align="center"
            eyebrow="Who We Are"
            title={<>Specialists across <span className="text-gold-gradient">every discipline</span></>}
            intro="From Polarion and Mendix experts to life-sciences and digital-transformation leaders — our people bring deep domain and platform mastery."
          />
          <Ornament className="mt-8" />
          <Reveal delay={0.1} className="mt-10">
            <div className="flex flex-wrap justify-center gap-2.5">
              {TRAITS.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white px-5 py-2.5 text-sm font-medium text-navy"
                >
                  <Sparkles className="h-4 w-4 text-golddeep" /> {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Team grid */}
      <Section className="relative overflow-hidden bg-navy">
        <div className="bg-grid-gold pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <SectionTitle
              light
              align="center"
              eyebrow="Meet The Team"
              title={<>Leadership & <span className="text-gold-gradient">specialists</span></>}
            />
            <div className="flex flex-wrap justify-center gap-2">
              {GROUPS.map((g) => (
                <button
                  key={g}
                  onClick={() => setGroup(g)}
                  className={
                    "rounded-full border px-5 py-2 text-sm font-medium transition-colors " +
                    (group === g
                      ? "border-gold bg-gold text-ink"
                      : "border-gold/25 text-cream/70 hover:border-gold/60 hover:text-goldlight")
                  }
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((m) => (
              <StaggerItem key={m.name} className="h-full">
                <div className="card-raise group flex h-full flex-col items-center rounded-2xl border border-gold/15 bg-white/[0.03] p-7 text-center backdrop-blur-sm hover:border-gold/40 hover:bg-white/[0.06]">
                  <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-goldlight via-gold to-golddeep font-serif text-2xl font-bold text-ink">
                    {initials(m.name)}
                    <span className="absolute inset-0 rounded-full ring-1 ring-gold/40 ring-offset-2 ring-offset-navy" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-parchment">{m.name}</h3>
                  <p className="mt-1 text-sm text-goldlight">{m.role}</p>
                  <span
                    className={
                      "mt-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide " +
                      groupColor[m.group]
                    }
                  >
                    {m.group}
                  </span>
                  <p className="mt-3 text-xs text-cream/55">{m.focus}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Ornament light className="mt-16" />
          <Reveal className="mt-8 text-center">
            <GoldButton to="/hire-to-pod">
              Hire a dedicated pod <ArrowRight className="h-4 w-4" />
            </GoldButton>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
