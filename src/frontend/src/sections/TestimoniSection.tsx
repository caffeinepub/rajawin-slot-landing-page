import { CTALink } from "../components/CTALink";
import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    name: "Agus P.",
    city: "Jakarta",
    avatar: "AG",
    quote:
      "Jujur, saya awalnya skeptis. Tapi setelah coba teknik RTP tinggi dari Rajawin, dalam seminggu pertama saya sudah balik modal 3x lipat. Yang bikin beda adalah pendekatan sistematis Rajawin — bukan cuma coba-coba seperti sebelumnya. Sekarang Rajawin sudah jadi andalan untuk penghasilan tambahan yang konsisten.",
    win: "Profit: Rp 8.500.000",
  },
  {
    name: "Sari M.",
    city: "Surabaya",
    avatar: "SM",
    quote:
      "Dulu sering habis modal dalam 30 menit karena tidak punya strategi. Setelah belajar manajemen bankroll dari Rajawin, saya bisa bertahan jauh lebih lama dan konsisten profit. Tips Piramida Bankroll Rajawin benar-benar mengubah cara saya bermain. Sudah 4 bulan konsisten profit bersama Rajawin!",
    win: "Profit: Rp 12.200.000",
  },
  {
    name: "Deni K.",
    city: "Bali",
    avatar: "DK",
    quote:
      "Saya sudah coba berbagai platform, tapi Rajawin benar-benar berbeda. Analisis mesin yang Rajawin berikan sangat detail dan actionable. Pertama kali saya coba Rajawin, langsung dapat jackpot kecil. Community Rajawin juga aktif banget — saling support setiap hari!",
    win: "Profit: Rp 6.700.000",
  },
];

export function TestimoniSection() {
  const testimoni = useInView(0.1);
  return (
    <section id="testimoni" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={testimoni.ref}
          className={`fade-in-up ${testimoni.inView ? "visible" : ""}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kisah Sukses{" "}
              <span style={{ color: "#D4AF37" }}>Member Rajawin</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#AAB4C8" }}>
              Bukan testimoni palsu. Ini cerita nyata dari member Rajawin yang
              berani berbagi perjalanan sukses mereka bersama Rajawin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <article
                key={t.name}
                className="card-navy rounded-2xl p-6 flex flex-col gap-4"
                data-ocid={`testimoni.item.${i + 1}`}
              >
                <div className="flex" aria-label="Rating bintang 5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} style={{ color: "#D4AF37" }}>
                      ★
                    </span>
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed flex-1 italic"
                  style={{ color: "#AAB4C8" }}
                >
                  “{t.quote}”
                </p>
                <div
                  className="pt-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid #2A3A5A" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "linear-gradient(135deg, #D4AF37, #B88B2A)",
                        color: "#0B1327",
                      }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white">
                        {t.name}
                      </div>
                      <div className="text-xs" style={{ color: "#AAB4C8" }}>
                        {t.city}
                      </div>
                    </div>
                  </div>
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(212,175,55,0.15)",
                      color: "#D4AF37",
                    }}
                  >
                    {t.win}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTALink
              className="btn-outline-gold px-8 py-4 rounded-xl text-base inline-flex items-center gap-2"
              ocid="testimoni.primary_button"
            >
              Bergabung & Raih Kesuksesan Bersama Rajawin
            </CTALink>
          </div>
        </div>
      </div>
    </section>
  );
}
