import Particles from "./Particles"
import Row from "./Row"
import Col from "./Col"
import Navbar from "./Navbar"
import Footer from "./Footer"

import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import AboutUs from "./AboutUs"
import StepsSection from "./StepsSection"
import HorizontalScroll from "./HorizontalScroll"
import { appendErrors } from "react-hook-form"
import AboutUsSection from "./AboutUsSection"








const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "https://ik.imagekit.io/adsrc2244/Zorshour/logo_Generated_Image_4sh9s64sh9s64sh9-removebg-preview.png?updatedAt=1756211420775", alt: "Company 1", href: "https://company1.com" },
  { src: "https://ik.imagekit.io/adsrc2244/Zorshour/logo_Generated_Image_h9dhtoh9dhtoh9dh-removebg-preview.png?updatedAt=1756211420711", alt: "Company 2", href: "https://company2.com" },
  { src: "https://ik.imagekit.io/adsrc2244/Zorshour/logo_Generated_Image_w52cx4w52cx4w52c-removebg-preview.png?updatedAt=1756211420588", alt: "Company 3", href: "https://company3.com" },
];

function App() {
  return (
    <div className="bg-black text-white font-inter">
    <Navbar className=""/>

    <Col className="w-full h-[100vh] relative overflow-hidden bg-gray-950" center={true}>
  {/* Background particles */}
  <div className="absolute top-0 left-0 w-full h-full z-0">
    <Particles
      className="w-full h-full"
      particleColors={['#B7410E', '#e5e7eb']}
      particleCount={150}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={80}
      moveParticlesOnHover={true}
      alphaParticles={true}
      disableRotation={false}
    />
  </div>

  {/* Content container */}
  <Col className="relative z-10 w-full h-full justify-center items-center text-center px-4">
    <div className="max-w-4xl mx-auto pointer-events-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4
                 text-white drop-shadow-md">
        Your North Star for Digital Marketing
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
        Navigate the digital universe with 
        <span className="text-[#e3b071] font-bold animate-subtle-pulse-glow text-xl md:text-2xl"> the strategies that illuminate your path</span> to real, sustainable growth.
      </p>
      <div className="mt-8">
        <button className="bg-white text-gray-950 font-semibold py-3 px-8 rounded-full shadow-lg.
                           hover:bg-[#B7410E] hover:text-white transition-all duration-300 transform hover:scale-105">
          Explore Our Solutions
        </button>
      </div>
    </div>
  </Col>
</Col>


   <AboutUsSection />
   
        
        <Col>
        <AboutUs />
        
        </Col>

        <Col center={true} className={"mt-15"}>

<p>Trusted By:</p>
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


        <Col className="px-20 mt-10">
        <p className="text-3xl mb-10 text-center">How we do it?</p>
  <div className="w-full overflow-hidden">
    <StepsSection />
  </div>
</Col>

    <Footer /> 
          </div>
  )
}
export default App
