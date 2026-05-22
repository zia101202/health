import Image from "next/image";
import { PrimaryButton } from "./ui/buttons";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section
      className="relative mx-auto text-center flex flex-col overflow-hidden"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",

        maxWidth: "100%",
        marginTop: "0px",
      }}
    >
      {/* Fixed height only on large screens, min-height for mobile */}
      <style>{`
        @media (min-width: 1024px) {
          .hero-section-height { height: 820px; }
        }
        @media (max-width: 1023px) {
          .hero-section-height { min-height: 100vh; }
        }
      `}</style>
      <div className="hero-section-height absolute inset-0" />
      <div className="absolute inset-0 bg-black/50 z-0" />

      <Navbar />

      <div className="flex-1 w-full max-w-[1219px] mx-auto flex flex-col items-center justify-center gap-4 sm:gap-[24px] relative z-10 px-4 sm:px-6 py-8 sm:py-12">
        {/* Badge */}
        <div className="bg-white/10 backdrop-blur-md border border-white/30 text-white text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider px-5 py-2 rounded-full">
          1:1 Access to Top U.S. Licensed Physicians
        </div>

        {/* Headline */}
        <h1
          className="text-[28px] sm:text-4xl md:text-5xl lg:text-[70px] font-semibold text-white leading-[1.15] sm:leading-[1.1] lg:leading-[75px] tracking-[-0.03em] lg:tracking-[-0.06em] text-center font-hanken w-full lg:w-[1219px]"
        >
          Get expert <span className="text-[#4f8fff]">medical guidance</span>
          <br />
          for you and your family.
        </h1>

        {/* Subtext */}
        <p
          className="text-white font-['Inter',sans-serif] font-normal text-[16px] leading-[27px] tracking-[0] text-center w-full max-w-[767px] lg:min-h-[81px] mx-auto px-2 flex items-center justify-center"
        >
          Conzultos Medical Family Advisory connects you with experienced physicians for non-clinical advisory sessions.
          Get help understanding medical information, preparing better questions, reviewing options, and making more
          informed decisions with your family.
        </p>

        {/* CTA */}
        <div className="flex justify-center w-full">
          <PrimaryButton>Book a Physician Advisor Today</PrimaryButton>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] mt-4 sm:mt-6 w-full max-w-[1097px] lg:min-h-[194px] mx-auto">
          {[
            {
              icon: "/h1.png",
              title: "Physician-led",
              desc: "Speak with licensed physician advisors with real clinical experience.",
            },
            {
              icon: "/h2.png",
              title: "Video-based",
              desc: "Meet privately by video call from wherever your family is located",
            },
            {
              icon: "/h3.png",
              title: "Paid hourly",
              desc: "Book focused advisory time with transparent hourly pricing",
            },
            {
              icon: "/h4.png",
              title: "Non-clinical",
              desc: "Receive education, context, and guidance without diagnosis or treatment.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-2 sm:gap-3 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image src={icon} alt={title} width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" loading="eager" />
              <span className="text-white font-bold text-base sm:text-lg tracking-tight">{title}</span>
              <p className="text-white/70 font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[0] text-center">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div
          className="w-full lg:w-[1094px] bg-[rgba(255,255,255,0.06)] backdrop-blur-md border border-white/10 rounded-[12px] sm:rounded-[16px] flex items-center justify-center overflow-hidden shrink-0 py-2.5 sm:py-3 px-3 sm:px-4 lg:px-[25px]"
        >
          <p
            className="text-white font-semibold text-[11px] sm:text-[13px] lg:text-[16px] font-hanken text-center w-full lg:w-[1003px] leading-snug"
            style={{ letterSpacing: '-0.05em' }}
          >
            Conzultos provides non-clinical advisory services only. If you are experiencing a medical emergency, call 911 or seek emergency medical care immediately.
          </p>
        </div>
      </div>
    </section>
  );
}
