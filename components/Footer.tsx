import { OutlineButton } from "./ui/buttons";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-4 sm:pb-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 sm:gap-14 lg:gap-24 xl:gap-32 pb-8 sm:pb-12 border-b border-white/10">
          {/* Brand — left */}
          <div className="flex flex-col gap-4 w-full sm:max-w-[280px] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/navlogo.png" alt="Conzultos" style={{ width: "147.5px", height: "41px" }} />
            <p className="text-white/70 sm:max-w-[280px] text-xs sm:text-sm leading-relaxed">
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
            <OutlineButton className="w-full sm:w-fit">Become an Expert</OutlineButton>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 lg:flex gap-12 sm:gap-20 lg:gap-36 xl:gap-48">
            {/* Quick Links */}
            <div className="flex flex-col gap-4 min-w-[120px]">
              <p className="font-bold text-base sm:text-lg">Quick Links</p>
              {["Home", "About Us", "Services", "FAQ's"].map((l) => (
                <a key={l} href="#" className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors">
                  {l}
                </a>
              ))}
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4 min-w-[120px]">
              <p className="font-bold text-base sm:text-lg">Legal</p>
              {["Contact Us", "Terms & Conditions"].map((l) => (
                <a key={l} href="#" className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors">
                  {l}
                </a>
              ))}
            </div>

            {/* Get in touch */}
            <div className="flex flex-col gap-4 min-w-[120px] col-span-2 lg:col-span-1">
              <p className="font-bold text-base sm:text-lg">Get in touch</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-white/70 text-xs sm:text-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/location.png" alt="Location" className="w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0" />
                  <span>Houston, Texas</span>
                </div>
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
