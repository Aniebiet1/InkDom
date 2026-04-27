import { PenLine, BookOpen, Feather } from "lucide-react";
import { Reveal } from "./Reveal";

export const CTA = () => (
  <section className="py-24 md:py-32 relative">
    <div className="container text-center max-w-2xl mx-auto">
      <Reveal>
        <Feather className="h-6 w-6 text-gold mx-auto" />
        <p className="eyebrow mt-3">The writer's call</p>
        <h2 className="display text-4xl md:text-6xl mt-3 leading-[1.05]">
          Your Story Deserves <em className="text-gold-soft">to Be Heard</em>
        </h2>
        <p className="mt-5 text-foreground/70 max-w-xl mx-auto">
          Join thousands of African writers earning recognition and royalties for stories that matter.
          Every voice strengthens the continent's literary canon.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <button className="inline-flex items-center gap-2 rounded-full bg-leaf text-leaf-foreground px-5 py-3 text-sm font-medium hover:brightness-110 transition shadow-soft">
            <PenLine className="h-4 w-4" /> Begin Writing
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-cream text-emerald-deep px-5 py-3 text-sm font-medium hover:brightness-95 transition">
            <BookOpen className="h-4 w-4" /> Read our next feed
          </button>
        </div>
      </Reveal>
    </div>
  </section>
);
