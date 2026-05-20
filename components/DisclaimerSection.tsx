export default function DisclaimerSection() {
  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
        {/* Left image/card */}
        <div className="w-full lg:w-[609px] aspect-[609/677] lg:aspect-auto lg:h-[677px] relative rounded-[10px] overflow-hidden shrink-0 shadow-sm">
          <img
            src="/clinical/p.png"
            alt="Physician video advisory call"
            className="w-full h-full object-cover select-none"
          />
        </div>

        {/* Right content */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 justify-center max-w-xl">
          <h2 className="text-[#0a0a1a] text-2xl sm:text-3xl md:text-4xl lg:text-[55px] lg:leading-[60px] lg:tracking-[-0.04em] font-semibold font-hanken leading-tight">
            We help you <span className="text-[#3260ec]">understand</span>. We do not replace your doctor.
          </h2>
          <p className="text-[#444] text-sm sm:text-base leading-relaxed">
            Conzultos Medical Family Advisory is intentionally designed as a{" "}
            <span className="text-[#3260ec] font-semibold">non-clinical advisory service</span>. That means
            the physician advisor can help you understand information, prepare questions, and think through general
            considerations, but they cannot diagnose, treat, prescribe, or make clinical decisions for you.
          </p>
          <img
            src="/clinical/t.png"
            alt="Advisory vs Clinical Care Comparison Table"
            className="w-full h-auto select-none mt-1 sm:mt-2 rounded-[8.59px] overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
}
