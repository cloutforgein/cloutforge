import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { IntelligenceSection } from "@/components/IntelligenceSection";
import { LeadForm } from "@/components/LeadForm";
import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <IntelligenceSection />
          <LeadForm />
        </main>
        <Footer />
      </div>
      <Toaster
        theme="dark"
        position="top-right"
        toastOptions={{
          style: {
            background: "oklch(0.12 0.02 252)",
            border: "1px solid oklch(0.25 0.03 250)",
            color: "oklch(0.92 0.01 250)",
          },
        }}
      />
    </>
  );
}
