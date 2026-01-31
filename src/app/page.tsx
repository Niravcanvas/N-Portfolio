import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Images from "../components/Images";
import { GridScan } from "../components/Gridscan";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Images />
              <div className="absolute inset-0 z-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#333333"
          gridScale={0.1}
          scanColor="#838383"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}