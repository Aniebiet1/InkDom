import { Search, BookOpen, PenLine, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { n: 1, title: "Discover", icon: Search,   text: "Browse thousands of African stories by genre, mood or trending tags. Find your next obsession in minutes.", actions: ["Explore feed", "Curated lists"] },
  { n: 2, title: "Read & Engage", icon: BookOpen, text: "Immerse yourself in beautifully formatted serial chapters, drop reactions, and tap your bookmarks.", actions: ["Free trials", "Bookmarks"] },
  { n: 3, title: "Write & Publish", icon: PenLine, text: "Share your voice with the continent. Publish chapters, build a following, and earn royalties from your readers.", actions: ["Start writing", "Publish a series"] },
];

export const HowItWorks = () => (
  <section className="py-24 md:py-32 relative">
    <div className="container">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow">How it works</p>
          <h2 className="display text-3xl md:text-5xl mt-2">Your Journey Begins Here</h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-10 md:gap-12 relative">
        {/* connecting line on md+ */}
        <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="text-center relative">
                <div className="relative mx-auto h-14 w-14">
                  <div className="absolute inset-0 rounded-full bg-emerald-soft border border-gold/40 grid place-items-center">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-emerald-deep text-[11px] font-bold grid place-items-center">{s.n}</span>
                </div>
                <h3 className="display text-2xl mt-5">{s.title}</h3>
                <p className="text-sm text-foreground/70 mt-3 max-w-xs mx-auto leading-relaxed">{s.text}</p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {s.actions.map(a => (
                    <span key={a} className="chip border border-emerald-line/60 text-foreground/80 hover:bg-emerald-soft transition cursor-pointer">
                      {a} <ArrowRight className="h-3 w-3" />
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
