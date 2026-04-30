import { Compass, BookOpen, Users, Menu, X, LogIn, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const links = [
  { label: "Explore", icon: Compass, href: "#stories" },
  { label: "Genres", icon: BookOpen, href: "#genres" },
  { label: "Writers", icon: Users, href: "#writers" },
  { label: "FAQ", icon: HelpCircle, href: "#faq" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="container flex items-center justify-between py-5">
        <Logo />
        <nav className="hidden md:flex items-center gap-7 text-sm text-foreground/80">
          {links.map(({ label, icon: Icon, href }) => (
            <a key={label} href={href} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Icon className="h-4 w-4" /> {label}
            </a>
          ))}
          <Link to="/login" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <LogIn className="h-4 w-4" /> Login
          </Link>
          <Link
            to="/signup"
            className="rounded-full bg-leaf text-leaf-foreground px-4 py-2 text-sm font-medium hover:brightness-110 active:scale-95 transition"
          >
            Sign Up
          </Link>
        </nav>
        <button
          className="md:hidden text-foreground p-2 active:scale-90 transition"
          onClick={() => setOpen(v => !v)}
          aria-label="menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-emerald-line/40 bg-emerald-deep/95 backdrop-blur animate-fade-in">
          <div className="container py-4 flex flex-col gap-1 text-sm">
            {links.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                onClick={close}
                className="flex items-center gap-2 py-3 px-3 rounded-lg active:bg-emerald-soft/40 hover:bg-emerald-soft/30 hover:text-gold transition-colors"
              >
                <Icon className="h-4 w-4 text-gold" /> {label}
              </a>
            ))}
            <Link
              to="/login"
              onClick={close}
              className="flex items-center gap-2 py-3 px-3 rounded-lg active:bg-emerald-soft/40 hover:bg-emerald-soft/30 hover:text-gold transition-colors"
            >
              <LogIn className="h-4 w-4 text-gold" /> Login
            </Link>
            <Link
              to="/signup"
              onClick={close}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-leaf text-leaf-foreground py-2.5 font-medium active:scale-95 hover:brightness-110 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
