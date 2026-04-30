import logoMark from "@/assets/logo-mark.png";

export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#top" className={`flex items-center gap-2.5 group ${className}`}>
    <img
      src={logoMark}
      alt="InkDom mark — top hat and quill"
      className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-500"
      style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.18))" }}
    />
    <div className="leading-none">
      <div className="display text-[24px] font-black tracking-tight text-gold group-hover:brightness-110 transition">
        InkDom
      </div>
      <div className="text-[9px] font-semibold tracking-[0.36em] uppercase text-gold/70 mt-1">
        Stories &middot; Reimagined
      </div>
    </div>
  </a>
);
