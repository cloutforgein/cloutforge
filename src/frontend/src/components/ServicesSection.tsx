import { BarChart2, MessageSquare, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    id: 1,
    icon: Users,
    title: "Influencer Intelligence",
    subtitle: "Find the right voice for your brand",
    description:
      "We analyze millions of social profiles to match your brand with the right influencers — by niche, engagement rate, audience authenticity, and campaign fit. No more guesswork, just precision.",
    tags: ["Niche Matching", "Engagement Analysis", "Audience Audit"],
    accent: "195",
    accentL: "0.78",
    accentC: "0.18",
  },
  {
    id: 2,
    icon: MessageSquare,
    title: "Brand Sentiment Analysis",
    subtitle: "Know what the internet says about you",
    description:
      "Know exactly what people are saying about your brand across Instagram, X, LinkedIn, and more. Real-time scraped data, zero guesswork — track sentiment shifts before they become crises.",
    tags: ["Real-time Scraping", "Sentiment Score", "Alert System"],
    accent: "290",
    accentL: "0.65",
    accentC: "0.22",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Trend Tracking",
    subtitle: "Be first, not late",
    description:
      "Stay ahead of your category. We surface emerging trends before they peak so your content hits at the right moment — transforming reactive brands into category leaders.",
    tags: ["Early Signal Detection", "Category Trends", "Content Timing"],
    accent: "155",
    accentL: "0.72",
    accentC: "0.2",
  },
  {
    id: 4,
    icon: BarChart2,
    title: "Competitive Intelligence",
    subtitle: "See what your rivals are doing",
    description:
      "Benchmark against your competitors. See their strategy, content mix, follower growth, and engagement — all in one view. Stay two steps ahead with data that matters.",
    tags: ["Competitor Benchmarking", "Strategy Breakdown", "Growth Tracking"],
    accent: "340",
    accentL: "0.72",
    accentC: "0.2",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;
  const accentColor = `oklch(${service.accentL} ${service.accentC} ${service.accent})`;
  const accentFaint = `oklch(${service.accentL} ${service.accentC} ${service.accent} / 0.12)`;
  const accentBorder = `oklch(${service.accentL} ${service.accentC} ${service.accent} / 0.2)`;

  return (
    <motion.div
      data-ocid={`services.item.${service.id}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.12, duration: 0.55, ease: "easeOut" }}
      className="glass-card rounded-2xl p-7 flex flex-col gap-5 group cursor-default"
      style={{
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: accentFaint,
          border: `1px solid ${accentBorder}`,
          boxShadow: `0 0 20px ${accentColor.replace(")", " / 0.15)")}`,
        }}
      >
        <Icon className="w-6 h-6" style={{ color: accentColor }} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <div
          className="text-xs font-mono tracking-widest uppercase font-semibold"
          style={{ color: accentColor.replace(")", " / 0.75)") }}
        >
          0{service.id} — {service.subtitle}
        </div>
        <h3 className="font-display font-bold text-xl text-foreground leading-tight">
          {service.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "oklch(0.60 0.03 250)" }}
        >
          {service.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{
              background: accentFaint,
              border: `1px solid ${accentBorder}`,
              color: accentColor,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-28 px-6">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.55 0.22 290 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
            style={{
              background: "oklch(0.55 0.22 290 / 0.1)",
              border: "1px solid oklch(0.55 0.22 290 / 0.2)",
            }}
          >
            <span
              className="text-xs font-mono tracking-widest uppercase font-semibold"
              style={{ color: "oklch(0.72 0.2 290)" }}
            >
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-black text-4xl md:text-5xl mb-5 leading-tight"
          >
            <span className="text-foreground">Everything you need to</span>
            <br />
            <span className="text-gradient-cyan">dominate social media</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.55 }}
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.55 0.03 250)" }}
          >
            Four pillars of social intelligence, all backed by real-time data
            scraped directly from the platforms that matter.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom connector */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div
            className="flex items-center gap-4 px-6 py-4 rounded-xl"
            style={{
              background: "oklch(0.11 0.018 252 / 0.5)",
              border: "1px solid oklch(0.78 0.18 195 / 0.1)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-glow-pulse"
              style={{ background: "oklch(0.78 0.18 195)" }}
            />
            <p className="text-sm" style={{ color: "oklch(0.55 0.03 250)" }}>
              All services powered by live social media scraping — updated in
              near real-time
            </p>
            <div
              className="w-2 h-2 rounded-full animate-glow-pulse"
              style={{
                background: "oklch(0.55 0.22 290)",
                animationDelay: "0.5s",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
