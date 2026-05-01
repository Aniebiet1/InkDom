import { Play, BookOpen, PenLine, Users, ArrowDown, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-reader.jpg";
import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <section className="relative mt-6 pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      {/* subtle ornament */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(hsl(var(--gold))_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="container relative grid md:grid-cols-2 gap-8 md:gap-10 items-start">
        {/* Left */}
        <div className="mt-10 md:mt-16">
          <div className="flex items-center gap-3 text-gold mb-5 animate-slide-up-in" style={{ animationDelay: "0.05s" }}>
              <span className="h-px w-8 bg-gold/50" />
              <span className="eyebrow">Chapter One · Est. 2024</span>
              <span className="h-px w-8 bg-gold/50" />
          </div>
          <h1 className="display text-4xl sm:text-5xl md:text-5xl leading-[1.02] text-foreground animate-slide-up-in" style={{ animationDelay: "0.25s" }}>
            Where <span className="text-gold">Words</span><br />
            <span className="italic text-gold-soft">Collide</span>
          </h1>
          <p className="mt-3 max-w-md text-foreground/70 leading-relaxed animate-slide-up-in" style={{ animationDelay: "0.5s" }}>
              Discover powerful, culturally rich stories crafted by African voices —
              fiction too vivid to forget.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 animate-slide-up-in" style={{ animationDelay: "0.7s" }}>
              <a
                href="#stories"
                className="inline-flex items-center gap-2 rounded-full bg-gold text-emerald-deep px-5 py-3 text-sm font-semibold shadow-soft hover:brightness-110 active:scale-95 transition animate-attention-pulse"
              >
                <BookOpen className="h-4 w-4" /> Start Reading Free
              </a>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 text-foreground px-5 py-3 text-sm font-medium hover:bg-emerald-soft active:scale-95 transition"
              >
                <PenLine className="h-4 w-4" /> Become a Writer
              </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm animate-slide-up-in" style={{ animationDelay: "0.85s" }}>
              <Stat icon={<BookOpen className="h-4 w-4" />} value="4,200+" label="Stories Published" />
              <Stat icon={<PenLine className="h-4 w-4" />} value="340" label="Active Writers" />
              <Stat icon={<Users className="h-4 w-4" />} value="54" label="African Nations" />
          </div>
        </div>

        {/* Right — hero image card */}
        <Reveal delay={0.15}>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden shadow-card ring-1 ring-emerald-line/60"
            >
              <img
                src={heroImg}
                alt="A young African woman lost in a novel"
                className="w-full h-auto max-h-[350px] md:max-h-[420px] object-cover object-center"
                loading="eager"
              />
              {/* warm tone overlay so it blends with emerald palette */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/55 via-emerald-deep/10 to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--gold)/0.18),transparent_55%)]" />
              <button className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur px-3 py-1.5 text-xs text-foreground border border-white/10">
                <Play className="h-3 w-3 fill-current" /> 30 second intro
              </button>
            </motion.div>
            {/* floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-5 left-3 right-3 sm:left-6 sm:right-10 rounded-2xl bg-emerald-soft/95 backdrop-blur p-3.5 shadow-card border border-emerald-line/60 animate-float"
            >
              <div className="flex gap-3">
                <div className="h-9 w-9 shrink-0 rounded-full bg-gold/20 grid place-items-center text-gold">
                  <Quote className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <p className="text-foreground/90 leading-snug">
                    "Every story is the heartbeat of the continent's truth."
                  </p>
                  <p className="mt-1 text-xs text-foreground/60">— Chinua, Reader</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
      <div className="mt-14 flex justify-center text-foreground/50">
        <a href="#stories" className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase hover:text-gold transition">
          Scroll to discover <ArrowDown className="h-3 w-3 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

const Stat = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-gold">{icon}</span>
    <div>
      <div className="font-semibold text-foreground">{value}</div>
      <div className="text-xs text-foreground/60">{label}</div>
    </div>
  </div>
);
