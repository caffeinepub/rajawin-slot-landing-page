import { CTALink } from "../components/CTALink";
import { useInView } from "../hooks/useInView";

const benefits = [
  {
    icon: "🎁",
    title: "Bonus Terbesar",
    desc: "Bonus selamat datang hingga 200% + cashback mingguan + hadiah loyalitas eksklusif yang tidak ada di tempat lain.",
  },
  {
    icon: "🚀",
    title: "Proses Cepat",
    desc: "Deposit & withdraw diproses dalam hitungan menit, 24/7. Tidak ada waiting time yang bikin frustrasi.",
  },
  {
    icon: "🛡️",
    title: "Keamanan Terjamin",
    desc: "Enkripsi SSL 256-bit, dua faktor autentikasi, dan sistem anti-fraud canggih melindungi akun dan dana kamu.",
  },
  {
    icon: "💎",
    title: "Koleksi Slot Terlengkap",
    desc: "500+ judul slot dari provider terkemuka: Pragmatic Play, PG Soft, Habanero, dan masih banyak lagi.",
  },
  {
    icon: "🎓",
    title: "Panduan Eksklusif",
    desc: "Akses perpustakaan strategi premium, webinar bulanan bersama analis slot berpengalaman, dan update rutin.",
  },
  {
    icon: "📞",
    title: "CS 24/7",
    desc: "Tim support profesional siap membantu kapanpun. Live chat, WhatsApp, email — semua direspons dalam 3 menit.",
  },
];

export function KeunggulanSection() {
  const keunggulan = useInView(0.1);
  return (
    <section
      id="keunggulan"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "rgba(17,30,58,0.5)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={keunggulan.ref}
          className={`fade-in-up ${keunggulan.inView ? "visible" : ""}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Keunggulan Rajawin{" "}
              <span style={{ color: "#D4AF37" }}>vs Platform Lain</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#AAB4C8" }}>
              Rajawin bukan sekadar platform slot biasa. Ini adalah ekosistem
              lengkap untuk memaksimalkan peluang menangmu.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 card-navy rounded-xl hover:border-yellow-500/30 transition-all"
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
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
          <div className="text-center mt-10">
            <CTALink
              className="btn-gold px-8 py-4 rounded-xl text-base inline-flex items-center gap-2"
              ocid="keunggulan.primary_button"
            >
              🎁 Klaim Bonus Selamat Datang
            </CTALink>
          </div>
        </div>
      </div>
    </section>
  );
}
