"use client";

import { useState } from "react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About Us", "Services", "FAQ", "Become an Expert", "Contact Us"];
  return (
    <nav className="relative z-50 w-full pt-4">
      <div className="max-w-[1320px] mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Conzultos" className="h-[45px] w-auto" />
        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className={`text-white text-sm hover:text-[#4f8fff] transition-colors ${l === "Become an Expert" ? "font-semibold underline decoration-solid underline-offset-4" : "font-normal"
                }`}
            >
              {l}
            </a>
          ))}
          <button
            className="text-white font-semibold text-sm rounded-[60px] border border-white/30 bg-white/5 backdrop-blur-md hover:bg-white/25 transition-colors flex items-center justify-center gap-[12px]"
            style={{ width: '125px', height: '47px', paddingTop: '14px', paddingBottom: '14px', paddingLeft: '36px', paddingRight: '36px' }}
          >
            Sign in
          </button>
        </div>
        {/* Mobile hamburger */}
        <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-[#0a0a1a] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href="#" className="text-white text-sm hover:text-[#4f8fff] transition-colors">
              {l}
            </a>
          ))}
          <button
            className="text-white font-semibold text-sm rounded-[60px] border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/25 transition-colors flex items-center justify-center gap-[12px] w-fit"
            style={{ height: '47px', paddingTop: '14px', paddingBottom: '14px', paddingLeft: '36px', paddingRight: '36px' }}
          >
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
}
