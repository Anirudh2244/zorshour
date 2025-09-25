"use client";
import React, { useState } from 'react';
import Col from './Col';
import Particles from './Particles';
import ShimmerBorder from './ShimmerBorder';
import { motion } from "framer-motion";

// Easing function for smooth scrolling
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const smoothScrollTo = (targetY, duration = 1000, onComplete) => {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const time = timestamp - startTime;
    const progress = Math.min(time / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startY + diff * ease);

    if (time < duration) {
      requestAnimationFrame(step);
    } else {
      if (onComplete) onComplete();
    }
  };

  requestAnimationFrame(step);
};

export default function HeroSection() {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  // scroll to the "aboutus" section
  const handleScrollToAboutUs = () => {
    const element = document.getElementById("aboutus");
    if (element) {
      setIsAutoScrolling(true);
      const targetY = element.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(targetY, 1000, () => {
        setIsAutoScrolling(false);
      });
    }
  };

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
      {/* Content */}
      <Col className="relative z-10 w-full h-full justify-center items-center text-center px-4">
        {/* Animated content container */}
        <motion.div
          className="max-w-4xl mx-auto pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 drop-shadow-md"
          >
            <span
              className="font-extrabold text-white"
            >
              Your
            </span>{' '}
            <span
              className="font-extrabold relative inline-block tracking-wide animate-pulse-shimmer whitespace-nowrap"
              style={{
                backgroundImage: 'linear-gradient(to right, #fdba74, #fed7aa, #fdba74)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '0.5px #ffffff',
                textStroke: '0.5px #ffffff',
              }}
            >
              North Star
            </span>{' '}
            <span
              className="font-extrabold text-white"
            >
              for Digital Marketing
            </span>

          </h1>
          <p
            className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto"
          >
            Navigate the digital universe with
            <span className="text-orange-400 font-bold animate-subtle-pulse-glow text-xl md:text-2xl"> the strategies that illuminate your path</span> to real, sustainable growth.
          </p>

          <div className="mt-8 flex justify-center">
            <ShimmerBorder
              shimmerStyle="container"
              className="px-8 py-3 rounded-full flex justify-center items-center"
            >
              <button
                onClick={handleScrollToAboutUs}
                className=" text-lg cursor-pointer text-neutral-400"
              >
                Explore Our Solutions
              </button>
            </ShimmerBorder>
          </div>
        </motion.div>
      </Col>
    </Col>
  );
}
