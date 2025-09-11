import React from 'react'
import Col from './Col'
import Particles from './Particles'
import ShimmerBorder from './ShimmerBorder'

function HeroSection() {
  return (
    <Col className="w-full h-[100vh] relative overflow-hidden bg-gray-950" center={true}>
      {/* Background particles */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Particles
          className="w-full h-full"
          particleColors={['#B7410E', '#e5e7eb']}
          particleCount={1000}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <Col className="relative z-10 w-full h-full justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto pointer-events-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-white drop-shadow-md">
            Your{' '}
            <span
              className="font-extrabold relative inline-block bg-gradient-to-r from-neutral-200 via-white to-neutral-200 bg-clip-text text-transparent tracking-wide animate-north-star-shimmer"
            >
              North Star
            </span>{' '}
            for Digital Marketing
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Navigate the digital universe with
            <span className="text-orange-400 font-bold animate-subtle-pulse-glow text-xl md:text-2xl"> the strategies that illuminate your path</span> to real, sustainable growth.
          </p>

          <div className="mt-8">
            <ShimmerBorder shimmerStyle="container" className="px-8 py-3 rounded-full">
              <span className="text font-semibold text-lg">Explore Our Solutions</span>
            </ShimmerBorder>
          </div>
        </div>
      </Col>
    </Col>
  )
}

export default HeroSection