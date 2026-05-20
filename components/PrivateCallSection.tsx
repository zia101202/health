import { PrimaryButton } from "./ui/buttons";

const HELP_WITH = [
  "Understanding medical terms, reports, and general concepts",
  "Preparing questions for a treating physician or specialist",
  "Organizing concerns before a hospital or specialist visit",
  "Discussing general care pathways and healthcare navigation",
  "Helping families communicate and make informed decisions",
];

const NOT_INCLUDE = [
  "Diagnosis",
  "Treatment recommendations as your treating doctor",
  "Prescriptions or medication management",
  "Emergency or urgent medical care",
  "Establishing a physician-patient relationship",
];

export default function PrivateCallSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 flex justify-center bg-white">
      <div className="w-full max-w-[1320px] bg-[#f5f5f5] rounded-[20px] sm:rounded-[30px] py-10 sm:py-[60px] lg:py-[80px] px-4 sm:px-6 lg:px-12 flex flex-col items-center gap-8 sm:gap-[47px] relative overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center max-w-[900px] relative z-10">
          <h2 className="text-[#0a0a1a] text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-semibold tracking-tight leading-tight font-hanken">
            A private call with a <span className="text-[#3260ec]">physician advisor.</span>
          </h2>
          <p
            className="text-[#444] text-[14px] sm:text-[15px] md:text-[16px] font-normal text-center w-full lg:w-[1060px] font-['Inter',sans-serif]"
            style={{ lineHeight: '25px', letterSpacing: '0%' }}
          >
            Medical Family Advisory connects families with a physician via video calls to address medical questions. The physician clarifies terms, helps prepare for appointments, and formulates questions, making it easier for families to communicate with their healthcare team.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-[32px] w-full max-w-[1197px] relative z-10">
          
          {/* Left Card */}
          <div className="flex-1 bg-[#4f8fff]/[0.12] border-b-[4px] border-[#4f8fff]/25 rounded-[12px] p-5 sm:p-[32px] flex flex-col gap-[18px]">
            <h3 className="text-[#0a0a1a] text-lg sm:text-xl md:text-[22px] font-semibold mb-2 sm:mb-4 tracking-tight">Medical Family Advisory Can Help With</h3>
            <div className="flex flex-col w-full">
              {HELP_WITH.map((text, i) => (
                <div key={i} className="flex items-center justify-between py-3 sm:py-4 border-b border-[#0a0a1a]/10 last:border-0">
                  <span className="text-[#262626] text-xs sm:text-sm pr-4 font-medium">{text}</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#444] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="flex-1 bg-[#ff5e4f]/[0.12] border-b-[4px] border-[#ff5e4f]/25 rounded-[12px] p-5 sm:p-[32px] flex flex-col gap-[18px]">
            <h3 className="text-[#0a0a1a] text-lg sm:text-xl md:text-[22px] font-semibold mb-2 sm:mb-4 tracking-tight">Medical Family Advisory Does Not Include</h3>
            <div className="flex flex-col w-full">
              {NOT_INCLUDE.map((text, i) => (
                <div key={i} className="flex items-center justify-between py-3 sm:py-4 border-b border-[#0a0a1a]/10 last:border-0">
                  <span className="text-[#262626] text-xs sm:text-sm pr-4 font-medium">{text}</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#444] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Button */}
        <div className="relative z-10 mt-[10px]">
          <PrimaryButton>Book a Physician Advisor Today</PrimaryButton>
        </div>

      </div>
    </section>
  );
}
