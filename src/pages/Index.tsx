import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FounderCard from "@/components/FounderCard";
import ProjectGallery from "@/components/ProjectGallery";
import SecuritySection from "@/components/SecuritySection";
import ContactFooter from "@/components/ContactFooter";
import VortexBackground from "@/components/VortexBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <VortexBackground />
      <Header />
      <HeroSection />
      <FounderCard />
      <ProjectGallery />
      <SecuritySection />
      <ContactFooter />
    </div>
  );
};

export default Index;
