
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import PrivateCallSection from "@/components/PrivateCallSection";
import WhoWeServe from "@/components/WhoWeServe";
import WhenToUse from "@/components/WhenToUse";
import HowItWorks from "@/components/HowItWorks";
import DoctorsSection from "@/components/DoctorsSection";
import ReviewDoctorsSection from "@/components/ReviewDoctorsSection";
import AdvisoryTeam from "@/components/AdvisoryTeam";
import WhyConzultos from "@/components/WhyConzultos";
import DisclaimerSection from "@/components/DisclaimerSection";
import BeforeNextAppointment from "@/components/BeforeNextAppointment";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function ConzultosMedical() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <AnnouncementBar />
      <HeroSection />
      <MissionSection />
      <PrivateCallSection />
      <WhoWeServe />
      <WhenToUse />
      <HowItWorks />
      <ReviewDoctorsSection />


      <AdvisoryTeam />
      <DoctorsSection />
      <WhyConzultos />
      <DisclaimerSection />
      <BeforeNextAppointment />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
