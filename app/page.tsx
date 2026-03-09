import AboutMe from "@/components/Sections/AboutMe";
import Dots from "@/components/Dots/Dots";
import Footer from "@/components/Sections/Footer";
import Hero from "@/components/Sections/Hero";
import { FloatingNav } from "@/components/Sections/Nav";
import RecentProjects from "@/components/Sections/Projects";

export default function Home() {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="">
      <FloatingNav navItems={navItems} />
      <Dots>
        <Hero />
      </Dots>
      <AboutMe />
      <RecentProjects />
      <Footer />
    </div>
  );
}
