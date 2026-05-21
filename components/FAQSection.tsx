"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is this a telehealth visit?",
    a: "No. Conzultos Medical Family Advisory is not telehealth. It is a non-clinical advisory service provided by video or phone call. The purpose is education, general guidance, healthcare navigation, and preparation for conversations with your treating medical team.",
  },
  { q: "Can the physician diagnose me or my family member?", a: null },
  { q: "Can the physician prescribe medication or change a treatment plan?", a: null },
  { q: "How is the service paid?", a: null },
  { q: "Can multiple family members join the same session?", a: null },
  { q: "What should I prepare before the call?", a: null },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-[1012px] mx-auto flex flex-col gap-6 sm:gap-10">
        <h2 className="text-[#0a0a1a]  text-[31px] max-w-[544px] mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center">
          What other <span className="text-[#3260ec]">clients have</span> asked us...
        </h2>
        <div className="flex flex-col gap-3 sm:gap-4">
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className="bg-[#f5f5f5] rounded-[14px] sm:rounded-[20px] px-4 sm:px-6 md:px-8 overflow-hidden transition-all duration-200">
              <button
                className="w-full flex items-center justify-between py-4 sm:py-6 gap-3 sm:gap-4 text-left"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <div className="flex items-center gap-2 sm:gap-4">
                  <span
                    className="text-[#0a0a1a] font-semibold font-hanken text-[16px] sm:text-[18px] md:text-[22px] leading-none shrink-0 w-6 sm:w-8"
                    style={{ letterSpacing: '-1%' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[#0a0a1a] font-semibold font-hanken text-[14px] sm:text-[17px] md:text-[22px] leading-snug sm:leading-none"
                    style={{ letterSpacing: '-1%' }}
                  >
                    {q}
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-[#0a0a1a] shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && a && (
                <div className="pb-4 sm:pb-6 border-t border-black/5 pt-3 sm:pt-4">
                  <p
                    className="text-[#555] font-['Inter',sans-serif] font-normal text-[13px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[26px]"
                    style={{ letterSpacing: '0%' }}
                  >
                    {a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
