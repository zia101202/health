import Image from "next/image";
import { PrimaryButton } from "./ui/buttons";

export default function ReviewDoctorsSection() {
  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6">
      <div className="w-full lg:max-w-[1320px] mx-auto bg-[#f5f5f5] rounded-[20px] sm:rounded-[30px] flex flex-col lg:flex-row items-center lg:justify-between p-6 sm:p-8 lg:px-[132px] lg:py-16 overflow-hidden">
        {/* Left text */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[51px] w-full lg:w-[570px] justify-center">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-[#0a0a1a] text-[28px] sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight leading-tight font-hanken">
              <span className="text-[#3260ec]">Review doctors</span> by name, picture, specialty, and experience
            </h2>
            <div className="flex flex-col gap-3 sm:gap-4 text-[#444] text-sm sm:text-base leading-relaxed">
              <p>
                On Conzultos, you can browse physician advisor profiles before booking. Each profile can include the
                doctor's photo, name, specialty, background, advisory focus areas, availability, and hourly rate.
              </p>
              <p>
                This helps your family choose the physician whose experience best matches the topic you want to discuss.
              </p>
            </div>
          </div>
          <div>
            <a href="https://app.conzultos.com/register-client?consultant=cmlhd2i150004ny01t2a6iabi" target="_blank" rel="noopener noreferrer">
              <PrimaryButton>Book a Physician Advisor Today</PrimaryButton>
            </a>
          </div>
        </div>

        {/* Right graphic */}
        <div className="w-full lg:w-[603px] flex items-center justify-center mt-8 sm:mt-12 lg:mt-0">
          <div className="relative w-full aspect-[603/480] rounded-2xl overflow-hidden select-none">
            <Image
              src="/review.svg"
              alt="Review doctor profile example"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 603px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
