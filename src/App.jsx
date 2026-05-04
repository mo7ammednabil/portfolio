import CustomCursor from "./components/CustomCursor";
import StarField from "./components/StarField";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function App() {
  return (
    <>
      {/* Grain */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Animated star background — fixed, below everything */}
      <StarField />

      {/* Custom cursor (desktop only) */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <Navbar />

      {/* All sections sit on top of the fixed StarField */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />

        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
