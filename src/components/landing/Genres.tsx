import { Heart, Drama, Sparkles, GraduationCap, Sun, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const genres = [
  { name: "Romance",  count: "712 stories",  icon: Heart,         tint: "bg-tint-rose",  ring: "ring-rose-200",  blurb: "Love stories woven by the heart of the continent." },
  { name: "Drama",    count: "489 stories",  icon: Drama,         tint: "bg-tint-mint",  ring: "ring-emerald-200", blurb: "Powerful narratives that capture life's turning points." },
  { name: "Fantasy",  count: "356 stories",  icon: Sparkles,      tint: "bg-tint-cream", ring: "ring-amber-200", blurb: "Folklore, myth and magic from ancestral worlds." },
  { name: "Campus",   count: "284 stories",  icon: GraduationCap, tint: "bg-tint-sky",   ring: "ring-sky-200",   blurb: "Young voices, big dreams, and unforgettable years." },
  { name: "Faith",    count: "198 stories",  icon: Sun,           tint: "bg-tint-sun",   ring: "ring-yellow-200",blurb: "Stories of hope, conviction and quiet wonder." },
];

export const Genres = () => (
  <section id="genres" className="bg-cream text-cream-foreground pb-24 md:pb-32 relative scroll-mt-20">
    {/* decorative ornament */}
    <div className="container">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow !text-leaf">Wander the Library</p>
          <h2 className="display text-3xl md:text-5xl mt-2 text-emerald-deep">Genres of the Continent</h2>
          <div className="mt-4 flex items-center justify-center gap-3 text-emerald-deep/60">
            <span className="h-px w-8 bg-emerald-deep/20" />
            <span className="text-sm">Pick a mood. Each tier shelters its own rhythm — characters, legends, surprises and half-told dreams.</span>
            <span className="h-px w-8 bg-emerald-deep/20" />
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {genres.map((g, i) => {
          const Icon = g.icon;
          return (
            <Reveal key={g.name} delay={i * 0.06}>
              <motion.button
                whileHover={{ y: -8, rotate: -1 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className={`group relative w-full text-left ${g.tint} rounded-2xl p-5 ring-1 ${g.ring} overflow-hidden`}
              >
                {/* subtle pattern */}
                <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(hsl(var(--emerald-deep))_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />
                <div className="relative">
                  <div className="h-11 w-11 rounded-xl bg-white/70 grid place-items-center shadow-soft">
                    <Icon className="h-5 w-5 text-emerald-deep" strokeWidth={1.6} />
                  </div>
                  <h3 className="display text-lg mt-4 text-emerald-deep">{g.name}</h3>
                  <p className="text-[11px] text-emerald-deep/60">{g.count}</p>
                  <p className="text-xs text-emerald-deep/70 mt-2 leading-snug line-clamp-2">{g.blurb}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-[11px] font-medium text-emerald-deep/80 bg-white/60 rounded-full px-3 py-1 border border-emerald-deep/10 group-hover:gap-2 transition-all">
                    Browse <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.button>
            </Reveal>
          );
        })}
      </div>
    </div>
    {/* subtle fade into emerald */}
    <div className="pointer-events-none absolute -bottom-px left-0 right-0 h-12 bg-fade-down opacity-60" />
  </section>
);
