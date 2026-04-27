import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const moods = [
  { label: "#MagicSeries",    tone: "bg-leaf/15 text-leaf border-leaf/30" },
  { label: "#LagosLove",      tone: "bg-tint-rose text-emerald-deep border-rose-200" },
  { label: "#CoffeeAndProse", tone: "bg-tint-cream text-emerald-deep border-amber-200" },
  { label: "#LateNights",     tone: "bg-emerald-soft text-foreground border-emerald-line" },
  { label: "#AncientWisdom",  tone: "bg-tint-mint text-emerald-deep border-emerald-200" },
  { label: "#BravelLife",     tone: "bg-tint-sky text-emerald-deep border-sky-200" },
  { label: "#ShortReads",     tone: "bg-leaf/15 text-leaf border-leaf/30" },
  { label: "#HeartbreakStories", tone: "bg-tint-rose text-emerald-deep border-rose-200" },
  { label: "#HistoricDramas", tone: "bg-tint-sun text-emerald-deep border-yellow-200" },
  { label: "#GirlBoss",       tone: "bg-tint-mint text-emerald-deep border-emerald-200" },
  { label: "#FathersTales",   tone: "bg-emerald-soft text-foreground border-emerald-line" },
  { label: "#MotherTongue",   tone: "bg-tint-cream text-emerald-deep border-amber-200" },
];

export const Moods = () => (
  <section className="bg-cream text-cream-foreground py-20 md:py-24 relative">
    <div className="container">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="eyebrow !text-leaf">Trending tags</p>
          <h2 className="display text-3xl md:text-5xl mt-2 text-emerald-deep">Explore by Mood</h2>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {moods.map((m, i) => (
            <motion.button
              key={m.label}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{}}
              className={`chip border ${m.tone} px-4 py-1.5`}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {m.label}
            </motion.button>
          ))}
        </div>
      </Reveal>
    </div>
    <div className="pointer-events-none absolute -bottom-px left-0 right-0 h-32 bg-fade-down" />
  </section>
);
