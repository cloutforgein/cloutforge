import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div
            style={{
              minHeight: "100vh",
              background: "oklch(0.08 0.015 250)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem",
              color: "oklch(0.75 0.03 250)",
              fontFamily: "sans-serif",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                background:
                  "linear-gradient(135deg, oklch(0.78 0.18 195), oklch(0.65 0.22 290))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 900,
              }}
            >
              CloutForge
            </div>
            <p style={{ maxWidth: "400px", color: "oklch(0.55 0.03 250)" }}>
              Something went wrong loading the app. Please refresh the page.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                padding: "0.5rem 1.25rem",
                background: "oklch(0.78 0.18 195 / 0.15)",
                border: "1px solid oklch(0.78 0.18 195 / 0.3)",
                color: "oklch(0.78 0.18 195)",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "0.875rem",
              }}
            >
              Refresh
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
