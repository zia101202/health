export default function AnnouncementBar() {
  return (
    <div className="bg-[#4F8FFF1F] min-h-[46px] w-full border-b-[4px] border-white/50 text-[#0a0a1a] text-xs sm:text-sm px-4 py-2 sm:py-0 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
      <span className="text-center leading-snug">Get physician guidance for your family's medical questions — by paid hourly video call.</span>
      <a href="https://app.conzultos.com/register-client?consultant=cmlhd2i150004ny01t2a6iabi" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#3260ec] flex items-center gap-1 underline underline-offset-2 hover:opacity-80 whitespace-nowrap">
        Book a Physician Advisory Call
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
