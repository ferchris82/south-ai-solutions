import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CasosExitoSection from "@/components/CasosExitoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
// import ElevenLabsWidget from "@/components/ElevenLabsWidget"; // Descomenta si quieres usar el componente React
import ElevenLabsBrandingRemover from "@/components/ElevenLabsBrandingRemover";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CasosExitoSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      {/* <ElevenLabsWidget agentId="agent_5601k1v22vm3f6aa3wvk24tb6ww2" /> */}
      <ElevenLabsBrandingRemover />
    </div>
  );
};

export default Index;
