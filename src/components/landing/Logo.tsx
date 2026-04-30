import logoMark from "@/assets/logo-mark.jpg";

export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#top" className={`flex items-center gap-2.5 group ${className}`}>
    <div className="relative h-11 w-11 rounded-2xl bg-black grid place-items-center shadow-soft overflow-hidden ring-1 ring-gold/40">
      <img
        src={logoMark}
        alt="InkDom mark — top hat and quill"
        className="h-full w-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
      />
    </div>
    <div className="leading-tight">
      <div className="display text-[19px] tracking-tight text-gold group-hover:brightness-110 transition">InkDom</div>
      <div className="text-[9px] tracking-[0.34em] uppercase text-gold/70 -mt-0.5">· Stories ·</div>
    </div>
  </a>
);
