import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import AwardsSection from "./components/AwardsSection";
import CertificationSection from "./components/CertificationSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="mt-24">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ExperienceSection />
        <AwardsSection />
        <CertificationSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
