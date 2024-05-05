import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyProjects from "../Projects";
import Certificate from "../Certificate";
import AboutMe from "../AboutMe";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <MyProjects />
      <Certificate />
      <AboutMe />
      <Footer />
    </>
  );
}
