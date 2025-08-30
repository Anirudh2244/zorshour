import React from "react";
import { motion } from "framer-motion";
import { Rocket, Telescope, Target, LineChart } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const PhilosophySection = () => {
  const cards = [
    {
      title: "Performance First",
      description:
        "We don’t just create campaigns, we engineer outcomes. Every strategy is built to maximize ROI, optimize conversions, and deliver measurable growth. Success isn’t about vanity metrics — it’s about real results that move your brand forward.",
      icon: <Rocket className="w-10 h-10 text-orange-400" />,
    },
    {
      title: "Visibility Where It Matters",
      description:
        "Whether it’s ranking your products higher on eCommerce platforms or placing your message in front of the right audience, we focus on positioning your brand where it counts. Silent but powerful, our methods ensure you stand out without shouting.",
      icon: <Telescope className="w-10 h-10 text-orange-400" />,
    },
    {
      title: "Precision Targeting",
      description:
        "Through data-driven insights, we craft campaigns that reach the right people at the right time. From hyper-targeted ads to influencer partnerships that resonate, our approach ensures your marketing dollars work harder and smarter.",
      icon: <Target className="w-10 h-10 text-orange-400" />,
    },
    {
      title: "Creativity Backed by Data",
      description:
        "We believe creativity should always serve performance. Every idea we execute is fueled by imagination but validated by analytics — making sure every piece of content, ad, or collaboration contributes directly to your growth goals.",
      icon: <LineChart className="w-10 h-10 text-orange-400" />,
    },
  ];

  return (
    <section className="relative py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Our Philosophy, &nbsp;
          <span className="text-orange-400">Our North Star.</span>
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="relative group p-8 rounded-2xl 
                        bg-gradient-to-br from-black to-neutral-900 
                        border border-neutral-800 shadow-lg
                        transition-transform duration-500 ease-out
                        hover:scale-[1.02]"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
            >
              {/* Subtle Glow Border Layer */}
              <div
                className="absolute inset-0 rounded-2xl border border-orange-400/40 
                           opacity-0 group-hover:opacity-100 
                           transition-opacity duration-500 ease-out pointer-events-none"
              ></div>

              {/* Subtle Glow Shadow Layer */}
              <div
                className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(251,146,60,0.15)] 
                           opacity-0 group-hover:opacity-100 
                           transition-opacity duration-500 ease-out pointer-events-none"
              ></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-4">
                {card.icon}
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-neutral-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
