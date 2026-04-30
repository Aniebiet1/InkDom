import { Heart, Bookmark, ArrowRight, ArrowLeft, Clock, Search } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import cabal from "@/assets/book-cabal.jpg";
import africanLit from "@/assets/book-african-literature.jpg";
import whenAManCries from "@/assets/book-when-a-man-cries.jpg";
import parlourWife from "@/assets/book-parlour-wife.jpg";
import girlBodyWater from "@/assets/book-girl-body-water.jpg";
import marriageMonitoring from "@/assets/book-marriage-monitoring.jpg";
import mamaCantRaise from "@/assets/book-mama-cant-raise.jpg";
import toMyChildren from "@/assets/book-to-my-children.jpg";
import blackRevolution from "@/assets/book-black-revolution.jpg";
import waitingRoom from "@/assets/book-waiting-room.jpg";
import nyokabi from "@/assets/book-nyokabi.jpg";

const stories = [
  {
    img: cabal, tag: "Trending", tagColor: "bg-gold text-emerald-deep",
    genre: "Political Drama", time: "22 min read",
    title: "The Cabal",
    excerpt: "A nation's fate hangs in the hands of a few powerful men — and the silenced voices rising against them.",
    author: "Odafe Atogun", likes: "4.6k", saves: "1.3k",
  },
  {
    img: africanLit, tag: "Editor's pick", tagColor: "bg-leaf text-white",
    genre: "Literary Essays", time: "30 min read",
    title: "African Literature",
    excerpt: "Gender discourse, religious values, and the African worldview — a sweeping portrait of a continent's voice.",
    author: "Safoura Salami-Boukari", likes: "3.1k", saves: "990",
  },
  {
    img: whenAManCries, tag: "New voice", tagColor: "bg-tint-rose text-emerald-deep",
    genre: "Drama", time: "18 min read",
    title: "When a Man Cries",
    excerpt: "A township story of pride, fatherhood, and the moment a man finally lets the tears find their way home.",
    author: "Siphiwo Mahala", likes: "2.4k", saves: "820",
  },
  {
    img: parlourWife, tag: "Featured", tagColor: "bg-gold text-emerald-deep",
    genre: "Contemporary", time: "26 min read",
    title: "The Parlour Wife",
    excerpt: "Her place is in the home, but her heart yearns for freedom — a Lagos woman steps quietly into her own light.",
    author: "Foluso Agbaje", likes: "5.2k", saves: "1.6k",
  },
  {
    img: girlBodyWater, tag: "Award winner", tagColor: "bg-leaf text-white",
    genre: "Literary", time: "34 min read",
    title: "A Girl Is a Body of Water",
    excerpt: "Kirabo searches for the mother she has never known, weaving Ugandan myth, womanhood and belonging.",
    author: "Jennifer Nansubuga Makumbi", likes: "6.0k", saves: "2.1k",
  },
  {
    img: marriageMonitoring, tag: "Hot read", tagColor: "bg-tint-rose text-emerald-deep",
    genre: "Romance · Comedy", time: "16 min read",
    title: "The Marriage Monitoring Aunties' Association",
    excerpt: "Five aunties, one stubborn niece, and a wedding deadline nobody asked for. Lagos love at full volume.",
    author: "Ola Awonubi", likes: "3.8k", saves: "1.1k",
  },
  {
    img: mamaCantRaise, tag: "Powerful", tagColor: "bg-gold text-emerald-deep",
    genre: "Coming of Age", time: "20 min read",
    title: "Mama Can't Raise No Man",
    excerpt: "A boy raised by women learns what it really means to become a man — on his own terms, in his own time.",
    author: "Robyn Travis", likes: "2.9k", saves: "940",
  },
  {
    img: toMyChildren, tag: "Classic", tagColor: "bg-leaf text-white",
    genre: "Memoir", time: "28 min read",
    title: "To My Children's Children",
    excerpt: "A grandmother's voice carries across generations — Xhosa wisdom, apartheid's shadow, and the hope she refuses to bury.",
    author: "Sindiwe Magona", likes: "3.4k", saves: "1.0k",
  },
  {
    img: blackRevolution, tag: "Must read", tagColor: "bg-gold text-emerald-deep",
    genre: "History · Essays", time: "38 min read",
    title: "The Black Revolution on Campus",
    excerpt: "The students who refused silence — and the movement that reshaped a generation's idea of freedom.",
    author: "Martha Biondi", likes: "2.7k", saves: "880",
  },
  {
    img: waitingRoom, tag: "New voice", tagColor: "bg-tint-rose text-emerald-deep",
    genre: "Contemporary", time: "24 min read",
    title: "The Waiting Room",
    excerpt: "Between prayer and patience, a Lagos woman learns what it costs — and what it gives — to keep on hoping.",
    author: "Bolatito Adebayo", likes: "3.9k", saves: "1.2k",
  },
  {
    img: nyokabi, tag: "Featured", tagColor: "bg-leaf text-white",
    genre: "Literary Fiction", time: "32 min read",
    title: "Nyokabi",
    excerpt: "Torn between tradition and rebellion, a young Kikuyu woman dares to choose love on her own terms.",
    author: "Wangui Turner", likes: "4.1k", saves: "1.4k",
  },
];

