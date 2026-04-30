import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-reader.jpg";
import { Logo } from "@/components/landing/Logo";

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background text-foreground grid lg:grid-cols-2">
      {/* Left — form */}
      <section className="relative flex flex-col px-6 sm:px-10 lg:px-16 py-8">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            onClick={() => navigate("/")}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-foreground/60 hover:text-gold transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back home
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex items-center"
        >
          <div className="w-full max-w-md mx-auto">
            <h1 className="display text-4xl sm:text-5xl text-foreground">
              Welcome back <span className="text-gold">👋</span>
            </h1>
            <p className="mt-2 text-foreground/60 text-sm">
              Log in to continue reading on <span className="text-gold font-medium">InkDom</span>.
            </p>

            <form
              onSubmit={(e) => { e.preventDefault(); }}
              className="mt-8 space-y-5"
            >
              <Field label="Email address" icon={<Mail className="h-4 w-4" />}>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent outline-none text-sm placeholder:text-foreground/40"
                />
              </Field>
              <Field label="Password" icon={<Lock className="h-4 w-4" />}
                trailing={
                  <button type="button" onClick={() => setShow(s => !s)} className="text-foreground/50 hover:text-gold transition">
                    {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                }
              >
                <input
                  type={show ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-transparent outline-none text-sm placeholder:text-foreground/40"
                />
              </Field>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-foreground/60 cursor-pointer">
                  <input type="checkbox" className="accent-gold" /> Remember me
                </label>
                <a href="#" className="text-gold hover:underline">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gold text-emerald-deep font-semibold py-3 text-sm shadow-soft hover:brightness-110 active:scale-[0.99] transition"
              >
                Log In
              </button>

              <div className="relative my-2">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-emerald-line/40" /></div>
                <div className="relative flex justify-center"><span className="bg-background px-3 text-[11px] uppercase tracking-widest text-foreground/40">or</span></div>
              </div>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-emerald-line/50 py-3 text-sm hover:bg-emerald-soft/30 transition"
              >
                <GoogleIcon /> Continue with Google
              </button>

              <p className="text-center text-xs text-foreground/60 pt-2">
                Don't have an account?{" "}
                <Link to="/signup" className="text-gold font-medium hover:underline">Sign up</Link>
              </p>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Right — image */}
      <aside className="hidden lg:block relative p-6">
        <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-card ring-1 ring-emerald-line/40">
          <img src={heroImg} alt="A reader lost in an African novel" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/85 via-emerald-deep/30 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-10 text-cream">
            <span className="eyebrow text-gold">The InkDom Library</span>
            <h2 className="display text-3xl sm:text-4xl mt-3 leading-tight">
              Where Africa's <span className="text-gold">stories</span> live.
            </h2>
            <p className="mt-3 text-cream/80 max-w-md text-sm">
              Sign in to pick up where you left off — your bookmarks, highlights and reading playlists are waiting.
            </p>
          </div>
        </div>
      </aside>
    </main>
  );
};

const Field = ({ label, icon, children, trailing }: { label: string; icon: React.ReactNode; children: React.ReactNode; trailing?: React.ReactNode }) => (
  <div>
    <label className="text-xs font-medium text-foreground/70 mb-1.5 block">{label}</label>
    <div className="flex items-center gap-3 rounded-xl border border-emerald-line/50 bg-emerald-soft/20 px-4 py-3 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/20 transition">
      <span className="text-foreground/50">{icon}</span>
      <div className="flex-1">{children}</div>
      {trailing}
    </div>
  </div>
);

const GoogleIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="#FFC107" d="M21.8 10.2H12v3.8h5.6c-.5 2.5-2.7 3.8-5.6 3.8a6.2 6.2 0 1 1 4.1-10.9l2.7-2.7A10 10 0 1 0 12 22c5.7 0 10-4 10-10 0-.6 0-1.2-.2-1.8z"/><path fill="#FF3D00" d="M3.2 7.3l3.1 2.3A6.2 6.2 0 0 1 12 5.8c1.5 0 3 .6 4.1 1.5l2.7-2.7A10 10 0 0 0 3.2 7.3z"/><path fill="#4CAF50" d="M12 22c2.7 0 5.1-1 6.9-2.7l-3.2-2.6c-1 .7-2.3 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5l-3.1 2.4A10 10 0 0 0 12 22z"/><path fill="#1976D2" d="M21.8 10.2H12v3.8h5.6a5.8 5.8 0 0 1-2 2.8l3.2 2.5c2-1.8 3.2-4.5 3.2-7.3 0-.6 0-1.2-.2-1.8z"/></svg>
);

export default Login;