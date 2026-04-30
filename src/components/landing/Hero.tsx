import { Play, BookOpen, PenLine, Users, ArrowDown, Quote } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-reader.jpg";
import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-24 md:pt-32 md:pb-28 overflow-hidden">
      {/* subtle ornament */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(hsl(var(--gold))_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="container relative grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 text-gold mb-5 animate-slide-up-in" style={{ animationDelay: "0.05s" }}>
              <span className="h-px w-8 bg-gold/50" />
              <span className="eyebrow">Chapter One · Est. 2024</span>
              <span className="h-px w-8 bg-gold/50" />
          </div>
          <h1 className="display text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-foreground animate-slide-up-in" style={{ animationDelay: "0.25s" }}>
            Where <span className="text-gold">Words</span><br />
            <span className="italic text-gold-soft">Collide</span>
          </h1>
          <p className="mt-5 max-w-md text-foreground/70 leading-relaxed animate-slide-up-in" style={{ animationDelay: "0.5s" }}>
              Discover powerful, culturally rich stories crafted by African voices —
              fiction too vivid to forget.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 animate-slide-up-in" style={{ animationDelay: "0.7s" }}>
              <a
                href="#stories"
                className="inline-flex items-center gap-2 rounded-full bg-gold text-emerald-deep px-5 py-3 text-sm font-semibold shadow-soft hover:brightness-110 active:scale-95 transition animate-attention-pulse"
              >
                <BookOpen className="h-4 w-4" /> Start Reading Free
              </a>
              <a
                href="#signup"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 text-foreground px-5 py-3 text-sm font-medium hover:bg-emerald-soft active:scale-95 transition"
              >
                <PenLine className="h-4 w-4" /> Become a Writer
              </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm animate-slide-up-in" style={{ animationDelay: "0.9s" }}>
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
                alt="Reader holding a book of fire"
                className="w-full h-[420px] md:h-[520px] object-cover"
                width={1024}
                height={1024}
              />
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
              className="absolute -bottom-6 left-3 right-3 sm:left-6 sm:right-10 rounded-2xl bg-emerald-soft/95 backdrop-blur p-4 shadow-card border border-emerald-line/60 animate-float"
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
      <div className="mt-20 flex justify-center text-foreground/50">
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
