"use client";

import { useState, useRef } from "react";

export default function BeforeNextAppointment() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6">
      <div className="w-full lg:max-w-[1261px] mx-auto bg-[#f4f6fb] rounded-[20px] sm:rounded-[30px] py-8 sm:py-[40px] lg:py-[60px] px-4 sm:px-6 lg:px-[80px] flex flex-col items-center gap-6 sm:gap-[40px]">
        {/* Title */}
        <h2 
          className="text-[#0a0a1a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold font-hanken leading-tight lg:leading-[60px] text-center w-full lg:w-[876px] mx-auto"
          style={{ letterSpacing: '-4%' }}
        >
          Before the next appointment, get organized with a{" "}
          <span className="text-[#3260ec]">physician advisor</span>
        </h2>

        {/* Video Player */}
        <div className="relative max-w-[1052px] w-full aspect-[1052/445] rounded-xl sm:rounded-3xl overflow-hidden bg-[#d0d7e5] shadow-inner group">
          <video
            ref={videoRef}
            src="https://assets.mixkit.co/videos/preview/mixkit-doctor-working-on-his-computer-at-the-clinic-40810-large.mp4"
            className="w-full h-full object-cover"
            controls={isPlaying}
            playsInline
            loop
          />
          
          {/* Custom Play Overlay */}
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors group cursor-pointer"
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white/25 hover:bg-white/35 backdrop-blur-sm rounded-full flex items-center justify-center transition-all transform hover:scale-105">
                <svg
                  className="w-7 h-7 sm:w-10 sm:h-10 text-white translate-x-[2px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
        </div>

        {/* Descriptive Text */}
        <p 
          className="text-[#444] font-hanken font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[32px] text-center max-w-[950px] px-2"
          style={{ letterSpacing: '-1%' }}
        >
          When families feel rushed, confused, or unsure what to ask, a Conzultos advisory session can help create
          structure. You can use your session to organize concerns, better understand general medical language, and
          prepare for a more productive conversation with your treating medical team. You do not need to navigate
          complex medical information alone. Conzultos gives your family access to physician insight in a format
          built for clarity, preparation, and informed discussion.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button className="bg-[#3260ec] text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-[14px] rounded-[60px] hover:bg-[#2550d4] transition-colors whitespace-nowrap shadow-sm">
            Book a Physician Advisor Today
          </button>
          <button className="bg-transparent border border-black/40 text-black font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-[14px] rounded-[60px] hover:bg-black/5 transition-colors whitespace-nowrap">
            See Available Doctors
          </button>
        </div>
      </div>
    </section>
  );
}
