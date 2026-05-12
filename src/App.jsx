import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import CursorGlow from "./components/CursorGlow";
import CustomCursor from "./components/CustomCursor";
import PreLoader from "./components/PreLoader";
import Github from "./assets/components/Github";
import Timeline from "./assets/components/Timeline";
import Auth from "./components/Auth";
import WhyHireMe from "./components/WhyHireMe";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 700);
    return () => clearTimeout(timer);
  }, []);

  // Scroll Reveal
  useEffect(() => {
    ScrollReveal().reveal(
      ".hero, .about, .projects, .skills, .contact, .footer",
      {
        distance: "60px",
        duration: 1200,
        easing: "ease",
        interval: 200,
        origin: "bottom",
      }
    );
  }, []);
  useEffect(() => {
  const elements = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}, []);

  return (
    <>
      {!loaded && (
        <div className="loader-screen">
          <h1 className="loader-logo">KOWSHIK</h1>
          <p className="loader-text">Loading Portfolio...</p>
        </div>
      )}

      <div className={loaded ? "page-show" : "page-hide"}>
        <PreLoader />
        <CustomCursor />
        <Navbar onLoginClick={() => setShowAuth(true)} />

        <Hero />
        <About />
        <Projects />
        <WhyHireMe />
        <Timeline />
        <Skills />
        <Github />
        <Contact />
        <Footer />
        <BackToTop />
        <CursorGlow />
      </div>

      {/* ✅ Auth Modal */}
      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </>
  );
}

export default App;