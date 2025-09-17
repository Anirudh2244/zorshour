import React from "react";
import { motion } from "framer-motion";
import { Map, Compass, Zap, Orbit } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const dividerVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const CosmicTrajectory = () => {
  const sections = [
    {
      icon: Map,
      title: "MAPPING YOUR UNIVERSE",
      description:
        "We dive deep into your brand, audience, and market to uncover what makes you unique. This phase is about understanding your business from every angle - your challenges, ambitions, and place in the digital landscape.",
    },
    {
      icon: Compass,
      title: "THE STELLAR BLUEPRINT",
      description:
        "Using insights from discovery, we craft a customized, data-driven plan. This is your blueprint for navigating the digital universe, ensuring every step is purposeful and aligned with your goals.",
    },
    {
      icon: Zap,
      title: "IGNITION & ASCENT",
      description:
        "This is the hands-on phase where creativity meets data. We meticulously implement your campaigns and optimize your digital assets with unwavering attention to detail and efficiency.",
    },
    {
      icon: Orbit,
      title: "SUSTAINING MOMENTUM",
      description:
        "Our work doesn't stop after launch. We continuously monitor performance and refine our approach based on real-time data to ensure your brand achieves sustained success.",
    },
  ];

  return (
    <section
      id="trajectory"
      className="relative py-20 px-6 md:px-12 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Cosmic <span className="text-orange-400">Trajectory</span>
        </motion.h2>

        <div className="space-y-16">
          {sections.map((section, i) => (
            <article 
              key={i}
              className="flex flex-col md:flex-row items-center md:items-start gap-8"
            >
              {/* Left Icon */}
              <motion.div
                className="w-full md:w-1/4 flex-shrink-0 flex justify-start md:justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariants}
              >
                <section.icon className="w-14 h-14 md:w-16 md:h-16 text-orange-400" />
              </motion.div>

              {/* Right Content */}
              <div className="w-full md:w-3/4"> 
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={itemVariants}
                >
                  <h4 className="text-xl md:text-2xl font-bold text-orange-400 mb-6">
                    {section.title}
                  </h4>
                  <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6">
                    {section.description}
                  </p>
                </motion.div>

                {/* Divider */}
                {i < sections.length - 1 && (
                  <motion.div
                    className="w-full h-px bg-neutral-700 mt-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={dividerVariants}
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CosmicTrajectory;