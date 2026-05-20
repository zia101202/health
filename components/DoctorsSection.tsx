import { PrimaryButton } from "./ui/buttons";

const DOCTORS = [
  {
    name: "Sergio E. Trevino, MD, MBA",
    specialty: "Pulmonary and Critical Care Medicine",
    image: "/expert/e1.png",
  },
  {
    name: "Timothy E. Hotze, MD",
    specialty: "Pulmonary and Critical Care Medicine",
    image: "/expert/e2.png",
  },
  {
    name: "Pavan Thangudu, MD",
    specialty: "Critical Care Medicine",
    image: "/expert/e3.png",
  },
  {
    name: "Tara Barto, MD",
    specialty: "Pulmonary and Critical Care Medicine",
    image: "/expert/e4.png",
  },
];

function DoctorCard({ name, specialty, image }: { name: string; specialty: string; image: string }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 flex-shrink-0 w-[220px] sm:w-[260px] md:w-auto">
      <img
        src={image}
        alt={name}
        className="w-full aspect-square rounded-2xl object-cover select-none"
      />
      <div>
        <h3
          className="text-[#0a0a1a] text-[18px] sm:text-[20px] md:text-[24px] font-semibold font-hanken leading-none mb-1"
          style={{ letterSpacing: '-3%' }}
        >
          {name}
        </h3>
        <p className="text-[#555] text-xs sm:text-sm leading-normal">{specialty}</p>
      </div>
    </div>
  );
}

export default function DoctorsSection() {
  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20 px-4 sm:px-6 md:px-[60px]">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-8 sm:gap-14">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3 sm:gap-4">
          <h2
            className="text-[#0a0a1a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold font-hanken leading-tight lg:leading-[60px] text-center mx-auto"
            style={{ letterSpacing: '-5%' }}
          >
            Connect With Top <br className="hidden sm:inline" />
            <span className="text-[#3260ec]">Healthcare</span> Experts
          </h2>
          <p
            className="text-[#444] font-['Inter',sans-serif] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[23px] sm:leading-[25px] text-center w-full md:w-[458px] mx-auto"
            style={{ letterSpacing: '0%' }}
          >
            Get non-clinical guidance and trusted insights through <br className="hidden md:block" />
            personalized consultations.
          </p>
        </div>
        <div className="flex md:grid md:grid-cols-4 gap-5 sm:gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide">
          {DOCTORS.map((doc) => (
            <DoctorCard key={doc.name} {...doc} />
          ))}
        </div>
        <div className="flex justify-center">
          <PrimaryButton>Book a Physician Advisor Today</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
