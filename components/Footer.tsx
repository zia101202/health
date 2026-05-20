import { OutlineButton } from "./ui/buttons";
import { SOCIAL_FB, SOCIAL_TK, SOCIAL_IG, SOCIAL_YT, EMAIL_ICON } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-4 sm:pb-6">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-between pb-8 sm:pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-4 sm:gap-6 max-w-xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/navlogo.png" alt="Conzultos" style={{ width: '147.5px', height: '41px' }} />
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              Connecting people with trusted healthcare experts through simple, meaningful conversations.
            </p>
            <div className="flex gap-3">
              {["/facebook.png", "/tiktok.png", "/instagram.png", "/youtube.png"].map((src, i) => (
                <a key={i} href="#" className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-70 transition-opacity">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="w-full h-full object-contain" />
                </a>
              ))}
            </div>
            <OutlineButton>Become an Expert</OutlineButton>
          </div>

          {/* Links grid for mobile */}
          <div className="grid grid-cols-2 sm:flex sm:gap-12 lg:gap-16 gap-6">
            {/* Quick Links */}
            <div className="flex flex-col gap-3 sm:gap-5">
              <p className="font-bold text-base sm:text-lg">Quick Links</p>
              {["Home", "About Us", "Services", "FAQ's"].map((l) => (
                <a key={l} href="#" className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors">{l}</a>
              ))}
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3 sm:gap-5">
              <p className="font-bold text-base sm:text-lg">Legal</p>
              {["Contact Us", "Terms & Conditions"].map((l) => (
                <a key={l} href="#" className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors">{l}</a>
              ))}
            </div>

            {/* Get in touch */}
            <div className="flex flex-col gap-3 sm:gap-5 col-span-2 sm:col-span-1">
              <p className="font-bold text-base sm:text-lg">Get in touch</p>
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="flex items-center gap-3 text-white/70 text-xs sm:text-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/location.png" alt="Location" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                  <span>Houston, Texas</span>
                </div>
                {/* <div className="flex items-center gap-3 text-white/70 text-xs sm:text-sm">

                  <img src={EMAIL_ICON} alt="Email" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                  <span>example@gmail.com</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-white/50 text-[10px] sm:text-sm py-4 sm:py-6">
          © CONZULTOS 2026. ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
