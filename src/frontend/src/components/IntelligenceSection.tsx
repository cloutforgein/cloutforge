import { Cpu, Globe, Shield } from "lucide-react";
import { motion } from "motion/react";
import {
  SiFacebook,
  SiGoogle,
  SiInstagram,
  SiReddit,
  SiX,
  SiYoutube,
} from "react-icons/si";

const platforms = [
  { Icon: SiInstagram, name: "Instagram", color: "oklch(0.75 0.2 340)" },
  { Icon: SiFacebook, name: "Facebook", color: "oklch(0.60 0.18 245)" },
  { Icon: SiX, name: "Twitter", color: "oklch(0.85 0.01 250)" },
  { Icon: SiYoutube, name: "YouTube", color: "oklch(0.65 0.22 25)" },
  { Icon: SiGoogle, name: "Google", color: "oklch(0.68 0.20 140)" },
  { Icon: SiReddit, name: "Reddit", color: "oklch(0.68 0.22 40)" },
];

const advantages = [
  {
    Icon: Cpu,
    title: "AI-Processed Insights",
    desc: "Raw social data refined by machine learning models into actionable brand intelligence.",
  },
  {
    Icon: Globe,
    title: "Cross-Platform Coverage",
    desc: "Unified view across 6+ major platforms — Instagram, Facebook, Twitter, YouTube, Google, Reddit.",
  },
  {
    Icon: Shield,
    title: "Privacy-First Approach",
    desc: "All data collected through ethical scraping. Fully compliant with platform guidelines.",
  },
];

export function IntelligenceSection() {
  return (
    <section
      id="intelligence"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: "oklch(0.07 0.012 252)",
      }}
    >
      {/* Decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.55 0.22 290 / 0.3), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
                style={{
                  background: "oklch(0.78 0.18 195 / 0.08)",
                  border: "1px solid oklch(0.78 0.18 195 / 0.2)",
                }}
              >
                <span
                  className="text-xs font-mono tracking-widest uppercase font-semibold"
                  style={{ color: "oklch(0.78 0.18 195)" }}
                >
                  How It Works
                </span>
              </div>

              <h2 className="font-display font-black text-4xl md:text-5xl mb-6 leading-tight">
                <span className="text-foreground">Real data,</span>
                <br />
                <span className="text-gradient-cyan">real advantage</span>
              </h2>

              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "oklch(0.55 0.03 250)" }}
              >
                Our proprietary scraping infrastructure continuously monitors
                social media platforms, delivering fresh data signals every
                hour. No API rate limits. No stale snapshots.
              </p>

              {/* Advantages */}
              <div className="flex flex-col gap-5">
                {advantages.map((adv, i) => (
                  <motion.div
                    key={adv.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "oklch(0.78 0.18 195 / 0.1)",
                        border: "1px solid oklch(0.78 0.18 195 / 0.2)",
                      }}
                    >
                      <adv.Icon
                        className="w-5 h-5"
                        style={{ color: "oklch(0.78 0.18 195)" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-1">
                        {adv.title}
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "oklch(0.50 0.025 250)" }}
                      >
                        {adv.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — Platform visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Central orb */}
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute w-64 h-64 rounded-full opacity-20 animate-glow-pulse"
                  style={{
                    background:
                      "radial-gradient(circle, oklch(0.78 0.18 195 / 0.5) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="relative w-36 h-36 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.78 0.18 195 / 0.15), oklch(0.55 0.22 290 / 0.15))",
                    border: "1px solid oklch(0.78 0.18 195 / 0.3)",
                    boxShadow: "0 0 50px oklch(0.78 0.18 195 / 0.2)",
                  }}
                >
                  <div className="text-center">
                    <div
                      className="font-display font-black text-3xl"
                      style={{ color: "oklch(0.78 0.18 195)" }}
                    >
                      CF
                    </div>
                    <div
                      className="text-xs font-mono mt-1"
                      style={{ color: "oklch(0.55 0.03 250)" }}
                    >
                      Intelligence
                    </div>
                  </div>
                </div>

                {/* Platform icons orbiting */}
                {platforms.map((p, i) => {
                  const angle =
                    (i / platforms.length) * 2 * Math.PI - Math.PI / 2;
                  const radius = 110;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <motion.div
                      key={p.name}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px - 22px)`,
                        top: `calc(50% + ${y}px - 22px)`,
                      }}
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{
                        duration: 2.5,
                        delay: i * 0.4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{
                          background: "oklch(0.10 0.017 252)",
                          border: `1px solid ${p.color.replace(")", " / 0.3)")}`,
                          boxShadow: `0 0 16px ${p.color.replace(")", " / 0.2)")}`,
                        }}
                        title={p.name}
                      >
                        <p.Icon
                          className="w-5 h-5"
                          style={{ color: p.color }}
                        />
                      </div>
                    </motion.div>
                  );
                })}

                {/* Connection lines (SVG) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ overflow: "visible" }}
                  aria-hidden="true"
                >
                  {platforms.map((p, i) => {
                    const angle =
                      (i / platforms.length) * 2 * Math.PI - Math.PI / 2;
                    const radius = 110;
                    const x2 = 50 + (Math.cos(angle) * radius) / 3;
                    const y2 = 50 + (Math.sin(angle) * radius) / 3;
                    return (
                      <line
                        key={p.name}
                        x1="50%"
                        y1="50%"
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke="oklch(0.78 0.18 195 / 0.1)"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Stats below orb */}
              <div className="mt-16 grid grid-cols-2 gap-3">
                {[
                  { val: "< 1hr", label: "Data freshness" },
                  { val: "99.2%", label: "Uptime SLA" },
                  { val: "5+", label: "Platforms" },
                  { val: "24/7", label: "Monitoring" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="px-4 py-3 rounded-xl text-center"
                    style={{
                      background: "oklch(0.10 0.017 252)",
                      border: "1px solid oklch(0.20 0.025 252)",
                    }}
                  >
                    <div
                      className="font-display font-bold text-lg"
                      style={{ color: "oklch(0.78 0.18 195)" }}
                    >
                      {s.val}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "oklch(0.45 0.025 250)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.78 0.18 195 / 0.2), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
