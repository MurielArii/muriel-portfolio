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

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <CustomCursor />
      <ScrollAnimations />
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <StackSection />
      <ProjectSection />
      <EducationSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
