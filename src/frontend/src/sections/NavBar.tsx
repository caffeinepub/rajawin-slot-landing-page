import { useCallback, useEffect, useState } from "react";
import { CTALink } from "../components/CTALink";

const navLinks = [
  { label: "Beranda", id: "beranda" },
  { label: "Rahasia Slot", id: "rahasia-slot" },
  { label: "Keunggulan", id: "keunggulan" },
  { label: "Testimoni", id: "testimoni" },
  { label: "FAQ", id: "faq" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(11,19,39,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #2A3A5A" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between h-16 md:h-20"
          aria-label="Navigasi Utama"
        >
          <button
            type="button"
            onClick={() => scrollTo("beranda")}
            className="flex items-center gap-2 font-bold text-xl"
            data-ocid="nav.link"
          >
            <span className="text-2xl">👑</span>
            <span style={{ color: "#D4AF37" }}>RAJAWIN</span>
          </button>
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="text-sm font-medium transition-colors hover:text-yellow-400"
                  style={{ color: "#AAB4C8" }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <CTALink
              className="hidden md:inline-flex btn-gold px-5 py-2.5 rounded-full text-sm"
              ocid="nav.primary_button"
            >
              Daftar Sekarang
            </CTALink>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg"
              style={{ color: "#AAB4C8" }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {mobileOpen && (
          <div
            className="md:hidden pb-4 pt-2 flex flex-col gap-2"
            style={{ borderTop: "1px solid #2A3A5A" }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="text-left px-2 py-2 text-sm font-medium rounded-lg hover:bg-white/5"
                style={{ color: "#AAB4C8" }}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            <CTALink
              className="btn-gold px-5 py-2.5 rounded-full text-sm text-center mt-2"
              ocid="nav.primary_button"
            >
              Daftar Sekarang
            </CTALink>
          </div>
        )}
      </div>
    </header>
  );
}
