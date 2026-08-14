import { useState } from "react";
import { ArrowUpRight, Clock, Mail, ArrowRight, Check } from "lucide-react";
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
import { BLOG_FEATURED, BLOG_TOPICS } from "@/data/site";

export default function Blog() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Our Blog"
        title={<>Insights on <span className="text-gold-gradient">enterprise technology</span></>}
        subtitle="Business strategies, digital transformation, technology trends and best practices across Polarion, Mendix and the wider engineering ecosystem."
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />

      {/* Featured */}
      <Section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Featured Articles"
            title={<>Fresh from the <span className="text-gold-gradient">engineering room</span></>}
          />
          <Ornament className="mt-8" />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Lead article */}
            <StaggerItem className="h-full">
              <a
                href="#"
                className="card-raise group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white hover:border-gold/40"
              >
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-ink">
                  <div className="bg-grid-gold absolute inset-0 opacity-40" />
                  <span className="relative font-serif text-5xl text-gold-gradient">01</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-gold/10 px-3 py-1 font-semibold uppercase tracking-wide text-golddeep">
                      {BLOG_FEATURED[0].tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slatey">
                      <Clock className="h-3.5 w-3.5" /> {BLOG_FEATURED[0].read}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-navy group-hover:text-golddeep">
                    {BLOG_FEATURED[0].title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slatey">{BLOG_FEATURED[0].excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-golddeep">
                    Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </StaggerItem>

            {/* Side list */}
            <div className="grid gap-6">
              {BLOG_FEATURED.slice(1).map((b) => (
                <StaggerItem key={b.title}>
                  <a
                    href="#"
                    className="card-raise group flex gap-5 rounded-2xl border border-navy/10 bg-white p-5 hover:border-gold/40"
                  >
                    <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-ink">
                      <span className="font-serif text-2xl text-goldlight">
                        {BLOG_FEATURED.indexOf(b) + 1}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-xs text-slatey">
                        <span className="rounded-full bg-gold/10 px-2.5 py-0.5 font-semibold uppercase tracking-wide text-golddeep">
                          {b.tag}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {b.read}
                        </span>
                      </div>
                      <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-navy group-hover:text-golddeep">
                        {b.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-slatey">{b.excerpt}</p>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Topics */}
      <Section className="relative overflow-hidden bg-navy">
        <div className="bg-grid-gold pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <SectionTitle
            light
            align="center"
            eyebrow="More To Explore"
            title={<>Topics we're <span className="text-gold-gradient">writing about</span></>}
          />
          <Ornament light className="mt-8" />
          <StaggerGroup className="mt-10 flex flex-wrap justify-center gap-3">
            {BLOG_TOPICS.map((t) => (
              <StaggerItem key={t}>
                <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-gold/25 bg-white/5 px-5 py-2.5 text-sm text-cream/80 transition-colors hover:border-gold hover:bg-gold hover:text-ink">
                  {t} <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      {/* Newsletter */}
      <Section className="bg-parchment">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="rounded-3xl border border-navy/10 bg-white p-8 text-center sm:p-12">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy text-goldlight">
                <Mail className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-bold text-navy sm:text-3xl">
                Stay ahead of the transformation
              </h3>
              <p className="mx-auto mt-3 max-w-md text-slatey">
                Get our latest articles on Polarion, Mendix, AI and digital transformation — straight to your inbox.
              </p>

              {sent ? (
                <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold/15 px-6 py-3 text-sm font-semibold text-golddeep">
                  <Check className="h-4 w-4" /> You're subscribed. Thank you!
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.trim()) setSent(true);
                  }}
                  className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 rounded-full border border-navy/15 bg-ivory px-5 py-3 text-sm text-navy placeholder:text-slatey/60 focus:border-gold focus:outline-none"
                  />
                  <GoldButton onClick={() => email.trim() && setSent(true)}>
                    Subscribe <ArrowRight className="h-4 w-4" />
                  </GoldButton>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
