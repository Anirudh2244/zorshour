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
  { src: "https://ik.imagekit.io/adsrc2244/Zorshour/logo_Generated_Image_4sh9s64sh9s64sh9-removebg-preview.png?updatedAt=1756211420775", alt: "Company 1", href: "https://company1.com" },
  { src: "https://ik.imagekit.io/adsrc2244/Zorshour/logo_Generated_Image_h9dhtoh9dhtoh9dh-removebg-preview.png?updatedAt=1756211420711", alt: "Company 2", href: "https://company2.com" },
  { src: "https://ik.imagekit.io/adsrc2244/Zorshour/logo_Generated_Image_w52cx4w52cx4w52c-removebg-preview.png?updatedAt=1756211420588", alt: "Company 3", href: "https://company3.com" },
];

function App() {
  return (
    <div className="bg-black text-white font-inter">
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      {/* <Col>
        <AboutUs />
      </Col> */}
      <Col center={true} className={""}>
        {/* <p>Trusted By:</p> */}
        <LogoLoop
          logos={imageLogos}
          speed={50}
          direction="left"
          logoHeight={75}
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
          spotlightRadius={400}
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