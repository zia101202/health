import { PrimaryButton } from "./ui/buttons";

const WHO_DATA = [
  {
    title: <>An adult child <span className="text-[#3260ec]">supporting</span><br className="hidden md:block" /> an aging parent</>,
    help: "Prepare questions, organize concerns, and better understand medical information.",
    image: "/images/1.png",
    side: "right",
  },
  {
    title: <>A spouse or caregiver<br className="hidden md:block" /> helping <span className="text-[#3260ec]">coordinate</span> care</>,
    help: "Clarify terminology and identify key topics to raise with the treating team.",
    image: "/images/2.png",
    side: "left",
  },
  {
    title: <>A family facing a<br className="hidden md:block" /> complex <span className="text-[#3260ec]">diagnosis</span></>,
    help: "Discuss general context and understand what information may matter.",
    image: "/images/3.png",
    side: "right",
  },
  {
    title: <>Someone preparing for a<br className="hidden md:block" /> second <span className="text-[#3260ec]">opinion</span></>,
    help: "Organize records, concerns, and questions before the appointment.",
    image: "/images/4.png",
    side: "left",
  },
  {
    title: <>A family trying to align<br className="hidden md:block" /> around next <span className="text-[#3260ec]">steps</span></>,
    help: "Create a clearer shared understanding before making decisions.",
    image: "/images/5.png",
    side: "right",
  },
];

export default function WhoWeServe() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="w-full lg:w-[1066px] mx-auto flex flex-col gap-8 sm:gap-[42px]">
        <div className="text-center flex flex-col gap-3 sm:gap-5 max-w-4xl mx-auto">
          <h2 className="text-[#0a0a1a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            <span className="text-[#3260ec]">Built for families</span> who want<br className="hidden md:block" /> to understand, prepare, and participate.
          </h2>
          <p
            className="text-[#444] text-[14px] sm:text-[15px] md:text-[16px] font-normal text-center w-full lg:w-[946px] mx-auto font-['Inter',sans-serif]"
            style={{ lineHeight: '25px', letterSpacing: '0em' }}
          >
            Conzultos Medical Family Advisory helps individuals clarify key healthcare discussions. It aids families in
            understanding a loved one's condition, preparing for specialist visits, organizing questions, and confidently
            navigating the healthcare system.
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10">
          {WHO_DATA.map(({ title, help, image, side }, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${side === "left" ? "md:flex-row-reverse" : ""} items-center gap-6 sm:gap-8 lg:gap-10`}
            >
              <div className="flex-1 w-full flex flex-col gap-4 sm:gap-5">
                <h3 className="text-[#0a0a1a] text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold leading-[1.1] tracking-tight">
                  {title}
                </h3>
                <div className="mt-2 sm:mt-4 w-full">
                  <p className="text-[#0a0a1a] font-hanken font-bold text-base sm:text-lg md:text-xl lg:text-[24px] leading-[25px] tracking-[0%] mb-2">How Conzultos Can Help :</p>
                  <p
                    className="text-[#444] text-[15px] sm:text-[17px] md:text-[20px] font-normal max-w-[400px] font-['Inter',sans-serif]"
                    style={{ lineHeight: '27px', letterSpacing: '0em' }}
                  >
                    {help}
                  </p>
                </div>
              </div>

              <div
                className={`flex-1 w-full relative h-[220px] sm:h-[280px] md:h-[350px] rounded-[16px] sm:rounded-[24px] overflow-hidden transform transition-transform ${side === "left" ? "lg:translate-x-0" : "lg:-translate-x-24"
                  }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt="Conzultos family" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 sm:mt-8">
          <PrimaryButton>Book a Physician Advisor Today</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
