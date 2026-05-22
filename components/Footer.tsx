import Image from "next/image";
import Link from "next/link";
import { OutlineButton } from "./ui/buttons";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-4 sm:pb-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 sm:gap-14 lg:gap-24 xl:gap-32 pb-8 sm:pb-12 border-b border-white/10">
          {/* Brand — left */}
          <div className="flex flex-col gap-4 w-full sm:max-w-[280px] shrink-0">
            <Link href="/" className="cursor-pointer shrink-0">
              <Image src="/navlogo.png" alt="Conzultos" width={148} height={41} style={{ width: "147.5px", height: "41px" }} />
            </Link>
            <p className="text-white/70 sm:max-w-[280px] text-xs sm:text-sm leading-relaxed">
              Connecting people with trusted healthcare experts through simple, meaningful conversations.
            </p>
            <div className="flex gap-3">
              {[
                { src: "/facebook.png", url: "https://www.facebook.com/Conzultos?mibextid=wwXIfr&rdid=GzyOSNMedPaLtMgk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1N9zJne937%2F%3Fmibextid%3DwwXIfr#" },
                { src: "/tiktok.png", url: "https://www.tiktok.com/@conzultos?_r=1&_t=ZP-959SCHXLgTf" },
                { src: "/instagram.png", url: "https://www.instagram.com/conzultos.health?igsh=MTQ0am0zMjh4dmhsZg%3D%3D&utm_source=qr" },
                { src: "/youtube.png", url: "https://www.youtube.com/@conzultos" }
              ].map(({ src, url }, i) => (
                <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80 hover:scale-110 active:scale-95 transition-all duration-200">
                  <Image src={src} alt="" width={24} height={24} className="w-full h-full object-contain" />
                </a>
              ))}
            </div>
            <a href="https://www.doctors.conzultos.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-fit">
              <OutlineButton className="w-full sm:w-fit">Become an Expert</OutlineButton>
            </a>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 lg:flex gap-12 sm:gap-20 lg:gap-36 xl:gap-48">
            {/* Quick Links */}
            <div className="flex flex-col gap-4 min-w-[120px]">
              <p className="font-bold text-base sm:text-lg">Quick Links</p>
              {["Home", "About Us", "Services", "FAQ's"].map((l) => (
                <Link key={l} href={l === "Home" ? "/" : l === "Services" ? "/#services" : l === "FAQ's" ? "/#faq" : l === "About Us" ? "/#about" : "/"} className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors">
                  {l}
                </Link>
              ))}
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4 min-w-[120px]">
              <p className="font-bold text-base sm:text-lg">Legal</p>
              <Link href="/terms" className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors">
                Terms of Use & Privacy Policy
              </Link>
              <Link href="/waiver" className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors">
                Waiver of Liability
              </Link>
            </div>

            {/* Get in touch */}
            <div className="flex flex-col gap-4 min-w-[120px] col-span-2 lg:col-span-1">
              <p className="font-bold text-base sm:text-lg">Get in touch</p>
              <div className="flex flex-col gap-4">
                <Link href="/#cta" className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors">
                  Contact Us
                </Link>
                <a href="mailto:support@conzultos.com" className="flex items-center gap-3 text-white/70 text-xs sm:text-sm hover:text-white transition-colors cursor-pointer">
                  <Image src="/emails.png" alt="Email" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0" />
                  <span>support@conzultos.com</span>
                </a>
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
