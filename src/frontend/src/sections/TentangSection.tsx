import { useInView } from "../hooks/useInView";

export function TentangSection() {
  const tentang = useInView(0.1);
  return (
    <section
      id="tentang"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "rgba(17,30,58,0.5)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={tentang.ref}
          className={`fade-in-up ${tentang.inView ? "visible" : ""}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mengapa Rajawin Bisa{" "}
              <span style={{ color: "#D4AF37" }}>Dipercaya?</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#AAB4C8" }}>
              Bukan sekedar klaim. Ini fakta nyata yang membuktikan Rajawin
              adalah pilihan terbaik untuk kamu yang serius ingin menang di slot
              online.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <article className="card-navy rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #D4AF37, #B88B2A)",
                    color: "#0B1327",
                  }}
                >
                  RW
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Budi Santoso</h3>
                  <p className="text-sm" style={{ color: "#D4AF37" }}>
                    Analis Slot Senior & Founder Rajawin
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: "rgba(212,175,55,0.15)",
                        color: "#D4AF37",
                      }}
                    >
                      ✓ Tersertifikasi
                    </span>
                    <span className="text-xs" style={{ color: "#AAB4C8" }}>
                      8+ Tahun Pengalaman
                    </span>
                  </div>
                </div>
              </div>
              <blockquote
                className="text-sm md:text-base leading-relaxed space-y-4"
                style={{ color: "#AAB4C8" }}
              >
                <p>
                  "Saya mulai mendalami dunia slot online sejak 2016. Selama
                  bertahun-tahun, saya menganalisis ribuan putaran, mempelajari
                  pola RTP dari berbagai provider, dan mencatat apa yang
                  benar-benar bekerja — bukan sekadar keberuntungan semata."
                </p>
                <p>
                  "Rajawin lahir dari pengalaman nyata saya dan komunitas yang
                  tumbuh organik. Setiap strategi yang kami bagikan sudah
                  melewati pengujian ketat selama berbulan-bulan. Ini bukan
                  teori — ini adalah hasil dari ribuan jam analisis dan
                  pengalaman langsung di lapangan."
                </p>
              </blockquote>
              <div
                className="grid grid-cols-3 gap-4 mt-6 pt-6"
                style={{ borderTop: "1px solid #2A3A5A" }}
              >
                {[
                  { num: "10K+", label: "Member" },
                  { num: "94%", label: "Win Rate" },
                  { num: "8 Thn", label: "Pengalaman" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div
                      className="text-xl font-bold"
                      style={{ color: "#D4AF37" }}
                    >
                      {stat.num}
                    </div>
                    <div className="text-xs" style={{ color: "#AAB4C8" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <div className="space-y-4">
              {[
                {
                  icon: "🎯",
                  title: "Analisis Berbasis Data Nyata",
                  desc: "Setiap strategi kami didukung data dari ribuan sesi permainan aktual — bukan teori asal-asalan yang beredar di internet.",
                },
                {
                  icon: "🔬",
                  title: "Metodologi Terstruktur",
                  desc: "Sistem kami menggunakan pendekatan ilmiah: analisis pola RTP, timing spin, dan manajemen sesi untuk hasil maksimal.",
                },
                {
                  icon: "🤝",
                  title: "Komunitas Aktif & Supportif",
                  desc: "Bergabunglah dengan 10.000+ member yang saling berbagi tips, update strategi terbaru, dan kisah sukses setiap hari.",
                },
                {
                  icon: "🔄",
                  title: "Update Strategi Berkala",
                  desc: "Tim kami rutin memperbarui strategi setiap bulan mengikuti update algoritma terbaru dari provider ternama.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 card-navy rounded-xl"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#AAB4C8" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
