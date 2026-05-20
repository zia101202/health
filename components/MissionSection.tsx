import { PrimaryButton } from "./ui/buttons";

export default function MissionSection() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-[1294px] mx-auto flex flex-col lg:flex-row gap-[47px] items-center">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden w-full lg:w-[636px] lg:h-[515px] shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mission.png" alt="Family using Conzultos" className="w-full h-full object-cover" />
          <div className="absolute bottom-5 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4">
            <p className="text-white text-sm font-semibold text-center leading-snug tracking-tight">
              Conzultos is designed for the moments when your family needs medical understanding, not clinical treatment.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[32px] w-full lg:w-[611px] shrink-0 justify-center">
          <h2 className="text-[#0a0a1a] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight lg:leading-[45px] tracking-[-0.04em] font-hanken">
            When medical choices seem overwhelming, Conzultos guides your family in understanding options, asking the
            right questions, and making confident decisions.
          </h2>
          <div className="text-[#262626] text-base leading-relaxed flex flex-col gap-5">
            <p>
              A medical issue can confuse the entire family. You might be sorting through hospital notes, comparing
              specialist opinions, or supporting an aging parent while figuring out what to ask. Even with a doctor,
              processing everything during appointments can be challenging.
            </p>
            <p>
              Conzultos links families with physician advisors to clarify medical concepts, organize questions, and
              streamline decision-making.
            </p>
          </div>
          <PrimaryButton className="self-start">Book a Physician Advisor Today</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
