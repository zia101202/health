const HOW_STEPS = [
  {
    step: "1. Choose a physician advisor",
    desc: "Browse doctor profiles and specialties to find your perfect match.",
    image: "/videoCall/v1.png",
  },
  {
    step: "2. Book a session",
    desc: "Book paid hourly advisory time based on the physician's availability and pricing.",
    image: "/videoCall/v2.png",
  },
  {
    step: "3. Get in touch with your physician",
    desc: "Coordinate your call with your physician via internal messaging.",
    image: "/videoCall/v3.png",
  },
  {
    step: "4. Join your session",
    desc: "Meet by video or phone call with the physician advisor for education, context, and guidance.",
    image: "/videoCall/v4.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-8 sm:gap-14">
        <h2 className="text-[#0a0a1a] text-[36px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center max-w-[800px] mx-auto leading-tight">
          Four simple steps to get <span className="text-[#3260ec]">physician guidance</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center lg:justify-items-stretch">
          {HOW_STEPS.map(({ step, desc, image }) => (
            <div key={step} className="flex flex-col gap-4 sm:gap-5 w-full max-w-[321px] lg:max-w-none lg:min-w-[321px]">
              <img
                src={image}
                alt={step}
                className="w-full max-w-[321px] h-[354px] lg:w-[321px] lg:min-w-[321px] lg:min-h-[354px] lg:h-[354px] shrink-0 select-none object-cover rounded-[20px] mx-auto lg:mx-0"
              />
              <div>
                <p className="text-[#0a0a1a] font-bold text-base sm:text-lg tracking-tight mb-1">{step}</p>
                <p className="text-[#555] font-['Inter',sans-serif] font-normal text-[14px] sm:text-[16px] leading-[21px] sm:leading-[23px]" style={{ letterSpacing: '-1%' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
