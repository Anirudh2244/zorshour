import Particles from "./Particles"
import Row from "./Row"
import Col from "./Col"
import Navbar from "./Navbar"
import Footer from "./Footer"
import AutoPlay from "./AutoPlay"
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];

function HeroSection() {
  return (
    <>
    <Navbar className=""/>
    <Col className="bg-black w-full h-[100vh] relative overflow-hidden" center={true}>
      {/* Background particles */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Particles
          className="w-full h-full z-0"
          particleColors={['#ffffff', '#ffffff']}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          />
      </div>
      
      {/*content */}
      <Col className="relative z-10 !w-4/5 h-full justify-center pointer-events-none" center>
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center pointer-events-auto">
          Your North Star for Digital Marketing and Growth
        </h1>
        <p className="text-white text-center pointer-events-auto">Navigate the digital universe with strategies that drive real growth.</p>
      </Col>
    </Col>
    <AutoPlay />
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
    <Footer /> 
          </>
  )
}
export default HeroSection
