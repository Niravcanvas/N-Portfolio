import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Images from "../components/Images";
import Achievements from "../components/Achivements";
import { JsonLd } from "@/components/seo/JsonLd";
import { personLd, websiteLd } from "@/lib/seo";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <JsonLd data={personLd()} />
      <JsonLd data={websiteLd()} />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Images />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}