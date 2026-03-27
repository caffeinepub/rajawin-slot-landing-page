import { CTALink } from "../components/CTALink";
import { useInView } from "../hooks/useInView";

const strategies = [
  {
    icon: "🎯",
    title: "Teknik Timing Spin Presisi",
    desc: "Waktu kamu menekan spin bukan hanya soal feeling. Ada pola matematis yang bisa dimanfaatkan. Rajawin mengajarkan cara membaca ritme mesin dan kapan waktu paling optimal untuk bertaruh lebih besar — teknik ini saja meningkatkan win rate member Rajawin rata-rata 23%.",
    badge: "Paling Populer",
  },
  {
    icon: "💰",
    title: "Manajemen Bankroll Cerdas",
    desc: "Kesalahan terbesar pemain slot adalah tidak punya sistem pengelolaan modal. Metode Piramida Bankroll eksklusif Rajawin membantu kamu bertahan lebih lama, memaksimalkan kemenangan, dan tahu kapan harus berhenti — mencegah kerugian besar yang tidak perlu.",
    badge: "Wajib Dikuasai",
  },
  {
    icon: "🔥",
    title: "Pilih Slot RTP Tinggi",
    desc: "Tidak semua slot diciptakan sama. Slot dengan RTP 96–99% memberikan peluang jauh lebih besar. Rajawin memiliki daftar lengkap slot RTP tinggi di semua platform terkemuka beserta analisis volatilitasnya untuk kamu optimalkan setiap sesi bersama Rajawin.",
    badge: "Rahasia Insider",
  },
];

const tips = [
  {
    num: "01",
    tip: "Selalu mulai sesi Rajawin dengan taruhan minimum selama 10–15 spin pertama untuk memanaskan mesin dan membaca polanya sebelum menaikkan taruhan.",
  },
  {
    num: "02",
    tip: "Gunakan fitur Auto-play dengan bijak — matikan saat sudah mencapai target profit 30% dari modal awal. Disiplin adalah kunci kemenangan jangka panjang di Rajawin.",
  },
  {
    num: "03",
    tip: "Jangan pernah bermain saat sedang emosi atau lelah. Kondisi mental yang jernih adalah aset terbesar pemain slot profesional Rajawin — ini bukan klise, ini sains.",
  },
];

export function StrategiSection() {
  const strategi = useInView(0.1);
  return (
    <section id="rahasia-slot" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={strategi.ref}
          className={`fade-in-up ${strategi.inView ? "visible" : ""}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Rahasia Insider Rajawin &{" "}
              <span style={{ color: "#D4AF37" }}>Strategi Terbukti 2026</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#AAB4C8" }}>
              Inilah metode eksklusif Rajawin yang selama ini hanya diketahui
              kalangan pemain profesional. Sekarang kami bongkar semua untuk
              kamu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {strategies.map((card) => (
              <div
                key={card.title}
                className="card-navy rounded-2xl p-6 flex flex-col gap-4 hover:shadow-gold transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{card.icon}</span>
                  <span
                    className="text-xs px-2 py-1 rounded-full font-semibold"
                    style={{
                      backgroundColor: "rgba(212,175,55,0.15)",
                      color: "#D4AF37",
                    }}
                  >
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "#AAB4C8" }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-center text-white mb-6">
              Tips Eksklusif Rajawin{" "}
              <span style={{ color: "#D4AF37" }}>Langsung dari Pro</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tips.map((item) => (
                <div
                  key={item.num}
                  className="flex gap-4 p-5 card-navy rounded-xl"
                >
                  <span
                    className="text-2xl font-extrabold flex-shrink-0"
                    style={{ color: "#D4AF37" }}
                  >
                    {item.num}
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#AAB4C8" }}
                  >
                    {item.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <CTALink
              className="btn-gold px-8 py-4 rounded-xl text-base inline-flex items-center gap-2"
              ocid="strategi.primary_button"
            >
              Akses Semua Strategi Rajawin Lengkap →
            </CTALink>
          </div>
        </div>
      </div>
    </section>
  );
}
