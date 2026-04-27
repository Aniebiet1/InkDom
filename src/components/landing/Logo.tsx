export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative h-10 w-10 rounded-full bg-emerald-soft border border-gold/40 grid place-items-center">
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor">
        {/* Crown */}
        <path
          d="M5 13 L9 17 L13 9 L16 15 L19 9 L23 17 L27 13 L25.5 21 H6.5 L5 13 Z"
          fill="hsl(var(--gold))"
          stroke="hsl(var(--gold))"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Crown jewels */}
        <circle cx="9" cy="17" r="0.9" fill="hsl(var(--emerald-deep))" />
        <circle cx="16" cy="15" r="1" fill="hsl(var(--emerald-deep))" />
        <circle cx="23" cy="17" r="0.9" fill="hsl(var(--emerald-deep))" />
        {/* Ink drop below */}
        <path
          d="M16 22 C 14 25, 13 26.5, 13 28 a 3 3 0 0 0 6 0 C 19 26.5, 18 25, 16 22 Z"
          fill="hsl(var(--gold))"
        />
      </svg>
    </div>
    <div className="leading-tight">
      <div className="display text-[17px] tracking-tight">InkDom</div>
      <div className="text-[9px] tracking-[0.3em] uppercase text-gold/80 -mt-0.5">Stories</div>
    </div>
  </div>
);
