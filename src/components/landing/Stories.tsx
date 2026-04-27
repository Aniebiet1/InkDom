import { Heart, Bookmark, Plus, ArrowRight, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import sahara from "@/assets/story-sahara.jpg";
import baobab from "@/assets/story-baobab.jpg";
import lagos from "@/assets/story-lagos.jpg";

const stories = [
  {
    img: sahara, tag: "Trending", tagColor: "bg-gold text-emerald-deep",
    genre: "Drama", time: "12 min read",
    title: "The Daughter of Saharan Wind",
    excerpt: "Aisha returns to her grandmother's village to uncover a secret buried for three generations.",
    author: "Naila Diallo", likes: "2.4k", saves: "880",
  },
  {
    img: baobab, tag: "Editor's pick", tagColor: "bg-leaf text-white",
    genre: "Fantasy", time: "24 min read",
    title: "When the Baobab Spoke",
    excerpt: "Ancient trees no longer keep silent — a village begins to listen, and what they say changes their path forever.",
    author: "Bayo Bature", likes: "4.1k", saves: "1.2k",
  },
  {
    img: lagos, tag: "New voice", tagColor: "bg-tint-rose text-emerald-deep",
    genre: "Romance", time: "18 min read",
    title: "Letters From Lagos",
    excerpt: "Two strangers exchange letters across the city, falling for words before faces.",
    author: "Tunde Bowen", likes: "1.5k", saves: "640",
  },
];

export const Stories = () => (
  <section id="stories" className="bg-cream text-cream-foreground py-20 md:py-28 relative">
    <div className="container">
      <div className="flex items-end justify-between gap-6 mb-10">
        <Reveal>
          <div>
            <p className="eyebrow !text-leaf">Featured this week</p>
            <h2 className="display text-3xl md:text-5xl mt-2 text-emerald-deep">Stories Worth Your Evening</h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex items-center gap-2">
            <button className="h-10 w-10 rounded-full border border-emerald-deep/15 grid place-items-center hover:bg-emerald-deep hover:text-cream transition">
              <Plus className="h-4 w-4" />
            </button>
            <button className="h-10 w-10 rounded-full bg-emerald-deep text-cream grid place-items-center hover:brightness-110">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stories.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft border border-emerald-deep/5 h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className={`absolute top-3 left-3 chip ${s.tagColor} shadow-soft`}>{s.tag}</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-emerald-deep/60">
                  <span className="font-medium text-emerald-deep">{s.genre}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{s.time}</span>
                </div>
                <h3 className="display text-xl mt-2 text-emerald-deep leading-snug">{s.title}</h3>
                <p className="text-sm text-emerald-deep/70 mt-2 leading-relaxed">{s.excerpt}</p>
                <div className="mt-4 pt-4 border-t border-emerald-deep/10 flex items-center justify-between text-xs text-emerald-deep/70">
                  <span>by <span className="text-emerald-deep font-medium">{s.author}</span></span>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1"><Heart className="h-3.5 w-3.5" />{s.likes}</span>
                    <span className="inline-flex items-center gap-1"><Bookmark className="h-3.5 w-3.5" />{s.saves}</span>
                  </div>
                </div>
                <button className="mt-4 self-start inline-flex items-center gap-1.5 text-sm text-leaf font-medium hover:gap-2.5 transition-all">
                  Read story <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
