import { useCallback } from "react";
import { CTALink } from "../components/CTALink";
import { useInView } from "../hooks/useInView";

export function HeroSection() {
  const hero = useInView(0.1);
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="beranda"
      className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={hero.ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center fade-in-up ${hero.inView ? "visible" : ""}`}
        >
          <div className="space-y-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: "rgba(212,175,55,0.15)",
                color: "#D4AF37",
                border: "1px solid rgba(212,175,55,0.3)",
              }}
            >
              🏆 Platform Slot #1 Indonesia 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight uppercase tracking-tight">
              <span style={{ color: "#D4AF37" }}>RAJAWIN</span>{" "}
              <span className="text-white">
                BONGKAR RAHASIA JEBOL MESIN SLOT TERBARU{" "}
              </span>
              <span style={{ color: "#D4AF37" }}>2026!</span>
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#AAB4C8" }}
            >
              Temukan strategi insider eksklusif yang digunakan ribuan member
              sukses untuk menang konsisten di mesin slot online. Dijamin
              terbukti, legal, dan aman!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTALink
                className="btn-gold px-8 py-4 rounded-xl text-base text-center inline-flex items-center justify-center gap-2 animate-pulse-glow"
                ocid="hero.primary_button"
              >
                🚀 Mulai Menang Sekarang
              </CTALink>
              <button
                type="button"
                onClick={() => scrollTo("rahasia-slot")}
                className="btn-outline-gold px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2"
                data-ocid="hero.secondary_button"
              >
                📖 Pelajari Strategi
              </button>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: "✅", label: "10.000+ Member Aktif" },
                { icon: "🏆", label: "Win Rate 94%" },
                { icon: "⚡", label: "Support 24/7" },
                { icon: "🔒", label: "100% Aman & Legal" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid #2A3A5A",
                    color: "#AAB4C8",
                  }}
                >
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
                }}
              />
              <img
                src="/assets/generated/slot-machine-hero.dim_600x500.png"
                alt="Mesin Slot Online Rajawin 2026 - Strategi Menang Terbukti"
                className="relative w-full max-w-md lg:max-w-lg animate-float drop-shadow-2xl"
                width={600}
                height={500}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
