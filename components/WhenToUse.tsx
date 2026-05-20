import { PrimaryButton } from "./ui/buttons";

const WHEN_DATA = [
  {
    num: "01",
    situation: "After receiving complex medical news",
    quote: '"Help us understand what this means and what questions we should ask next."',
  },
  {
    num: "02",
    situation: "Before a specialist appointment",
    quote: '"Help us prepare so we use the visit time effectively."',
  },
  {
    num: "03",
    situation: "After a hospitalization",
    quote: '"Help us understand the general meaning of discharge instructions and follow-up topics."',
  },
  {
    num: "04",
    situation: "When family members disagree or feel confused",
    quote: '"Help everyone understand the medical context in plain language."',
  },
  {
    num: "05",
    situation: "When researching online becomes overwhelming",
    quote: '"Help us separate useful questions from confusing information."',
  },
];

export default function WhenToUse() {
  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20 px-4 sm:px-6 md:px-14">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 sm:gap-16">
        <div className="text-center max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6">
          <h2 className="text-[#0a0a1a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold tracking-[-0.04em] leading-tight lg:leading-[60px] font-hanken w-full lg:w-[949px] mx-auto text-center">
            Guidance when your<br className="hidden md:block" />
            <span className="text-[#3260ec]">family has questions</span> and needs structure.
          </h2>
          <p className="text-[#444] font-['Inter',sans-serif] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[23px] sm:leading-[25px] tracking-[0%] text-center w-full lg:w-[961px] mx-auto">
            Conzultos Medical Family Advisory helps individuals clarify key healthcare discussions. It aids families in
            understanding a loved one's condition, preparing for specialist visits, organizing questions, and confidently
            navigating the healthcare system.
          </p>
        </div>

        {/* 4-column grid header alignment — cols: [number | image | situation | quote] */}
        <div className="border-t border-[#0a0a1a]/10">
          {WHEN_DATA.map(({ num, situation, quote }, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-[auto_220px_1fr_1fr] grid-cols-1 items-start md:items-center gap-x-6 lg:gap-x-10 gap-y-3 sm:gap-y-4 md:gap-y-6 py-6 sm:py-8 lg:py-0 lg:h-[149px] border-b border-[#0a0a1a]/10 ${i === 0 ? "bg-white px-4 sm:px-6 md:px-10 -mx-4 sm:-mx-6 md:-mx-10 rounded-lg md:rounded-none" : ""}`}
            >
              {/* Col 1 — Number */}
              <div className="flex items-center gap-2 w-20 shrink-0">
                <span className="text-[#0a0a1a] font-bold text-xl sm:text-2xl italic">{num}</span>
                <span className="text-[#0a0a1a] font-normal text-[40px] sm:text-[65px] leading-[40px] sm:leading-[65px] h-[40px] sm:h-[65px] italic">/</span>
              </div>

              {/* Col 2 — Image (only row 1, empty cell for rest) */}
              <div className="hidden md:flex items-center justify-center h-full">
                {i === 0 && (
                  <div className="w-[185px] h-[193px] rotate-[25deg] rounded-[20px] overflow-hidden shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/guidance.png" alt="Guidance" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              {/* Col 3 — Situation */}
              <div>
                <span
                  className="text-[#0a0a1a] font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] lg:leading-[32px] italic font-['Inter',sans-serif]"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {situation}
                </span>
              </div>

              {/* Col 4 — Quote */}
              <div>
                <p
                  className="text-[#0a0a1a] text-[15px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[26px] lg:leading-[32px] italic font-medium font-['Inter',sans-serif]"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-2 sm:mt-4">
          <PrimaryButton>Book a Physician Advisor Today</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
