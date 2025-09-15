import Row from "./Row"
import Col from "./Col"
import Navbar from "./Navbar"
import Footer from "./Footer"
import LogoLoop from './LogoLoop';
import AboutUs from "./AboutUs"
import HorizontalScroll from "./HorizontalScroll"
import { appendErrors } from "react-hook-form"
import AboutUsSection from "./AboutUsSection"
import HeroSection from "./HeroSection"
import ShimmerBorder from "./ShimmerBorder";
import PhilosophySection from "./PhilosophySection";
import QueryForm from "./QueryForm";
import HowWeDoIt from "./HowWeDoIt";



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
  return (
    <div className="bg-black text-white font-inter">
      <Navbar />
      <HeroSection />
      {/* <AboutUsSection /> */}
      <Col>
        <AboutUs />
      </Col>
      <Col center={true} className={"py-12 border-b border-white/10"}>
        {/* <p>Trusted By:</p> */}
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
      <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center my-12">Our Philosophy, <span className="text-orange-400">Our North Star</span></p>
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
      <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center my-12">Our <span className="text-orange-400">Services</span></p>
      <HorizontalScroll />

      <HowWeDoIt />
      <QueryForm />

      <Footer />
    </div>
  )
}
export default App