import Image from "next/image";
import { PrimaryButton } from "./ui/buttons";

const WHO_DATA = [
  {
    title: <>An adult child <span className="text-[#3260ec]">supporting</span><br className="hidden md:block" /> an aging parent</>,
    help: "Prepare questions, organize concerns, and feel better prepared to make medical decisions.",
    image: "/images/p1.svg",
    side: "right",
  },
  {
    title: <>A spouse or caregiver helping <span className="text-[#3260ec]">coordinate</span> care</>,
    help: "Medical expertise to help caregivers make every medical decision.",
    image: "/images/p2.svg",
    side: "left",
  },
  {
    title: <>A family facing a complex <span className="text-[#3260ec]">diagnosis</span></>,
    help: "Understand diagnosis, different treatment options and how to decide the right path.",
    image: "/images/p3.svg",
    side: "right",
  },
  {
    title: <>Someone preparing for a second <span className="text-[#3260ec]">opinion</span></>,
    help: "Finding the right specialist, identify concerns and questions before the appointment.",
    image: "/images/p4.svg",
    side: "left",
  },
];

export default function WhoWeServe() {
  return (
    <section id="about" className="bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="w-full lg:w-[1066px] mx-auto flex flex-col gap-8 sm:gap-[42px]">
        <div className="text-center flex flex-col gap-3 sm:gap-5 max-w-4xl mx-auto">
          <h2 className="text-[#0a0a1a] text-[33px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            <span className="text-[#3260ec]">Built for families</span> who want<br className="hidden md:block" /> to understand, prepare, and participate.
          </h2>

        </div>

        <div className="flex flex-col gap-8 sm:gap-10">
          {WHO_DATA.map(({ title, help, image, side }, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${side === "left" ? "md:flex-row-reverse" : ""} items-center gap-6 sm:gap-8 lg:gap-10`}
            >
              <div className="w-full md:flex-1 flex flex-col gap-4 sm:gap-5 order-2 md:order-none">
                <h3 className="text-[#0a0a1a] text-xl text-[28px] sm:text-2xl md:text-3xl lg:text-[36px] font-semibold leading-[1.1] tracking-tight">
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
                className={`w-full md:flex-1 relative h-[220px] sm:h-[280px] md:h-[350px] shrink-0 rounded-[16px] sm:rounded-[24px] overflow-hidden transform transition-transform order-1 md:order-none ${side === "left" ? "lg:translate-x-0" : "lg:-translate-x-24"
                  }`}
              >
                <Image
                  src={image}
                  alt="Conzultos family"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 sm:mt-8">
          <a href="https://app.conzultos.com/register-client?consultant=cmlhd2i150004ny01t2a6iabi" target="_blank" rel="noopener noreferrer">
            <PrimaryButton>Book a Physician Advisor Today</PrimaryButton>
          </a>
        </div>
      </div>
    </section>
  );
}
