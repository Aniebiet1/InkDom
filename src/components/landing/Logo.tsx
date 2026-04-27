export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#top" className={`flex items-center gap-2.5 group ${className}`}>
    <div className="relative h-11 w-11 rounded-2xl bg-gradient-to-br from-emerald-soft to-emerald-deep/60 border border-gold/30 grid place-items-center shadow-soft overflow-hidden">
      {/* soft inner glow */}
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,hsl(var(--gold)/0.25),transparent_60%)]" />
      <svg viewBox="0 0 40 40" className="h-7 w-7 relative" fill="none">
        <defs>
          <linearGradient id="crownGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--gold))" />
            <stop offset="100%" stopColor="hsl(var(--gold-soft))" />
          </linearGradient>
          <linearGradient id="inkGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--gold))" />
            <stop offset="100%" stopColor="hsl(var(--gold-soft))" />
          </linearGradient>
        </defs>
        {/* Modern minimal crown — three soft peaks */}
        <path
          d="M8 20 L13 14 L17 19 L20 12 L23 19 L27 14 L32 20 L30 24 H10 L8 20 Z"
          fill="url(#crownGrad)"
          stroke="hsl(var(--gold))"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
        {/* Crown base bar */}
        <rect x="10" y="24" width="20" height="1.6" rx="0.8" fill="hsl(var(--gold))" opacity="0.85" />
        {/* Single jewel center */}
        <circle cx="20" cy="17" r="1.3" fill="hsl(var(--emerald-deep))" />
        {/* Modern ink drop */}
        <path
          d="M20 28 C 17 31.2, 16 33, 16 34.6 a 4 4 0 0 0 8 0 C 24 33, 23 31.2, 20 28 Z"
          fill="url(#inkGrad)"
        />
        {/* Highlight on drop */}
        <ellipse cx="18.6" cy="33.4" rx="0.9" ry="1.3" fill="hsl(var(--background) / 0.55)" />
      </svg>
    </div>
    <div className="leading-tight">
      <div className="display text-[18px] tracking-tight group-hover:text-gold transition-colors">InkDom</div>
      <div className="text-[9px] tracking-[0.32em] uppercase text-gold/80 -mt-0.5">Stories</div>
    </div>
  </a>
);
