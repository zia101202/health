import { PrimaryButton } from "./ui/buttons";

const WHY_FEATURES = [
  {
    icon: "/guidance/p1.png",
    title: "Physician perspective",
    desc: "Speak with a physician advisor who can explain medical concepts in plain language.",
  },
  {
    icon: "/guidance/p2.png",
    title: "More time for your questions",
    desc: "Use dedicated advisory time to focus on the questions that matter to your family.",
  },
  {
    icon: "/guidance/p3.png",
    title: "Transparent hourly model",
    desc: "Pay for advisory time without insurance billing or unclear service expectations.",
  },
  {
    icon: "/guidance/p4.png",
    title: "Video convenience",
    desc: "Include family members from different locations in the same video call.",
  },
  {
    icon: "/guidance/p5.png",
    title: "Clear boundaries",
    desc: "Get education and guidance while keeping clinical decisions with your treating team.",
  },
];

export default function WhyConzultos() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="w-full md:max-w-[1286px] mx-auto flex flex-col items-center gap-8 sm:gap-10 lg:gap-[60px]">
        <div className="text-center flex flex-col items-center gap-3 sm:gap-5 w-full">
          <h2 
            className="text-[#0a0a1a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold font-hanken leading-tight lg:leading-[60px] text-center w-full lg:w-[949px] mx-auto"
            style={{ letterSpacing: '-4%' }}
          >
            Clear guidance, <span className="text-[#3260ec]">physician <br className="hidden md:block" /> expertise</span>, and professional boundaries.
          </h2>
          <p 
            className="text-[#444] font-['Inter',sans-serif] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[23px] sm:leading-[25px] text-center w-full lg:w-[1056px] mx-auto"
            style={{ letterSpacing: '0%' }}
          >
            Families choose Conzultos because they want access to medical expertise in a format that is structured,
            respectful, and transparent. The service gives families time to ask questions, understand general medical
            context, and prepare for conversations with their own doctors.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 w-full justify-items-center">
          {WHY_FEATURES.map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3 sm:gap-4">
              <img
                src={icon}
                alt={title}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain select-none mb-1"
              />
              <p 
                className="text-[#0a0a1a] font-semibold font-hanken text-[15px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[32px] text-center" 
                style={{ letterSpacing: '-4%' }}
              >
                {title}
              </p>
              <p 
                className="text-[#555] font-['Inter',sans-serif] font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-[18px] sm:leading-[20px] text-center" 
                style={{ letterSpacing: '0%' }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <PrimaryButton>Book a Physician Advisor Today</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
