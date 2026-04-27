import { Moon, Bookmark, Headphones, Type } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  { icon: Moon,       title: "Dark Mode",     desc: "Easy-on-the-eye reading at any hour." },
  { icon: Bookmark,   title: "Bookmarks",     desc: "Save passages and pick up where you left off." },
  { icon: Headphones, title: "Audio Stories", desc: "Listen to narrated chapters offline." },
  { icon: Type,       title: "Typography",    desc: "Tailor fonts and spacing to your taste." },
];

export const ReadingExperience = () => (
  <section className="bg-cream text-cream-foreground py-20 md:py-28">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <Reveal>
          <p className="eyebrow !text-leaf">Reading experience</p>
          <h2 className="display text-3xl md:text-5xl mt-2 text-emerald-deep">Built for the Love of Reading</h2>
          <p className="mt-4 text-emerald-deep/70 max-w-md leading-relaxed">
            Every detail of InkDom is crafted to keep you in the story — from the first
            word to the final chapter.
          </p>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-4 border border-emerald-deep/5 shadow-soft hover:shadow-card transition">
                  <div className="h-9 w-9 rounded-lg bg-tint-mint grid place-items-center mb-3">
                    <Icon className="h-4 w-4 text-emerald-deep" />
                  </div>
                  <p className="font-medium text-emerald-deep">{f.title}</p>
                  <p className="text-xs text-emerald-deep/65 mt-1 leading-snug">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Reveal delay={0.15}>
        <div className="rounded-2xl bg-emerald-deep text-foreground p-6 shadow-card border border-emerald-line">
          <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-leaf" /> The Daughter of Saharan Wind
            </span>
            <span>Chapter 4</span>
          </div>
          <p className="font-display text-lg leading-relaxed text-foreground/90">
            "Aisha walked into the courtyard at dawn. The wind, older than her grandmother,
            moved across the sand like a memory she had not yet earned. It whispered her
            name in a language her mouth had forgotten — but her bones still remembered."
          </p>
          <div className="mt-6 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <button className="chip bg-emerald-soft border border-emerald-line">A−</button>
              <button className="chip bg-emerald-soft border border-emerald-line">A+</button>
              <button className="chip bg-emerald-soft border border-emerald-line">Aa</button>
            </div>
            <div className="text-foreground/50">3 min left in chapter</div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
