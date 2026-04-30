import logoInkdom from "@/assets/logo-inkdom-full.png";

export const Logo = ({ className = "" }: { className?: string }) => (
  <a
    href="#top"
    aria-label="InkDom — home"
    className={`inline-flex items-center group ${className}`}
  >
    <img
      src={logoInkdom}
      alt="InkDom"
      className="h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
    />
  </a>
);
