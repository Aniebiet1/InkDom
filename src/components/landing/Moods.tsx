import { Reveal } from "./Reveal";

const moods = [
  { label: "#MagicSeries",       tone: "bg-leaf/15 text-leaf border-leaf/30" },
  { label: "#LagosLove",         tone: "bg-tint-rose text-emerald-deep border-rose-200" },
  { label: "#CoffeeAndProse",    tone: "bg-tint-cream text-emerald-deep border-amber-200" },
  { label: "#LateNights",        tone: "bg-emerald-soft text-foreground border-emerald-line" },
  { label: "#AncientWisdom",     tone: "bg-tint-mint text-emerald-deep border-emerald-200" },
  { label: "#BraveLife",         tone: "bg-tint-sky text-emerald-deep border-sky-200" },
  { label: "#ShortReads",        tone: "bg-leaf/15 text-leaf border-leaf/30" },
  { label: "#HeartbreakStories", tone: "bg-tint-rose text-emerald-deep border-rose-200" },
  { label: "#HistoricDramas",    tone: "bg-tint-sun text-emerald-deep border-yellow-200" },
  { label: "#GirlBoss",          tone: "bg-tint-mint text-emerald-deep border-emerald-200" },
  { label: "#FathersTales",      tone: "bg-emerald-soft text-foreground border-emerald-line" },
  { label: "#MotherTongue",      tone: "bg-tint-cream text-emerald-deep border-amber-200" },
];

const Chip = ({ label, tone }: { label: string; tone: string }) => (
  <span className={`chip border ${tone} px-4 py-1.5 whitespace-nowrap`}>{label}</span>
);

export const Moods = () => {
  // duplicate the list so the marquee loops seamlessly
  const loop = [...moods, ...moods];

  return (
    <section className="bg-cream text-cream-foreground py-20 md:py-24 relative overflow-hidden">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow !text-leaf">Trending tags</p>
            <h2 className="display text-3xl md:text-5xl mt-2 text-emerald-deep">Explore by Mood</h2>
          </div>
        </Reveal>
      </div>

      {/* Desktop: horizontal right-to-left marquee */}
      <div className="hidden md:block relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent z-10" />
        <div className="overflow-hidden">
          <div className="flex gap-3 w-max animate-marquee-x hover:[animation-play-state:paused]">
            {loop.map((m, i) => (
              <Chip key={`x-${i}`} label={m.label} tone={m.tone} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical top-to-bottom marquee */}
      <div className="md:hidden relative h-72 overflow-hidden mt-2">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-cream to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-cream to-transparent z-10" />
        <div className="absolute inset-x-0 flex flex-col items-center gap-2 animate-marquee-y">
          {loop.map((m, i) => (
            <Chip key={`y-${i}`} label={m.label} tone={m.tone} />
          ))}
        </div>
      </div>
    </section>
  );
};
