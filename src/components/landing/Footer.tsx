import { Logo } from "./Logo";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const cols = [
  { title: "Discover", items: ["Featured Stories", "Genres", "New Voices", "Trending Tags"] },
  { title: "For Writers", items: ["Submit a Story", "Resources", "Guidelines", "Writer Dashboard"] },
  { title: "About",    items: ["Our Mission", "Our Story", "Press", "Careers"] },
  { title: "Community",items: ["Forums", "Writing Challenges", "Book Clubs", "Events"] },
];

export const Footer = () => (
  <footer className="border-t border-emerald-line/50 bg-emerald-deep py-14">
    <div className="container">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 text-sm text-foreground/60 max-w-xs leading-relaxed">
            A home for storytellers and readers from the African continent — made freely, written boldly, shared honestly.
          </p>
          <div className="mt-5">
            <p className="text-xs text-foreground/50 mb-2">Join the story</p>
            <form className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-emerald-soft/60 border border-emerald-line rounded-full px-4 py-2 text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              <button className="rounded-full bg-leaf text-leaf-foreground px-4 py-2 text-sm font-medium">Join</button>
            </form>
          </div>
          <div className="mt-5 flex items-center gap-3 text-foreground/50">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-8 w-8 rounded-full border border-emerald-line grid place-items-center hover:text-gold hover:border-gold/50 transition">
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
        {cols.map(c => (
          <div key={c.title}>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">{c.title}</p>
            <ul className="space-y-2.5 text-sm text-foreground/70">
              {c.items.map(i => <li key={i}><a href="#" className="hover:text-gold transition">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-6 border-t border-emerald-line/50 flex flex-col sm:flex-row gap-3 justify-between text-xs text-foreground/45">
        <p>© 2024 InkDom. Crafted across the continent.</p>
        <p>Made with love for African storytelling.</p>
      </div>
    </div>
  </footer>
);
