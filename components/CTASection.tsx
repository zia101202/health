export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6 md:px-[60px]"
      style={{
        background:
          "radial-gradient(217% 200.16% at 8.02% 81.88%, #3260EC 31.18%, #6FE6EE 66.85%, #96FBDC 94.47%)",
      }}
    >
      {/* Container for main content (doctors + CTA content) */}
      <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
        
        {/* Mobile: both doctors side by side above content */}
        <div className="flex lg:hidden gap-4 justify-center w-full">
          <div className="w-[140px] sm:w-[180px] aspect-[3/4] shrink-0 rounded-[20px] overflow-hidden bg-white shadow-lg">
            <img
              src="/p1.png"
              alt="Physician Advisor Male"
              className="w-full h-full object-cover select-none"
            />
          </div>
          <div className="w-[140px] sm:w-[180px] aspect-[3/4] shrink-0 rounded-[20px] overflow-hidden bg-white shadow-lg">
            <img
              src="/p2.png"
              alt="Physician Advisor Female"
              className="w-full h-full object-cover select-none"
            />
          </div>
        </div>

        {/* Left doctor — desktop only */}
        <div className="hidden lg:block w-[280px] aspect-[3/4] shrink-0 rounded-[30px] overflow-hidden bg-white shadow-lg">
          <img
            src="/p1.png"
            alt="Physician Advisor Male"
            className="w-full h-full object-cover select-none"
          />
        </div>

        {/* Center content */}
        <div className="flex-1 text-center flex flex-col items-center gap-4 sm:gap-6 max-w-[734px] z-10">
          <h2
            className="text-white font-semibold font-hanken text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] leading-tight lg:leading-[60px] text-center w-full"
            style={{ letterSpacing: '-4%' }}
          >
            Get physician guidance for your family's medical questions
          </h2>
          <p
            className="text-white/90 font-['Geist',sans-serif] font-normal text-[15px] sm:text-[17px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[31px] text-center w-full"
            style={{ letterSpacing: '0%' }}
          >
            Book a paid hourly video advisory session with a physician who can help your family understand medical
            information, prepare better questions, and navigate the next conversation with more confidence.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-1 sm:mt-2 w-full sm:w-auto">
            <button className="bg-white text-[#3260ec] font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-[14px] rounded-[60px] hover:bg-white/90 transition-colors whitespace-nowrap shadow-sm">
              Book a Physician Advisory Call
            </button>
            <button className="bg-transparent border border-white text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-[14px] rounded-[60px] hover:bg-white/10 transition-colors whitespace-nowrap">
              Meet Our Physician Advisors
            </button>
          </div>
        </div>

        {/* Right doctor — desktop only */}
        <div className="hidden lg:block w-[280px] aspect-[3/4] shrink-0 rounded-[30px] overflow-hidden bg-white shadow-lg">
          <img
            src="/p2.png"
            alt="Physician Advisor Female"
            className="w-full h-full object-cover select-none"
          />
        </div>
      </div>

      {/* Disclaimer capsule */}
      <div className="w-full max-w-[1303px] mx-auto mt-8 sm:mt-12 z-10 relative flex justify-center px-2 sm:px-4 md:px-0">
        <div
          className="bg-[rgba(255,255,255,0.06)] border border-white/20 backdrop-blur-sm rounded-[12px] sm:rounded-[16px] flex items-center justify-center py-2.5 sm:py-3 px-3 sm:px-4 md:pl-[25px] md:pr-[16px] w-full"
          style={{ maxWidth: '1303px', minHeight: '47px' }}
        >
          <p
            className="text-white font-semibold text-[11px] sm:text-[13px] md:text-[16px] leading-[18px] sm:leading-[21px] md:leading-[23px] text-center w-full"
            style={{ letterSpacing: '-3%' }}
          >
            Conzultos Medical Family Advisory provides non-clinical advisory services only. It does not provide
            diagnosis, treatment, prescriptions, emergency care, or a physician-patient relationship.
          </p>
        </div>
      </div>
    </section>
  );
}
