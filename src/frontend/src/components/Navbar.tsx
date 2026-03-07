import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "oklch(0.08 0.015 250 / 0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid oklch(0.78 0.18 195 / 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.78 0.18 195 / 0.2), oklch(0.55 0.22 290 / 0.2))",
              border: "1px solid oklch(0.78 0.18 195 / 0.3)",
            }}
          >
            <svg
              role="img"
              aria-label="CloutForge logo"
              viewBox="0 0 32 32"
              fill="none"
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>CloutForge logo</title>
              <path
                d="M4 20 L10 12 L16 17 L22 8 L28 14"
                stroke="url(#navGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 8 L28 8 L28 14"
                stroke="url(#navGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="16" cy="17" r="2.5" fill="url(#navGrad)" />
              <defs>
                <linearGradient
                  id="navGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="oklch(0.85 0.18 195)" />
                  <stop offset="100%" stopColor="oklch(0.65 0.22 290)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-display font-black text-xl text-gradient-cyan tracking-tight">
            CloutForge
          </span>
          <span
            className="text-xs font-mono hidden sm:block"
            style={{ color: "oklch(0.78 0.18 195 / 0.6)" }}
          >
            .in
          </span>
        </div>

        {/* Nav links (desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Intelligence", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium transition-colors duration-200 hover:text-primary"
              style={{ color: "oklch(0.65 0.03 250)" }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          data-ocid="nav.cta_button"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.78 0.18 195 / 0.15), oklch(0.55 0.22 290 / 0.15))",
            border: "1px solid oklch(0.78 0.18 195 / 0.3)",
            color: "oklch(0.78 0.18 195)",
          }}
        >
          Get Started
        </a>
      </div>
    </motion.header>
  );
}
