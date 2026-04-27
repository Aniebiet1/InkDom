export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative h-9 w-9 rounded-full bg-emerald-soft border border-gold/40 grid place-items-center">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 4v14a2 2 0 002 2h10V4H8a2 2 0 00-2 2z" />
        <path d="M10 8h6M10 12h6" strokeLinecap="round" />
      </svg>
    </div>
    <div className="leading-tight">
      <div className="display text-[17px] tracking-tight">InkDom</div>
      <div className="text-[9px] tracking-[0.3em] uppercase text-gold/80 -mt-0.5">Stories</div>
    </div>
  </div>
);
