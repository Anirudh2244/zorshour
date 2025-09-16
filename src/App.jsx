"use client";
import React, { useState, useEffect } from "react";
import Row from "./Row"
import Col from "./Col"
import Navbar from "./Navbar"
import Footer from "./Footer"
import LogoLoop from './LogoLoop';
import AboutUs from "./AboutUs"
import HorizontalScroll from "./HorizontalScroll"
import HeroSection from "./HeroSection"
import PhilosophySection from "./PhilosophySection";
import QueryForm from "./QueryForm";
import CosmicTrajectory from "./CosmicTrajectory";
import CircularText from "./CircularText";



const imageLogos = [
  { src: "https://ik.imagekit.io/adsrc2244/Zorshour/eureka.png?updatedAt=1757933147240", alt: "Company 2", href: "" },
  { src: "https://ik.imagekit.io/adsrc2244/Zorshour/foxtale.png?updatedAt=1757933147149", alt: "Company 3", href: "" },
  { src: "https://ik.imagekit.io/adsrc2244/Zorshour/genetic-nutritions.png?updatedAt=1757933147120", alt: "Company 2", href: "" },
  { src: "https://ik.imagekit.io/adsrc2244/Zorshour/tac.png?updatedAt=1757933147038", alt: "Company 3", href: "" },
  { src: "https://ik.imagekit.io/adsrc2244/Zorshour/good-bug.png?updatedAt=1757933147044", alt: "iLife", href: "" },
  { src: "https://ik.imagekit.io/adsrc2244/Zorshour/my-muse.png?updatedAt=1757933146957", alt: "My Muse", href: "" },
  { src: "https://ik.imagekit.io/adsrc2244/Zorshour/ilife.png?updatedAt=1757933146720", alt: "Genetic Nutritions", href: "" },

];

function App() {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowHero(window.scrollY < window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white font-inter">
      <Navbar />

      <div style={{ visibility: showHero ? 'visible' : 'hidden' }}>
        <HeroSection />
      </div>

      <Col>
        <AboutUs />
      </Col>

      <Col center={true} className={"py-10 border-b border-white/10"}>
        <LogoLoop
          logos={imageLogos}
          speed={50}
          direction="left"
          logoHeight={40}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </Col>

      <Col>
        <PhilosophySection
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={true}
          spotlightRadius={500}
          particleCount={20}
          glowColor="251, 146, 60"
        />
      </Col>

      <HorizontalScroll />

      <CosmicTrajectory />

      <QueryForm />

      <Footer />
    </div>
  )
}

export default App