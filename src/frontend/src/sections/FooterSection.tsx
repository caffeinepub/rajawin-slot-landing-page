import { CTALink } from "../components/CTALink";

const navLinks = [
  { label: "Beranda", id: "beranda" },
  { label: "Rahasia Slot", id: "rahasia-slot" },
  { label: "Keunggulan", id: "keunggulan" },
  { label: "Testimoni", id: "testimoni" },
  { label: "FAQ", id: "faq" },
];

export function FooterSection() {
  return (
    <footer>
      <div
        className="py-16 px-4 sm:px-6 lg:px-8 text-center"
        style={{
          background: "linear-gradient(135deg, #0e1f0a, #0B1327, #0e1f0a)",
        }}
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-white">
            AMBIL KESEMPATAN <span style={{ color: "#D4AF37" }}>MENANGMU</span>{" "}
            SEKARANG!
          </h2>
          <p style={{ color: "#AAB4C8" }}>
            Ribuan member sudah membuktikannya. Giliran kamu untuk mengambil
            langkah pertama. Daftar gratis sekarang dan dapatkan akses ke semua
            strategi premium + bonus eksklusif!
          </p>
          <CTALink
            className="btn-gold px-10 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 animate-pulse-glow"
            ocid="footer.primary_button"
          >
            🚀 Daftar Gratis Sekarang →
          </CTALink>
        </div>
      </div>
      <div
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#060d1e", borderTop: "1px solid #2A3A5A" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">👑</span>
              <span className="text-xl font-bold" style={{ color: "#D4AF37" }}>
                RAJAWIN
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#AAB4C8" }}>
              Platform strategi slot online #1 di Indonesia. Kami membantu
              ribuan member meraih kemenangan konsisten dengan metode berbasis
              data dan analisis nyata.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .getElementById(link.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-sm transition-colors hover:text-yellow-400"
                    style={{ color: "#AAB4C8" }}
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Penting Dibaca</h4>
            <p className="text-xs leading-relaxed" style={{ color: "#6B7A95" }}>
              ⚠️{" "}
              <strong style={{ color: "#AAB4C8" }}>Responsible Gaming:</strong>{" "}
              Bermain slot adalah hiburan, bukan sumber pendapatan utama.
              Tetapkan batas waktu dan anggaran bermainmu. Jangan pernah bermain
              melebihi kemampuan finansial. Konten ini ditujukan hanya untuk
              individu berusia 21 tahun ke atas.
            </p>
          </div>
        </div>
        <div
          className="mt-8 pt-6 text-center"
          style={{ borderTop: "1px solid #2A3A5A" }}
        >
          <p className="text-xs" style={{ color: "#6B7A95" }}>
            &copy; {new Date().getFullYear()} Rajawin. All rights reserved. |{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "#6B7A95" }}
            >
              Built with ❤️ using caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
