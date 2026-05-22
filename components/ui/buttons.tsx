import React from "react";

export function PrimaryButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`bg-[#3260ec] text-white font-semibold text-sm sm:text-base px-6 sm:px-10 py-3 sm:py-[14px] rounded-[60px] hover:bg-[#2550d4] hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap shadow-sm cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`bg-white/10 backdrop-blur-md text-white font-semibold text-sm sm:text-base rounded-[66px] hover:bg-white/25 hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap border border-white/30 flex items-center justify-center gap-[12px] h-[48px] sm:h-[56px] px-6 sm:px-10 py-3 sm:py-[14px] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export function OutlineButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`border border-white text-white font-semibold text-sm sm:text-base px-5 sm:px-7 py-3 sm:py-[14px] rounded-[60px] hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
