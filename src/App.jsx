import Particles from "./Particles"
import Row from "./Row"
import Col from "./Col"
import Navbar from "./Navbar"
import Footer from "./Footer"

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
    <Footer /> 
          </>
  )
}
export default HeroSection
