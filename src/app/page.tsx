import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import StackSection from "@/components/StackSection";
import ProjectSection from "@/components/ProjectSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ScrollAnimations from "@/components/ScrollAnimations";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <CustomCursor />
      <ScrollAnimations />
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AboutMeSection />
      <SectionDivider />
      <StackSection />
      <SectionDivider />
      <ProjectSection />
      <SectionDivider />
      <EducationSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
