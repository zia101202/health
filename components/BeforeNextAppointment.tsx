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
          className="text-[#0a0a1a] text-[32px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold font-hanken leading-tight lg:leading-[60px] text-center w-full lg:w-[956px] mx-auto"
          style={{ letterSpacing: '-4%' }}
        >
          Before your next major medical decision, get helped from a{" "}
          <span className="text-[#3260ec]">physician advisor</span>
        </h2>

        {/* Video Player */}
        <div className="relative w-full min-w-[300px] min-h-[170px] max-w-[1052px] aspect-[1052/445] lg:w-[1052px] lg:min-w-[1052px] lg:h-[445px] lg:min-h-[445px] lg:aspect-auto shrink-0 rounded-xl sm:rounded-3xl overflow-hidden bg-[#d0d7e5] shadow-inner group border border-transparent">
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


        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a href="https://app.conzultos.com/register-client?consultant=cmlhd2i150004ny01t2a6iabi" target="_blank" rel="noopener noreferrer" className="bg-[#3260ec] text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-[14px] rounded-[60px] hover:bg-[#2550d4] hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap shadow-sm cursor-pointer">
            Book a Physician Advisor Today
          </a>

        </div>
      </div>
    </section>
  );
}
