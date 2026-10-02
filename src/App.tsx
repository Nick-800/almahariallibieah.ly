import { useState, useEffect } from "react";
import { HomaProvider } from "@/components/providers/HomaProvider";
import { ToastProvider } from "@/components/providers/ToastProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesBento from "@/components/ServicesBento";
import LogisticsTimeline from "@/components/LogisticsTimeline";
import WorkflowSection from "@/components/WorkflowSection";
import InquiryBuilder from "@/components/InquiryBuilder";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";
import { NavRail } from "@/components/navigation/NavRail";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "logistics", "workflow", "inquiry", "contact"];
      const scrollPosition = window.scrollY + 300;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HomaProvider defaultDirection="rtl" defaultLocale="ar" defaultTheme="dark">
      <ToastProvider>
        <div className="min-h-screen bg-[#1F1F1F] text-[#F2F2F2] selection:bg-[#D3D3D3]/25 selection:text-white relative">
          <Navbar />
          <Hero />
          <ServicesBento />
          <LogisticsTimeline />
          <WorkflowSection />
          <InquiryBuilder />
          <LocationContact />
          <Footer />
          <NavRail activeId={activeSection} onSelect={setActiveSection} />
        </div>
      </ToastProvider>
    </HomaProvider>
  );
}
