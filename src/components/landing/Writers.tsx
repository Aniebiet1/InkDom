import { ArrowRight, BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import w1 from "@/assets/writer-1.jpg";
import w2 from "@/assets/writer-2.jpg";
import w3 from "@/assets/writer-3.jpg";
import w4 from "@/assets/writer-4.jpg";

const writers = [
  { img: w1, name: "Naila Diallo", tag: "Drama · Fantasy", followers: "15.2k", note: "Trending this week" },
  { img: w2, name: "Kwame Asante", tag: "Fantasy · Folklore", followers: "22.7k", note: "Bestseller" },
  { img: w3, name: "Aya Bello",     tag: "Romance · City reads", followers: "9.8k",  note: "High engagement" },
  { img: w4, name: "Tomi Mensah",   tag: "Faith · Healing", followers: "12.4k", note: "Quiet brilliance" },
];

export const Writers = () => (
  <section id="writers" className="bg-cream text-cream-foreground py-24 md:py-28 relative scroll-mt-20">
    <div className="container">
      <div className="flex items-end justify-between gap-6 mb-10">
        <Reveal>
          <div>
            <p className="eyebrow !text-leaf">Top authors</p>
            <h2 className="display text-3xl md:text-5xl mt-2 text-emerald-deep">Featured Writers</h2>
            <p className="text-sm text-emerald-deep/70 mt-2">Follow the voices shaping our continent's next chapter.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <a href="#" className="hidden sm:inline-flex items-center gap-1.5 text-sm text-emerald-deep font-medium hover:gap-2.5 transition-all">
            Browse all writers <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {writers.map((w, i) => (
          <Reveal key={w.name} delay={i * 0.07}>
            <div className="bg-white rounded-2xl p-5 shadow-soft border border-emerald-deep/5 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start gap-3">
                <img src={w.img} alt={w.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-emerald-deep truncate">{w.name}</p>
                    <BadgeCheck className="h-4 w-4 text-leaf shrink-0" />
                  </div>
                  <p className="text-xs text-emerald-deep/60">{w.tag}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <div>
                  <p className="text-emerald-deep/50">Followers</p>
                  <p className="text-emerald-deep font-semibold text-sm">{w.followers}</p>
                </div>
                <span className="chip bg-tint-mint text-emerald-deep">{w.note}</span>
              </div>
              <button className="mt-4 w-full bg-leaf text-leaf-foreground rounded-full py-2 text-sm font-medium hover:brightness-110 transition">
                Follow
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
