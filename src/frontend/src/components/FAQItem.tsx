import { useRef, useState } from "react";

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="card-navy rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-white pr-4 text-sm md:text-base">
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border text-base font-bold transition-transform duration-300"
          style={{
            color: "#D4AF37",
            borderColor: "#D4AF37",
            transform: open ? "rotate(45deg)" : "rotate(0)",
          }}
        >
          +
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: open
            ? contentRef.current
              ? `${contentRef.current.scrollHeight}px`
              : "500px"
            : "0",
        }}
      >
        <p
          className="px-5 pb-5 text-sm leading-relaxed"
          style={{ color: "#AAB4C8" }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}
