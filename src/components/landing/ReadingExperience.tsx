import { Moon, Bookmark, Headphones, Type, Highlighter, WifiOff } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import readingImg from "@/assets/reading-experience.jpg";

const features = [
  { icon: Type,       title: "Adjustable Typography", desc: "Five serif & sans pairings, line-height, and width." },
  { icon: Moon,       title: "True Dark Mode",        desc: "OLED-friendly sage palette for late-night reading." },
  { icon: Highlighter,title: "Smart Highlights",      desc: "Mark passages, add notes, share quotes instantly." },
  { icon: Bookmark,   title: "Sync Across Devices",   desc: "Pick up exactly where you stopped — phone or tablet." },
  { icon: Headphones, title: "Narrated Audio",        desc: "Listen to chapters voiced by African storytellers." },
  { icon: WifiOff,    title: "Offline Library",       desc: "Download up to 50 stories. Read anywhere, anytime." },
];

export const ReadingExperience = () => (
  <section className="bg-cream text-cream-foreground py-20 md:py-28 relative overflow-hidden">
    <div className="container">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow !text-leaf">Reading experience</p>
          <h2 className="display text-3xl md:text-5xl mt-2 text-emerald-deep">Built for the Love of Reading</h2>
          <p className="mt-4 text-emerald-deep/70 leading-relaxed">
            A modern reading app refined to disappear — so the story is all that's left.
          </p>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Modern device showcase with floating callouts */}
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-leaf/15 via-transparent to-gold/15 blur-2xl" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden shadow-card ring-1 ring-emerald-deep/10"
            >
              <img
                src={readingImg}
                alt="InkDom reading app on phone and tablet"
                loading="lazy"
                className="w-full h-auto block"
                width={1280}
                height={1280}
              />
            </motion.div>

            {/* floating callouts */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden sm:flex absolute -left-3 top-10 items-center gap-2 bg-white rounded-full pl-2 pr-4 py-2 shadow-card border border-emerald-deep/5"
            >
              <span className="h-7 w-7 rounded-full bg-leaf/15 grid place-items-center">
                <Moon className="h-3.5 w-3.5 text-leaf" />
              </span>
              <span className="text-xs font-medium text-emerald-deep">Sage dark mode</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="hidden sm:flex absolute -right-3 bottom-16 items-center gap-2 bg-white rounded-full pl-2 pr-4 py-2 shadow-card border border-emerald-deep/5"
            >
              <span className="h-7 w-7 rounded-full bg-gold/20 grid place-items-center">
                <Type className="h-3.5 w-3.5 text-emerald-deep" />
              </span>
              <span className="text-xs font-medium text-emerald-deep">Tunable type</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 items-center gap-2 bg-white rounded-2xl px-3 py-2 shadow-card border border-emerald-deep/5"
            >
              <span className="h-2 w-2 rounded-full bg-leaf animate-pulse" />
              <div className="text-[11px] leading-tight">
                <p className="font-medium text-emerald-deep">Synced</p>
                <p className="text-emerald-deep/60">page 214 of 388</p>
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 gap-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-5 border border-emerald-deep/5 shadow-soft hover:shadow-card hover:-translate-y-1 transition h-full">
                  <div className="h-10 w-10 rounded-xl bg-tint-mint grid place-items-center mb-3">
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
    </div>
  </section>
);
