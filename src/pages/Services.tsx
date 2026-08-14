import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Check, ArrowRight, MapPin, Globe2, Ship } from "lucide-react";
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
import { SERVICES } from "@/data/site";

const WHY_SERVICES = [
  "Experienced technical professionals",
  "Direct access to leadership",
  "Reduced project & enhancement costs",
  "Broad, cross-platform technology skills",
  "Industry-specific expertise",
  "Leadership involvement on every program",
  "Combined IT & business expertise",
  "Mature project-management processes",
];

const DELIVERY_MODELS = [
  { icon: MapPin, title: "Onsite", text: "Embedded experts working directly within your teams and facilities." },
  { icon: Globe2, title: "Nearshore", text: "Time-zone-aligned delivery for close collaboration and speed." },
  { icon: Ship, title: "Offshore", text: "Cost-optimized global delivery centers with mature governance." },
];

export default function Services() {
  const [params] = useSearchParams();

  useEffect(() => {
    const focus = params.get("focus");
    if (!focus) return;
    const el = document.getElementById(focus);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 320);
  }, [params]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Technology partnerships built for <span className="text-gold-gradient">customer success</span></>}
        subtitle="We focus on collaboration and long-term relationships — engineering solutions around your unique requirements, from lifecycle platforms to intelligent automation."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      {/* Quick jump */}
      <div className="sticky top-[68px] z-30 border-b border-navy/10 bg-ivory/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 no-bar">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="whitespace-nowrap rounded-full border border-navy/10 bg-white px-4 py-1.5 text-xs font-medium text-navy/70 transition-colors hover:border-gold/50 hover:text-golddeep"
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Detailed services */}
      <Section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <StaggerGroup className="grid gap-6 lg:grid-cols-2">
            {SERVICES.map((s) => (
              <StaggerItem key={s.id} className="h-full">
                <div
                  id={s.id}
                  className="card-raise flex h-full scroll-mt-32 flex-col rounded-2xl border border-navy/10 bg-white p-8 hover:border-gold/40"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy2 text-goldlight">
                      <s.icon className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-navy">{s.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slatey">{s.description}</p>
                  <div className="mt-5 grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
                    {s.capabilities.map((c) => (
                      <div key={c} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-golddeep" />
                        <span className="text-sm text-navy/80">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      {/* Why choose services */}
      <Section className="bg-parchment">
        <div className="bg-grid-light pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              eyebrow="Why Choose Us"
              title={<>Senior talent, <span className="text-gold-gradient">direct leadership</span></>}
              intro="Experienced professionals, leadership involvement and mature delivery — engineered to reduce cost and risk while raising quality."
            />
            <StaggerGroup className="grid gap-3 sm:grid-cols-2">
              {WHY_SERVICES.map((w) => (
                <StaggerItem key={w}>
                  <div className="flex items-start gap-3 rounded-xl border border-navy/10 bg-white p-4">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rotate-45 bg-gold" />
                    <span className="text-sm font-medium text-navy/80">{w}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          {/* Delivery models */}
          <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-3">
            {DELIVERY_MODELS.map((d) => (
              <StaggerItem key={d.title}>
                <div className="card-raise h-full rounded-2xl border border-navy/10 bg-white p-7 text-center hover:border-gold/40">
                  <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-goldlight">
                    <d.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-navy">{d.title} Delivery</h3>
                  <p className="mt-2 text-sm text-slatey">{d.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Ornament className="mt-16" />
          <Reveal className="mt-10 text-center">
            <GoldButton to="/contact">
              Discuss your requirements <ArrowRight className="h-4 w-4" />
            </GoldButton>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
