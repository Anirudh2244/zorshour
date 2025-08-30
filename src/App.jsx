import Row from "./Row"
import Col from "./Col"
import Navbar from "./Navbar"
import Footer from "./Footer"

import LogoLoop from './LogoLoop';
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import AboutUs from "./AboutUs"
import StepsSection from "./StepsSection"
import HorizontalScroll from "./HorizontalScroll"
import { appendErrors } from "react-hook-form"
import AboutUsSection from "./AboutUsSection"
import HeroSection from "./HeroSection"
import ShimmerBorder from "./ShimmerBorder";
import PhilosophySection from "./PhilosophySection";


// Alternative with image sources
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
     
        <Col>
        </Col>
       
  <p className="text-3xl text-center my-10">Our Services</p>
  <Col>
  <HorizontalScroll />
  </Col>
  {/* <ScrollStack>
    <ScrollStackItem itemClassName="bg-blue-500">
      <h2>Card 1</h2>
      <p>This is the first card in the stack</p>
    </ScrollStackItem>
    <ScrollStackItem itemClassName="bg-red-300">
      <h2>Card 2</h2>
      <p>This is the second card in the stack</p>
    </ScrollStackItem>
    <ScrollStackItem itemClassName="bg-gray-600">
      <h2>Card 3</h2>
      <p>This is the third card in the stack</p>
    </ScrollStackItem>
  </ScrollStack> */}


        {/* <Col className="px-20 mt-10">
        <p className="text-3xl mb-10 text-center">How we do it?</p>
  <div className="w-full overflow-hidden">
    <StepsSection />
  </div>
</Col> */}
<PhilosophySection />
    <Footer /> 
          </div>
  )
}
export default App
