import React from "react";
import { motion } from "framer-motion";
import ShimmerBorder from "./ShimmerBorder";

const textStagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutUsSection = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1756370473190-4c41ddbd5e59?q=80&w=392&auto=format&fit=crop&ixlib=rb-4.1.0";

  return (
    <section className="relative pt-12 bg-black text-white overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* "About Us" Shimmer Tag */}
        <motion.div
          className="mb-8 inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={textStagger}
          custom={1}
        >
          <ShimmerBorder shimmerStyle="container" className="px-6 py-2 rounded-full">
            <span className="text text-sm font-semibold">About Us</span>
          </ShimmerBorder>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="text-3xl md:text-4xl md:text-5xl font-extrabold max-w-4xl leading-tight mb-12 md:mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={textStagger}
          custom={2}
        >

          Guided by creativity and powered by data, we help brands find their
          <span className="text-orange-400"> True North in Growth.</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
          {/* Left Image Section */}
          <motion.div
            className="w-full md:w-1/2 flex justify-start items-center h-[100px] md:min-h-[300px] relative pb-10 md:pb-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1.05 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* The Half-Circle */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] -ml-[100px] md:w-[300px] md:h-[300px] md:-ml-[150px] mt-20">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-zinc-900 to-orange-400 opacity-30"></div>
              {/* Image Circle */}
              <div
                className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-cover bg-center"
                style={{
                  left: "calc(50% + 80%)",
                  top: "calc(50% - 25%)",
                  transform: "translate(-50%, -50%)",
                  backgroundImage: `url(${imageUrl})`,
                }}
              ></div>
            </div>
            <div className="w-[100px] h-[100px] md:hidden"></div>
          </motion.div>

          {/* Right Text Section */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 text-xl text-gray-200 mt-24 z-10 md:mt-0 pr-4 md:pr-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={textStagger}
          >
            <motion.p variants={textStagger} custom={1}>
              At ZorShour, we believe marketing should do more than look good, it
              should work. Our strategies increase your visibility, connect you
              with the right audience, and drive your goals with precision.
              Backed by data and fueled by creativity, we turn ideas into
              measurable growth, making every campaign shine as bright as your
              ambition.
            </motion.p>
            <motion.p variants={textStagger} custom={2}>
              Because in the end, it’s not just about marketing - it’s about
              results.
            </motion.p>

            {/* Get Started Shimmer Button */}
            <motion.div variants={textStagger} custom={3} className="pt-6">
              <ShimmerBorder shimmerStyle="container" className="px-6 mb-3 rounded-full">
                <span className="text font-semibold">Get Started</span>
              </ShimmerBorder>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;