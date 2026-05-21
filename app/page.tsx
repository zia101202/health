
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";

import PrivateCallSection from "@/components/PrivateCallSection";
import WhoWeServe from "@/components/WhoWeServe";

import HowItWorks from "@/components/HowItWorks";
import DoctorsSection from "@/components/DoctorsSection";
import ReviewDoctorsSection from "@/components/ReviewDoctorsSection";



import BeforeNextAppointment from "@/components/BeforeNextAppointment";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function ConzultosMedical() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <AnnouncementBar />
      <HeroSection />
      <HowItWorks />
      <PrivateCallSection />
      <WhoWeServe />
 
      
      <ReviewDoctorsSection />


      
      <DoctorsSection />

    
      <BeforeNextAppointment />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
