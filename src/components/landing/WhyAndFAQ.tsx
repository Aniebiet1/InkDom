import { Sparkles, Globe2, ShieldCheck, HeartHandshake, BookMarked, Feather, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  {
    icon: Globe2,
    title: "African Voices, Global Stage",
    desc: "Stories rooted in our soil, written for the world to feel.",
  },
  {
    icon: Feather,
    title: "Curated, Not Cluttered",
    desc: "Every story is hand-picked. No noise, no filler — only craft.",
  },
  {
    icon: HeartHandshake,
    title: "Writers Get Paid Fairly",
    desc: "70% revenue share and direct tipping from readers who care.",
  },
  {
    icon: BookMarked,
    title: "Read Anywhere",
    desc: "Mobile, tablet, web — your library follows you offline.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Ad-Free",
    desc: "No tracking, no popups. Just the page and the prose.",
  },
  {
    icon: Sparkles,
    title: "Built by Readers",
    desc: "Designed with the rituals of bookworms — bookmarks, notes, moods.",
  },
];

const faqs = [
  {
    q: "Is InkDom free to use?",
    a: "Yes — reading is free. We offer an optional Patron membership for offline downloads, audio narration and early-access drops.",
  },
  {
    q: "Who can publish on InkDom?",
    a: "Any writer with a story to tell. Submit through our Writers portal — our editors review every submission within 7 days.",
  },
  {
    q: "How do writers earn?",
    a: "Writers earn 70% of subscription revenue tied to their readership, plus 100% of direct tips from readers.",
  },
  {
    q: "Can I read offline?",
    a: "Patron members can download up to 50 stories at a time. Your highlights and notes sync the moment you're back online.",
  },
  {
    q: "Do you support languages other than English?",
    a: "We currently publish in English, with growing collections in Pidgin, Yoruba, Swahili, Hausa and French. More on the way.",
  },
  {
    q: "How is my data handled?",
    a: "We never sell your data. We don't run third-party ad trackers. Reading on InkDom is private by default.",
  },
];

const FAQItem = ({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-emerald-deep/10">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-medium text-emerald-deep group-hover:text-leaf transition-colors">{q}</span>
        <span
          className={`h-8 w-8 grid place-items-center rounded-full bg-tint-mint text-emerald-deep transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 text-sm text-emerald-deep/70 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const WhyAndFAQ = () => (
  <section id="faq" className="bg-cream text-cream-foreground py-20 md:py-28 relative overflow-hidden scroll-mt-20">
    {/* soft ornament */}
    <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-leaf/10 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

    <div className="container relative">
      {/* Why InkDom */}
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow !text-leaf">Why InkDom</p>
          <h2 className="display text-3xl md:text-5xl mt-2 text-emerald-deep">
            More than an app — a <span className="italic text-leaf">home for stories</span>
          </h2>
          <p className="mt-4 text-emerald-deep/70 leading-relaxed">
            We built InkDom because the continent's best stories deserved a stage as beautiful as the words themselves.
          </p>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <Reveal key={r.title} delay={i * 0.06}>
              <div className="group bg-white rounded-2xl p-6 border border-emerald-deep/5 shadow-soft hover:shadow-card hover:-translate-y-1 transition h-full">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-tint-mint to-tint-cream grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5 text-emerald-deep" />
                </div>
                <p className="font-medium text-emerald-deep">{r.title}</p>
                <p className="text-sm text-emerald-deep/65 mt-1.5 leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* FAQ */}
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <Reveal>
          <div className="lg:sticky lg:top-24">
            <p className="eyebrow !text-leaf">Frequently Asked</p>
            <h2 className="display text-3xl md:text-5xl mt-2 text-emerald-deep leading-tight">
              Questions, <br />
              <span className="italic text-leaf">answered.</span>
            </h2>
            <p className="mt-4 text-emerald-deep/70 leading-relaxed max-w-md">
              Still curious? Reach out to our team — we read every message.
            </p>
            <a
              href="#signup"
              className="inline-flex mt-6 items-center gap-2 rounded-full bg-leaf text-leaf-foreground px-5 py-3 text-sm font-medium shadow-soft hover:brightness-110 active:scale-95 transition"
            >
              Get in touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white rounded-3xl p-2 sm:p-6 border border-emerald-deep/5 shadow-soft">
            <div className="px-4 sm:px-2">
              {faqs.map((f, i) => (
                <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);