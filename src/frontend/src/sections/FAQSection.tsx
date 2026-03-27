import { CTALink } from "../components/CTALink";
import { FAQItem } from "../components/FAQItem";
import { useInView } from "../hooks/useInView";

const faqItems = [
  {
    q: "Apakah strategi Rajawin benar-benar terbukti?",
    a: "Ya, 100%. Strategi kami telah diuji oleh lebih dari 10.000 member aktif dengan win rate rata-rata 94%. Setiap metode kami didasarkan pada analisis data nyata, bukan sekadar teori. Member kami secara konsisten melaporkan peningkatan kemenangan dalam 7 hari pertama menggunakan strategi ini.",
  },
  {
    q: "Berapa modal minimal untuk mulai bermain?",
    a: "Kamu bisa mulai dengan modal sekecil Rp 50.000. Strategi manajemen bankroll kami dirancang untuk semua level pemain — dari pemula hingga profesional. Yang terpenting bukan besarnya modal, tapi bagaimana kamu mengelolanya dengan cerdas.",
  },
  {
    q: "Apakah legal bermain slot online di Indonesia?",
    a: "Rajawin beroperasi di bawah lisensi resmi internasional dan menggunakan platform yang telah tersertifikasi. Kami menyarankan setiap member untuk bertanggung jawab dalam bermain dan memahami regulasi di wilayah masing-masing. Selalu main dengan bijak!",
  },
  {
    q: "Bagaimana cara bergabung dengan Rajawin?",
    a: "Mudah banget! Klik tombol Daftar Sekarang di halaman ini, isi formulir pendaftaran singkat, verifikasi akun kamu, dan langsung nikmati akses ke semua strategi eksklusif + bonus selamat datang. Proses hanya butuh 5 menit!",
  },
  {
    q: "Apakah ada jaminan menang?",
    a: "Kami tidak menjanjikan kemenangan 100% karena slot tetaplah permainan yang mengandung faktor keberuntungan. Namun, strategi kami secara signifikan meningkatkan peluang menang dan membantu kamu meminimalkan kerugian. Win rate 94% adalah hasil rata-rata member kami yang konsisten menerapkan strategi.",
  },
  {
    q: "Bagaimana jika saya mengalami kendala?",
    a: "Tim support profesional kami siap membantu 24/7 via live chat, WhatsApp, dan email. Rata-rata waktu respons kami hanya 3 menit! Kamu tidak akan pernah merasa sendirian dalam perjalanan menang-mu bersama Rajawin.",
  },
];

export function FAQSection() {
  const faqRef = useInView(0.1);
  return (
    <section
      id="faq"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "rgba(17,30,58,0.5)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={faqRef.ref}
          className={`fade-in-up ${faqRef.inView ? "visible" : ""}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pertanyaan yang{" "}
              <span style={{ color: "#D4AF37" }}>Sering Ditanyakan</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#AAB4C8" }}>
              Punya pertanyaan? Kami punya jawabannya. Kalau tidak ketemu di
              sini, tim support kami siap membantu 24/7.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqItems.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
          <div className="text-center mt-10">
            <CTALink
              className="btn-gold px-8 py-4 rounded-xl text-base inline-flex items-center gap-2"
              ocid="faq.primary_button"
            >
              💬 Tanya Langsung ke Tim Kami
            </CTALink>
          </div>
        </div>
      </div>
    </section>
  );
}
