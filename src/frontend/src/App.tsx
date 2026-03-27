import { FAQSection } from "./sections/FAQSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { KeunggulanSection } from "./sections/KeunggulanSection";
import { NavBar } from "./sections/NavBar";
import { StrategiSection } from "./sections/StrategiSection";
import { TentangSection } from "./sections/TentangSection";
import { TestimoniSection } from "./sections/TestimoniSection";

export default function App() {
  return (
    <div
      className="min-h-screen ornament-bg"
      style={{ backgroundColor: "#0B1327", color: "#F3F6FF" }}
    >
      <NavBar />
      <main>
        <HeroSection />
        <TentangSection />
        <StrategiSection />
        <KeunggulanSection />
        <TestimoniSection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
}
