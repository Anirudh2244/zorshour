import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Counter = ({ title, finalNumber, duration = 2 }) => {
  const [number, setNumber] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(
        (timestamp - startTime) / (duration * 1000),
        1
      );
      const easeOutQuad = (t) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      const current = Math.floor(
        start + (finalNumber - start) * easedProgress
      );
      setNumber(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, finalNumber, duration]);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 0.3 });
    }
  }, [isInView, controls]);

  // number formatter (removes trailing .0)
  const formatNumber = (num) => {
    if (num >= 1_000_000) {
      return `${(num / 1_000_000)
        .toFixed(1)
        .replace(/\.0$/, "")}M+`;
    }
    if (num >= 1_000) {
      return `${(num / 1_000)
        .toFixed(1)
        .replace(/\.0$/, "")}K+`;
    }
    return `${num}+`;
  };

  const formattedValue = formatNumber(number);

  // Handle hover animations
  const handleMouseEnter = () => {
    controls.start({ opacity: 0.8 });
  };
  const handleMouseLeave = () => {
    controls.start({ opacity: 0.3 });
  };

  return (
    <div
      ref={ref}
      className="relative group flex flex-col items-center p-6 rounded-xl border border-neutral-800 transition-all duration-300 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="absolute inset-0 z-0 rounded-xl transition-all duration-500"
        style={{
          background:
            "radial-gradient(circle at bottom, rgba(251, 146, 60, 0.4) 0%, rgba(17, 17, 17, 0) 90%)",
          backgroundSize: "200% 200%",
          animation: "gradient-pulse 3s ease-in-out infinite",
        }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h4 className="md:text-base font-medium mb-2 text-neutral-400 uppercase tracking-wide">
          {title}
        </h4>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-extrabold text-orange-400 transition-all duration-300"
        >
          {formattedValue}
        </motion.span>
      </div>
    </div>
  );
};

export default Counter;
