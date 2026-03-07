import { ArrowRight, Zap } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedGrid } from "./AnimatedGrid";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background canvas */}
      <div className="absolute inset-0 z-0">
        <AnimatedGrid />
      </div>

      {/* Radial glows */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.78 0.18 195 / 0.07) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.55 0.22 290 / 0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Hero image (subtle overlay) */}
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-social-ai.dim_1200x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
          style={{
            background: "oklch(0.78 0.18 195 / 0.1)",
            border: "1px solid oklch(0.78 0.18 195 / 0.25)",
          }}
        >
          <Zap
            className="w-3.5 h-3.5 animate-glow-pulse"
            style={{ color: "oklch(0.78 0.18 195)" }}
          />
          <span
            className="text-xs font-mono tracking-widest uppercase font-semibold"
            style={{ color: "oklch(0.78 0.18 195)" }}
          >
            AI-Powered Social Intelligence
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.65 }}
          className="font-display font-black leading-[1.05] mb-6"
          style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
        >
          <span className="text-gradient-cyan">Amplify Your Brand</span>
          <br />
          <span className="text-foreground">on Social Media</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ color: "oklch(0.65 0.04 250)" }}
        >
          CloutForge delivers real-time, scrape-backed social intelligence —
          from influencer matching to competitor tracking — so your brand always
          makes the right move.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 btn-glow-cyan"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.78 0.18 195), oklch(0.65 0.22 290))",
              color: "oklch(0.08 0.015 250)",
            }}
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
            style={{
              background: "oklch(0.14 0.02 252 / 0.8)",
              border: "1px solid oklch(0.78 0.18 195 / 0.2)",
              color: "oklch(0.85 0.04 250)",
            }}
          >
            Explore Services
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { val: "10M+", label: "Profiles Analyzed" },
            { val: "50+", label: "Platforms Covered" },
            { val: "Real-time", label: "Data Updates" },
            { val: "360°", label: "Brand Intelligence" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display font-black text-2xl md:text-3xl"
                style={{ color: "oklch(0.78 0.18 195)" }}
              >
                {stat.val}
              </div>
              <div
                className="text-xs mt-1 font-medium tracking-wide"
                style={{ color: "oklch(0.55 0.03 250)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: "oklch(0.45 0.03 250)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8 animate-float"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.78 0.18 195 / 0.4), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
