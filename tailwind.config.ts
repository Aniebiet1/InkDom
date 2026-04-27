import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1280px" } },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        cream: { DEFAULT: "hsl(var(--surface-cream))", foreground: "hsl(var(--surface-cream-foreground))" },
        emerald: {
          DEFAULT: "hsl(var(--emerald))",
          deep: "hsl(var(--emerald-deep))",
          soft: "hsl(var(--emerald-soft))",
          line: "hsl(var(--emerald-line))",
        },
        gold: { DEFAULT: "hsl(var(--gold))", soft: "hsl(var(--gold-soft))" },
        leaf: { DEFAULT: "hsl(var(--leaf))", foreground: "hsl(var(--leaf-foreground))" },
        tint: {
          rose: "hsl(var(--tint-rose))",
          mint: "hsl(var(--tint-mint))",
          cream: "hsl(var(--tint-cream))",
          sky: "hsl(var(--tint-sky))",
          sun: "hsl(var(--tint-sun))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        soft: "var(--shadow-soft)",
      },
      backgroundImage: {
        'fade-down': "var(--gradient-fade-down)",
        'fade-up': "var(--gradient-fade-up)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "float": { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        "slide-up-in": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-y": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "attention-pulse": {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 hsl(var(--gold) / 0.55)" },
          "50%": { transform: "scale(1.04)", boxShadow: "0 0 0 14px hsl(var(--gold) / 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 5s ease-in-out infinite",
        "slide-up-in": "slide-up-in 0.9s cubic-bezier(0.22,1,0.36,1) both",
        "marquee-x": "marquee-x 40s linear infinite",
        "marquee-y": "marquee-y 30s linear infinite",
        "attention-pulse": "attention-pulse 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
