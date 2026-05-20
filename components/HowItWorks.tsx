const HOW_STEPS = [
  {
    step: "1. Choose a physician advisor",
    desc: "Browse doctor profiles and specialties to find your perfect match.",
    image: "/videoCall/v1.png",
  },
  {
    step: "2. Select your session time",
    desc: "Book paid hourly advisory time based on the physician's availability and pricing.",
    image: "/videoCall/v2.png",
  },
  {
    step: "3. Share your topic or questions",
    desc: "Summarize your discussion points for the physician advisor.",
    image: "/videoCall/v3.png",
  },
  {
    step: "4. Join your video call",
    desc: "Meet by video with the physician advisor for education, context, and guidance.",
    image: "/videoCall/v4.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-8 sm:gap-14">
        <h2 className="text-[#0a0a1a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center max-w-[800px] mx-auto leading-tight">
          Four simple steps to get <span className="text-[#3260ec]">physician guidance</span> by video.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HOW_STEPS.map(({ step, desc, image }) => (
            <div key={step} className="flex flex-col gap-4 sm:gap-5">
              <img
                src={image}
                alt={step}
                className="w-full h-auto select-none object-cover rounded-lg"
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
