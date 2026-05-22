"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About Us", "Services", "FAQ", "Become an Expert", "Contact Us"];
  return (
    <nav className="relative z-50 w-full pt-4">
      <div className="max-w-[1320px] mx-auto px-6 h-[70px] flex items-center justify-between">
        <Link href="/" className="cursor-pointer shrink-0">
          <Image src="/logo.png" alt="Conzultos" height={45} width={180} style={{ height: "45px", width: "auto" }} />
        </Link>
        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l}
              href={l === "Home" ? "/" : l === "Services" ? "/#services" : l === "FAQ" ? "/#faq" : l === "About Us" ? "/#about" : l === "Contact Us" ? "/#cta" : l === "Become an Expert" ? "https://www.doctors.conzultos.com/" : "/"}
              {...(l === "Become an Expert" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`text-white text-sm hover:text-[#4f8fff] transition-colors ${l === "Become an Expert" ? "font-semibold underline decoration-solid underline-offset-4" : "font-normal"
                }`}
            >
              {l}
            </Link>
          ))}
          <a
            href="https://app.conzultos.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto h-[47px] py-[14px] px-6 gap-3 text-white bg-white/10 backdrop-blur-md font-semibold text-sm rounded-[60px] border border-white/30 hover:bg-white/25 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center shrink-0"
          >
            Sign in
          </a>
        </div>
        {/* Mobile hamburger */}
        <button className="lg:hidden text-white hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
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
            <Link
              key={l}
              href={l === "Home" ? "/" : l === "Services" ? "/#services" : l === "FAQ" ? "/#faq" : l === "About Us" ? "/#about" : l === "Contact Us" ? "/#cta" : l === "Become an Expert" ? "https://www.doctors.conzultos.com/" : "/"}
              {...(l === "Become an Expert" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-white text-sm hover:text-[#4f8fff] transition-colors"
            >
              {l}
            </Link>
          ))}
          <a
            href="https://app.conzultos.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto h-[47px] py-[14px] px-6 gap-3 text-white bg-white/10 backdrop-blur-md font-semibold text-sm rounded-[60px] border border-white/30 hover:bg-white/25 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center shrink-0"
          >
            Sign in
          </a>
        </div>
      )}
    </nav>
  );
}
