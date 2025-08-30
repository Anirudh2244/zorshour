import React from "react";
import { motion } from "framer-motion";
import ShimmerBorder from "./ShimmerBorder"; // import your shimmer button

const AboutUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageUrl =
    "https://images.unsplash.com/photo-1756370473190-4c41ddbd5e59?q=80&w=392&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section className="relative pt-12  bg-black text-white overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* "About Us" Shimmer Tag */}
        <motion.div
          className="mb-8 inline-block"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <ShimmerBorder shimmerStyle="container" className="px-6 py-2 rounded-full">
            <span className="text text-sm font-semibold">About Us</span>
          </ShimmerBorder>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="text-3xl md:text-4xl md:text-5xl font-extrabold max-w-4xl leading-tight mb-12"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          As a Forward-Thinking Digital Agency, We Specialize in{" "}
          <span className="text-orange-400">Creative Solutions.</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
          <div className="w-full md:w-1/2 flex justify-start items-center h-[100px] md:min-h-[300px] relative">
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
          </div>

          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 text-xl text-gray-200 mt-20 z-10 md:mt-0 pr-4 md:pr-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              At ZorShour, we believe marketing should do more than look good, it
              should work. Our strategies increase your visibility, connect you
              with the right audience, and drive your goals with precision.
              Backed by data and fueled by creativity, we turn ideas into
              measurable growth, making every campaign shine as bright as your
              ambition.
            </motion.p>
            <motion.p variants={itemVariants}>
              Because in the end, it’s not just about marketing - it’s about
              results.
            </motion.p>

            {/* Get Started Shimmer Button */}
            <motion.div variants={itemVariants} className="pt-6">
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
