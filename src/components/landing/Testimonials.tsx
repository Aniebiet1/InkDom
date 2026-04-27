import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { initials: "AK", name: "Ama Kente",     role: "Reader · Lagos",  text: "InkDom feels like sitting in my grandmother's living room — every story warms a different corner of my heart." },
  { initials: "MO", name: "Musa Otieno",   role: "Writer · Nairobi","text: "I've found a community here that not only reads my work, but champions it. My voice has never felt more heard.".replace('text: "','') },
  { initials: "ZS", name: "Zara Sankoh",   role: "Reader · Dakar",  text: "Finally, a place where African storytelling is the centrepiece, not the side dish. I read here every single night." },
];

export const Testimonials = () => (
  <section className="py-24 md:py-28">
    <div className="container">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow">What readers say</p>
          <h2 className="display text-3xl md:text-5xl mt-2">Voices from the Community</h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <Reveal key={it.name} delay={i * 0.08}>
            <div className="rounded-2xl bg-emerald-soft border border-emerald-line/60 p-6 h-full flex flex-col shadow-card">
              <div className="flex items-center gap-1 text-gold mb-4">
                {Array.from({length:5}).map((_,k)=>(<Star key={k} className="h-3.5 w-3.5 fill-current" />))}
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed flex-1">"{it.text}"</p>
              <div className="mt-5 pt-4 border-t border-emerald-line/60 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gold/20 text-gold grid place-items-center text-xs font-semibold">
                  {it.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{it.name}</p>
                  <p className="text-xs text-foreground/55">{it.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
