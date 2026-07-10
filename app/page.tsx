import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import About from "@/components/sections/About";
import FeatureGrid from "@/components/sections/FeatureGrid";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ProjectsGrid />
      <About />
      <FeatureGrid />
      <Testimonials />
      <Contact />
    </>
  );
}
