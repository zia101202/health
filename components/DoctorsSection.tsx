"use client";

import { useRef } from "react";
import Image from "next/image";
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
    <div className="w-[240px] sm:w-[280px] md:w-[315px] shrink-0 snap-start flex flex-col gap-3 sm:gap-4">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden select-none">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 315px"
        />
      </div>
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 280 + 24;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20 px-4 sm:px-6 md:px-[60px] overflow-hidden">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-8 sm:gap-14 relative">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3 sm:gap-4">
          <h2
            className="text-[#0a0a1a] text-[31px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold font-hanken leading-tight lg:leading-[60px] text-center mx-auto"
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

        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-1 sm:px-2 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {DOCTORS.map((doc) => (
              <DoctorCard key={doc.name} {...doc} />
            ))}
          </div>
        </div>

        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black/10 hover:border-black/20 bg-white flex items-center justify-center hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm cursor-pointer"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a0a1a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black/10 hover:border-black/20 bg-white flex items-center justify-center hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm cursor-pointer"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a0a1a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center">
          <a href="https://app.conzultos.com/register-client?consultant=cmlhd2i150004ny01t2a6iabi" target="_blank" rel="noopener noreferrer">
            <PrimaryButton>Book a Physician Advisor Today</PrimaryButton>
          </a>
        </div>
      </div>
    </section>
  );
}
