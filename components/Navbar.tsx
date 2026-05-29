"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "FAQ", href: "/#faq" },
    { label: "Become An Expert", href: "https://www.doctors.conzultos.com/", external: true },
    { label: "Contact Us", href: "/#cta" },
  ];

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav className="relative z-50 w-full pt-4">
        <div className="max-w-[1320px] mx-auto px-6 h-[70px] flex items-center justify-between">
          <Link href="/" className="cursor-pointer shrink-0">
            <Image src="/logo.svg" alt="Conzultos" height={45} width={180} style={{ height: "45px", width: "auto" }} />
          </Link>
          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`text-white text-sm hover:text-[#4f8fff] transition-colors ${l.label === "Become An Expert" ? "font-semibold underline decoration-solid underline-offset-4" : "font-normal"
                  }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://app.conzultos.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center w-[125px] h-[47px] py-[14px] px-[36px] gap-3 text-white font-semibold text-sm rounded-[60px] border border-white/30 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-200 shrink-0 whitespace-nowrap justify-center backdrop-blur-lg border border-white/20"
              style={{ background: "rgba(0,0,0,0.004)" }}
            >
              Sign in
            </a>
          </div>
          {/* Mobile hamburger button */}
          <button
            className="lg:hidden relative z-[60] text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-90 transition-all duration-200 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              {/* Top bar */}
              <span
                className="block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] origin-center"
                style={{
                  transform: menuOpen ? "translateY(9px) rotate(45deg)" : "translateY(0) rotate(0)",
                }}
              />
              {/* Middle bar */}
              <span
                className="block h-[2px] w-6 bg-white rounded-full transition-all duration-200 ease-in-out"
                style={{
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
                }}
              />
              {/* Bottom bar */}
              <span
                className="block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] origin-center"
                style={{
                  transform: menuOpen ? "translateY(-9px) rotate(-45deg)" : "translateY(0) rotate(0)",
                }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className="lg:hidden fixed inset-0 z-[55] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
        style={{
          pointerEvents: menuOpen ? "auto" : "none",
          visibility: menuOpen ? "visible" : "hidden",
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: "linear-gradient(165deg, rgba(6, 8, 24, 0.98) 0%, rgba(10, 10, 26, 0.99) 50%, rgba(4, 6, 18, 0.98) 100%)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            opacity: menuOpen ? 1 : 0,
          }}
          onClick={closeMenu}
        />

        {/* Menu content */}
        <div
          className="relative h-full flex flex-col justify-center px-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{
            transform: menuOpen ? "translateY(0)" : "translateY(30px)",
            opacity: menuOpen ? 1 : 0,
          }}
        >
          {/* Decorative glow */}
          <div
            className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(79, 143, 255, 0.08) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Navigation links */}
          <div className="flex flex-col gap-1">
            {links.map((l, i) => (
              <Link
                key={l.label}
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={closeMenu}
                className="group relative py-4 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{
                  transform: menuOpen ? "translateX(0)" : "translateX(-40px)",
                  opacity: menuOpen ? 1 : 0,
                  transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[28px] sm:text-[32px] font-medium tracking-[-0.02em] transition-colors duration-300 ${l.label === "Become An Expert" ? "text-[#4f8fff]" : "text-white/90 group-hover:text-white"}`}>
                    {l.label}
                  </span>
                  <svg
                    className="w-5 h-5 text-white/20 group-hover:text-[#4f8fff] group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                {/* Hover underline */}
                <div className="absolute bottom-2 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-[#4f8fff]/40 to-transparent transition-all duration-500" />
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div
            className="my-6 h-[1px] transition-all duration-700 ease-out"
            style={{
              background: "linear-gradient(90deg, rgba(79,143,255,0.3) 0%, rgba(255,255,255,0.05) 100%)",
              transform: menuOpen ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transitionDelay: menuOpen ? "450ms" : "0ms",
            }}
          />

          {/* Sign in button */}
          <div
            className="transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            style={{
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transitionDelay: menuOpen ? "500ms" : "0ms",
            }}
          >
            <a
              href="https://app.conzultos.com/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center justify-center h-[54px] px-10 text-white font-semibold text-base rounded-full border border-white/20 hover:border-[#4f8fff]/50 hover:bg-[#4f8fff]/10 hover:scale-[1.02] active:scale-95 transition-all duration-300 backdrop-blur-md"
              style={{
                background: "linear-gradient(135deg, rgba(79,143,255,0.1) 0%, rgba(79,143,255,0.02) 100%)",
                boxShadow: "0 0 30px rgba(79,143,255,0.05)",
              }}
            >
              Sign in
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Bottom branding */}
          <div
            className="absolute bottom-8 left-8 right-8 flex items-center justify-between transition-all duration-500"
            style={{
              opacity: menuOpen ? 0.4 : 0,
              transitionDelay: menuOpen ? "600ms" : "0ms",
            }}
          >
            <span className="text-xs text-white/50 tracking-widest uppercase">Conzultos</span>
            <span className="text-xs text-white/30">Medical Family Advisory</span>
          </div>
        </div>
      </div>
    </>
  );
}
