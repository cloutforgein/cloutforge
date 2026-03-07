import { useAuthContext } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedGrid } from "./AnimatedGrid";

export function LoginPage() {
  const { login, isLoading } = useAuthContext();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <AnimatedGrid />
      </div>

      {/* Radial glow effects */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.18 195 / 0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.22 290 / 0.5) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Login card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md mx-auto px-6"
      >
        <div className="glass-card rounded-2xl p-10 flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="relative">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.78 0.18 195 / 0.2), oklch(0.55 0.22 290 / 0.2))",
                  border: "1px solid oklch(0.78 0.18 195 / 0.4)",
                  boxShadow: "0 0 30px oklch(0.78 0.18 195 / 0.25)",
                }}
              >
                <svg
                  role="img"
                  aria-label="CloutForge logo"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>CloutForge logo</title>
                  <path
                    d="M4 20 L10 12 L16 17 L22 8 L28 14"
                    stroke="url(#loginGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 8 L28 8 L28 14"
                    stroke="url(#loginGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="16" cy="17" r="2.5" fill="url(#loginGrad)" />
                  <defs>
                    <linearGradient
                      id="loginGrad"
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
              <div
                className="absolute -inset-1 rounded-xl opacity-30 blur-sm animate-glow-pulse"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.78 0.18 195 / 0.5), oklch(0.55 0.22 290 / 0.5))",
                }}
              />
            </div>

            <h1 className="font-display text-4xl font-black tracking-tight text-gradient-cyan">
              CloutForge
            </h1>
            <div
              className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full"
              style={{
                background: "oklch(0.78 0.18 195 / 0.1)",
                border: "1px solid oklch(0.78 0.18 195 / 0.25)",
                color: "oklch(0.78 0.18 195)",
              }}
            >
              .in
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-lg font-medium text-foreground leading-snug">
              Forge Your Brand's
            </p>
            <p className="text-xl font-display font-bold text-gradient-cyan">
              Digital Dominance
            </p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Data-backed social intelligence for brands that mean business.
            </p>
          </motion.div>

          {/* Divider */}
          <div
            className="w-full h-px"
            style={{ background: "oklch(0.78 0.18 195 / 0.15)" }}
          />

          {/* Sign in button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="w-full"
          >
            <button
              type="button"
              data-ocid="login.primary_button"
              onClick={login}
              disabled={isLoading}
              className="w-full relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.78 0.18 195), oklch(0.65 0.22 290))",
                color: "oklch(0.08 0.015 250)",
                boxShadow:
                  "0 0 25px oklch(0.78 0.18 195 / 0.4), 0 4px 20px oklch(0.78 0.18 195 / 0.2)",
              }}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <svg
                  role="img"
                  aria-label="Google"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <title>Google</title>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              )}
              <span>{isLoading ? "Signing in…" : "Sign in with Google"}</span>
            </button>

            <p className="text-center text-xs text-muted-foreground mt-4 leading-relaxed">
              By signing in, you agree to CloutForge's Terms of Service and
              Privacy Policy.
            </p>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {[
              "Influencer Match",
              "Brand Sentiment",
              "Trend Alerts",
              "Competitor Intel",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "oklch(0.55 0.22 290 / 0.1)",
                  border: "1px solid oklch(0.55 0.22 290 / 0.2)",
                  color: "oklch(0.72 0.2 290)",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
