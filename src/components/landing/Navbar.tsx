import { Compass, BookOpen, Users, PenLine, Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { label: "Explore", icon: Compass },
  { label: "Genres", icon: BookOpen },
  { label: "Writers", icon: Users },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="container flex items-center justify-between py-5">
        <Logo />
        <nav className="hidden md:flex items-center gap-7 text-sm text-foreground/80">
          {links.map(({ label, icon: Icon }) => (
            <a key={label} href="#" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Icon className="h-4 w-4" /> {label}
            </a>
          ))}
          <button className="flex items-center gap-1.5 rounded-full bg-leaf text-leaf-foreground px-4 py-2 text-sm font-medium hover:brightness-110 transition">
            <PenLine className="h-4 w-4" /> Write
          </button>
        </nav>
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(v => !v)}
          aria-label="menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-emerald-line/40 bg-emerald-deep/95 backdrop-blur">
          <div className="container py-4 flex flex-col gap-3 text-sm">
            {links.map(({ label, icon: Icon }) => (
              <a key={label} href="#" className="flex items-center gap-2 py-2">
                <Icon className="h-4 w-4 text-gold" /> {label}
              </a>
            ))}
            <button className="mt-1 flex items-center justify-center gap-2 rounded-full bg-leaf text-leaf-foreground py-2.5 font-medium">
              <PenLine className="h-4 w-4" /> Write
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
