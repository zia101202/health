export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6 md:px-[60px]"
      style={{
        background:
          "radial-gradient(217% 200.16% at 8.02% 81.88%, #3260EC 31.18%, #6FE6EE 66.85%, #96FBDC 94.47%)",
      }}
    >
      <div className="w-full max-w-[1320px] min-h-[382px] lg:h-[382px] mx-auto flex flex-col items-center justify-center gap-[32px] text-center">
        <h2
          className="text-white text-[31px] font-semibold font-hanken text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] leading-tight lg:leading-[60px] text-center w-full max-w-[1100px]"
          style={{ letterSpacing: '-4%' }}
        >
          Get physician guidance for your family&apos;s medical questions
        </h2>

        <p
          className="text-white/90 font-['Geist',sans-serif] font-normal text-[15px] sm:text-[17px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[31px] text-center w-full max-w-[900px]"
          style={{ letterSpacing: '0%' }}
        >
          Book a paid hourly video advisory session with a physician who can help your family understand medical
          information, prepare better questions, and navigate the next conversation with more confidence.
        </p>

        <button className="bg-white text-[#3260ec] font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-[14px] rounded-[60px] hover:bg-white/90 transition-colors whitespace-nowrap shadow-sm shrink-0">
          Book a Physician Advisory Call
        </button>

        <div
          className="bg-[rgba(255,255,255,0.06)] border border-white/20 backdrop-blur-sm rounded-[12px] sm:rounded-[16px] flex items-center justify-center py-2.5 sm:py-3 px-4 sm:px-6 w-full"
          style={{ minHeight: '47px' }}
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
