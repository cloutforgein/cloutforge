import { SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const socialLinks = [
  { Icon: SiInstagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: SiX, label: "X", href: "https://x.com" },
  { Icon: SiLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

const serviceLinks = [
  "Influencer Intelligence",
  "Brand Sentiment Analysis",
  "Trend Tracking",
  "Competitive Intelligence",
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "cloutforge.in",
  )}`;

  return (
    <footer
      className="relative py-16 px-6"
      style={{
        borderTop: "1px solid oklch(0.78 0.18 195 / 0.1)",
        background: "oklch(0.07 0.013 250)",
      }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.78 0.18 195 / 0.4), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.78 0.18 195 / 0.15), oklch(0.55 0.22 290 / 0.15))",
                  border: "1px solid oklch(0.78 0.18 195 / 0.25)",
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
                    stroke="url(#footerGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 8 L28 8 L28 14"
                    stroke="url(#footerGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="16" cy="17" r="2.5" fill="url(#footerGrad)" />
                  <defs>
                    <linearGradient
                      id="footerGrad"
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
              <span className="font-display font-black text-xl text-gradient-cyan">
                cloutforge.in
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.48 0.025 250)" }}
            >
              Data-Driven Social Intelligence
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "oklch(0.40 0.02 250)" }}
            >
              Helping brands forge their digital dominance through real-time
              social media intelligence.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:opacity-80"
                  style={{
                    background: "oklch(0.14 0.02 252)",
                    border: "1px solid oklch(0.22 0.03 250)",
                    color: "oklch(0.50 0.025 250)",
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-xs font-mono tracking-widest uppercase font-semibold"
              style={{ color: "oklch(0.55 0.03 250)" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm transition-colors duration-200 hover:text-primary"
                    style={{ color: "oklch(0.42 0.02 250)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-xs font-mono tracking-widest uppercase font-semibold"
              style={{ color: "oklch(0.55 0.03 250)" }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@cloutforge.in"
                className="text-sm transition-colors duration-200 hover:text-primary"
                style={{ color: "oklch(0.42 0.02 250)" }}
              >
                hello@cloutforge.in
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: "oklch(0.78 0.18 195 / 0.8)" }}
              >
                Request a Consultation →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: "1px solid oklch(0.18 0.025 252)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.38 0.02 250)" }}>
            © {currentYear} CloutForge. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "oklch(0.35 0.018 250)" }}>
            Built with <span style={{ color: "oklch(0.75 0.18 25)" }}>♥</span>{" "}
            using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:opacity-100"
              style={{ color: "oklch(0.78 0.18 195 / 0.7)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
