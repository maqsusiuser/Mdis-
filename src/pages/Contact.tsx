import { useState } from "react";
import { Mail, MapPin, Phone, Send, Check, Clock, MessageSquare } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Reveal, SectionTitle, Ornament, Section } from "@/components/ui";
import { BRAND, SERVICES } from "@/data/site";

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: "Email Us",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    sub: "Pre-sales engineering team",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: `🇮🇳 ${BRAND.phoneIN} · 🇺🇸 ${BRAND.phoneUS}`,
    href: `tel:+919247657275`,
    sub: "India & US numbers",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Hyderabad, Telangana",
    sub: BRAND.addressLines.join(" "),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={<>Let's start a <span className="text-gold-gradient">conversation</span></>}
        subtitle="Connect with our pre-sales engineering team to discuss your requirements. Your success is our priority."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <Section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-6">
          {/* Contact cards */}
          <div className="grid gap-5 sm:grid-cols-3">
            {CONTACT_CARDS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <a
                  href={c.href || undefined}
                  className="card-raise flex h-full items-start gap-4 rounded-2xl border border-navy/10 bg-white p-6 hover:border-gold/40"
                >
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy2 text-goldlight">
                    <c.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-golddeep">{c.title}</p>
                    <p className="mt-1 font-serif text-lg font-semibold text-navy">{c.value}</p>
                    <p className="mt-0.5 text-sm text-slatey">{c.sub}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Form + side panel */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            {/* Form */}
            <Reveal>
              <div className="rounded-3xl border border-navy/10 bg-white p-8 sm:p-10">
                {sent ? (
                  <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
                      <Check className="h-8 w-8 text-golddeep" />
                    </span>
                    <h3 className="mt-6 font-serif text-2xl font-bold text-navy">Thank you, {form.name || "friend"}!</h3>
                    <p className="mt-2 max-w-sm text-slatey">
                      Your message has reached our pre-sales engineering team. We'll be in touch shortly to schedule a
                      consultation.
                    </p>
                    <button
                      onClick={() => {
                        setSent(false);
                        setForm({ name: "", email: "", company: "", service: "", message: "" });
                      }}
                      className="mt-6 text-sm font-semibold text-golddeep hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <SectionTitle
                      eyebrow="Send a Message"
                      title={<>Tell us about your <span className="text-gold-gradient">project</span></>}
                    />
                    <form onSubmit={submit} className="mt-7 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Full Name">
                          <input
                            required
                            value={form.name}
                            onChange={update("name")}
                            className="input"
                            placeholder="Your name"
                          />
                        </Field>
                        <Field label="Email">
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={update("email")}
                            className="input"
                            placeholder="you@company.com"
                          />
                        </Field>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Company">
                          <input
                            value={form.company}
                            onChange={update("company")}
                            className="input"
                            placeholder="Company name"
                          />
                        </Field>
                        <Field label="Service of Interest">
                          <select value={form.service} onChange={update("service")} className="input">
                            <option value="">Select a service…</option>
                            {SERVICES.map((s) => (
                              <option key={s.id} value={s.name}>
                                {s.name}
                              </option>
                            ))}
                            <option value="Other">Other</option>
                          </select>
                        </Field>
                      </div>
                      <Field label="Message">
                        <textarea
                          required
                          rows={4}
                          value={form.message}
                          onChange={update("message")}
                          className="input resize-none"
                          placeholder="Briefly describe your requirements…"
                        />
                      </Field>
                      <button
                        type="submit"
                        className="group inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-goldlight via-gold to-golddeep px-7 py-4 text-sm font-semibold text-ink shadow-lg shadow-gold/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/40 sm:w-auto"
                      >
                        <span className="relative z-10 inline-flex items-center gap-2">
                          Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>

            {/* Side panel */}
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col gap-6">
                <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-navy to-ink p-8">
                  <div className="bg-grid-gold pointer-events-none absolute inset-0 opacity-40" />
                  <div className="relative">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
                      <MessageSquare className="h-6 w-6 text-goldlight" />
                    </span>
                    <h3 className="mt-5 font-serif text-2xl font-bold text-parchment">Pre-sales engineering</h3>
                    <p className="mt-2 text-sm text-cream/70">
                      Not sure where to start? Our experts will help you scope, sequence and budget your initiative — no
                      obligation.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-cream/75">
                      {["Schedule a consultation", "Request a demo", "Talk to our experts", "Explore success stories"].map(
                        (t) => (
                          <li key={t} className="flex items-center gap-3">
                            <Check className="h-4 w-4 text-goldlight" /> {t}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                {/* Decorative map / location */}
                <div className="relative flex-1 overflow-hidden rounded-3xl border border-navy/10 bg-white p-8">
                  <div className="bg-grid-light pointer-events-none absolute inset-0 opacity-70" />
                  <div className="relative flex h-full flex-col">
                    <MapPin className="h-7 w-7 text-golddeep" />
                    <h3 className="mt-3 font-serif text-xl font-semibold text-navy">{BRAND.short} Headquarters</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slatey">{BRAND.addressLines.join(" ")}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm text-slatey">
                      <Clock className="h-4 w-4 text-golddeep" /> Mon – Sat · 9:00 – 18:00 IST
                    </div>
                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-sm font-medium text-golddeep">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-gold" /> Serving clients globally
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Ornament className="mt-16" />
        </div>
      </Section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slatey">{label}</span>
      {children}
    </label>
  );
}
