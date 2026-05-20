"use client";

import { useRef } from "react";

const TEAM_MEMBERS = [
  {
    name: "Dr. Cheri Ogwo, MD",
    title: "Founder & Chief Medical Officer",
    image: "/a1.png",
    bullets: [
      "15 years at Mayo Clinic Endocrinology",
      'Personal mission: "No patient should ever feel abandoned with diabetes"',
    ],
  },
  {
    name: "Dr. Mariam Boutte, MD",
    title: "Dietitian",
    image: "/a3.png",
    bullets: [
      "10 years in Dietetics and Nutrition",
      'Personal mission: "Empowering families to build healthy, sustainable nutrition habits."',
    ],
  },
  {
    name: "Dr. James Carter, MD",
    title: "Pediatrician",
    image: "/a4.png",
    bullets: [
      "12 years at Boston Children's Hospital",
      'Personal mission: "Providing children and families with compassionate medical guidance."',
    ],
  },
  {
    name: "Dr. Sarah Jenkins, MD",
    title: "Cardiologist",
    image: "/a5.png",
    bullets: [
      "14 years at Cleveland Clinic Cardiology",
      'Personal mission: "Empowering patients to achieve optimal heart and lifestyle health."',
    ],
  },
];

export default function AdvisoryTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 280 + 24; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-8 sm:gap-10 relative">
        {/* Title & Navigation */}
        <div className="flex justify-center flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <h2
            className="text-[#0a0a1a] text-2xl sm:text-3xl md:text-4xl lg:text-[55px] text-center md:text-left font-semibold font-hanken leading-tight lg:leading-[60px] w-full md:w-[458px] mx-auto md:mx-0"
            style={{ letterSpacing: '-5%' }}
          >
            Meet your <span className="text-[#3260ec]">medical advisory</span> team
          </h2>

          {/* Navigation arrows for desktop */}

        </div>

        {/* Carousel Viewport */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-1 sm:px-2 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TEAM_MEMBERS.map(({ name, title, image, bullets }) => (
              <div
                key={name}
                className="w-[240px] sm:w-[280px] md:w-[315px] shrink-0 snap-start flex flex-col gap-4 sm:gap-5"
              >
                {/* Image */}
                <div className="w-full aspect-[315/353] rounded-[12px] sm:rounded-[16px] overflow-hidden bg-gray-50 relative shadow-sm">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover select-none"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-base sm:text-lg text-[#0a0a1a] tracking-tight">{name}</p>
                  <p className="text-[#666] text-xs sm:text-sm font-medium">{title}</p>

                  <ul className="flex flex-col gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                    {bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2 text-xs sm:text-sm text-[#444] leading-relaxed">
                        <span className="text-black/30 text-[8px] mt-[6px] shrink-0">■</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black/10 hover:border-black/20 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a0a1a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black/10 hover:border-black/20 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a0a1a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-4 sm:mt-6">
          <button className="bg-[#3260ec] text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-[14px] rounded-[60px] hover:bg-[#2550d4] transition-colors whitespace-nowrap shadow-sm">
            Book a Physician Advisor Today
          </button>
        </div>
      </div>
    </section>
  );
}