const searchHints = [
  "Search Nigerian short stories…",
  "Try \"love in Lagos\"…",
  "Look for Yoruba folktales…",
  "Find writers from Enugu…",
  "Search \"harmattan romance\"…",
  "Discover Igbo coming-of-age…",
];

export const Stories = () => {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("article") as HTMLElement | null;
    const w = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  // Animated placeholder cycle (Wattpad style)
  const [hint, setHint] = useState(0);
  const [typed, setTyped] = useState("");
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (focused || value) return;
    const target = searchHints[hint];
    let i = 0;
    setTyped("");
    const typer = setInterval(() => {
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(typer);
        setTimeout(() => setHint((h) => (h + 1) % searchHints.length), 1800);
      }
    }, 55);
    return () => clearInterval(typer);
  }, [hint, focused, value]);

  return (
    <section id="stories" className="bg-cream text-cream-foreground py-20 md:py-28 relative scroll-mt-20">
      {/* library wood-shelf vibe — subtle warm gradient */}
      <div className="container">
        <div className="flex items-end justify-between gap-6 mb-10">
          <Reveal>
            <div>
              <p className="eyebrow !text-leaf">The InkDom Library · Featured this week</p>
              <h2 className="display text-3xl md:text-5xl mt-2 text-emerald-deep">Stories Worth Your Evening</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Previous"
                className="h-10 w-10 rounded-full border border-emerald-deep/15 grid place-items-center hover:bg-emerald-deep hover:text-cream transition"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Next"
                className="h-10 w-10 rounded-full bg-emerald-deep text-cream grid place-items-center hover:brightness-110"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Library shelf — horizontal scroll of book covers */}
        <div className="relative">
          <div
            ref={scroller}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 -mx-5 px-5 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
          >
            {stories.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-soft border border-emerald-deep/5 flex flex-col snap-start w-[280px] sm:w-[300px] shrink-0"
                >
                  {/* Book cover — taller, library-feel */}
                  <div className="relative h-[360px] overflow-hidden bg-emerald-deep/5">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* spine highlight */}
                    <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/30 to-transparent" />
                    <span className={`absolute top-3 left-4 chip ${s.tagColor} shadow-soft`}>{s.tag}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-emerald-deep/60">
                      <span className="font-medium text-emerald-deep">{s.genre}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{s.time}</span>
                    </div>
                    <h3 className="display text-xl mt-2 text-emerald-deep leading-snug line-clamp-2">{s.title}</h3>
                    <p className="text-sm text-emerald-deep/70 mt-2 leading-relaxed line-clamp-3">{s.excerpt}</p>
                    <div className="mt-4 pt-4 border-t border-emerald-deep/10 flex items-center justify-between text-xs text-emerald-deep/70">
                      <span>by <span className="text-emerald-deep font-medium">{s.author}</span></span>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1"><Heart className="h-3.5 w-3.5" />{s.likes}</span>
                        <span className="inline-flex items-center gap-1"><Bookmark className="h-3.5 w-3.5" />{s.saves}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Animated search */}
        <Reveal delay={0.15}>
          <div className="mt-10 max-w-2xl mx-auto">
            <label className="relative block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-deep/50" />
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={focused || value ? "Search stories, writers, genres…" : typed}
                className="w-full rounded-full bg-white border border-emerald-deep/15 pl-11 pr-32 py-3.5 text-sm text-emerald-deep placeholder:text-emerald-deep/45 shadow-soft focus:outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 transition"
              />
              <button
                type="button"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-emerald-deep text-cream px-4 py-2 text-xs font-medium hover:brightness-110"
              >
                Search
              </button>
            </label>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
