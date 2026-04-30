import logoMark from "@/assets/logo-mark.jpg";

export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#top" className={`flex items-center gap-2 group ${className}`}>
    <img
      src={logoMark}
      alt="InkDom mark — top hat and quill"
      className="h-11 w-11 object-contain mix-blend-multiply dark:mix-blend-screen group-hover:scale-110 transition-transform duration-500"
      style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))" }}
    />
    <div className="leading-tight">
      <div className="display text-[22px] font-black tracking-tight text-gold group-hover:brightness-110 transition">InkDom</div>
      <div className="text-[9px] font-bold tracking-[0.34em] uppercase text-gold/80 -mt-0.5">· Stories ·</div>
    </div>
  </a>
);
