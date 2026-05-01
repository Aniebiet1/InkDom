import logoFull from "@/assets/logo-inkdom-full.png";

export const Logo = ({ className = "" }: { className?: string }) => (
  <a
    href="#top"
    aria-label="InkDom — home"
    className={`inline-flex items-center group pl-0 md:pl-1 shrink-0 overflow-hidden h-14 md:h-20 ${className}`}
  >
    <img
      src={logoFull}
      alt="InkDom"
      className="h-24 md:h-36 w-auto object-contain translate-y-[3px] group-hover:scale-105 transition-transform duration-500 brightness-110 contrast-125 drop-shadow-lg"
    />
  </a>
);
