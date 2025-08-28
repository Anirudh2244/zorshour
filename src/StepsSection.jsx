import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function StepsSection() {
  const [active, setActive] = useState(null);
  const [showContent, setShowContent] = useState(null);

  const steps = [
    {
      title: "Step 1",
      content:
        "This is the detailed explanation for Step 1. It appears once the box is expanded.",
    },
    {
      title: "Step 2",
      content:
        "This is the detailed explanation for Step 2. It appears once the box is expanded.",
    },
    {
      title: "Step 3",
      content:
        "This is the detailed explanation for Step 3. It appears once the box is expanded.",
    },
    {
      title: "Step 4",
      content:
        "This is the detailed explanation for Step 4. It appears once the box is expanded.",
    },
  ];

  return (
    <section className="w-full h-auto md:h-[400px] flex flex-col md:flex-row overflow-hidden bg-black text-white gap-4">
      {steps.map((step, index) => {
        const isActive = active === index;
        const ref = useRef(null);
        const inView = useInView(ref, { amount: 0.3 });

        return (
          <motion.div
            ref={ref}
            key={index}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => {
              setActive(null);
              setShowContent(null);
            }}
            animate={{
              // width control
              flex:
                isActive && window.innerWidth >= 768
                  ? 0.35
                  : window.innerWidth >= 768
                  ? active === null
                    ? 0.25
                    : (1 - 0.35) / 3
                  : 1,

              // bg
              backgroundColor:
                isActive && window.innerWidth >= 768
                  ? "rgba(17,17,17,1)"
                  : "transparent",

              // fade + slide for both mobile & desktop
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 40,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onAnimationComplete={() => {
              if (isActive && window.innerWidth >= 768) setShowContent(index);
            }}
            className={`relative cursor-pointer p-6 box-border min-w-0 rounded-xl transition-colors duration-500 
              ${
                isActive && window.innerWidth >= 768
                  ? "border-2 border-white"
                  : "border border-white/20 md:border-white/10"
              }`}
          >
            <div
              className={`flex flex-col h-full w-full transition-all duration-500 ${
                isActive && window.innerWidth >= 768
                  ? "items-start justify-start"
                  : "items-center justify-center"
              }`}
            >
              {/* Step title */}
              <h2
                className={`font-bold transition-all duration-500 ${
                  isActive && window.innerWidth >= 768
                    ? "text-xl mb-2 self-start"
                    : "text-2xl text-center"
                }`}
              >
                {step.title}
              </h2>

              {/* Step content */}
              {(showContent === index && window.innerWidth >= 768) ||
              window.innerWidth < 768 ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.4, delay: isActive ? 0.2 : 0 }}
                  className={`text-white/80 text-sm md:text-base mt-2 ${
                    isActive && window.innerWidth >= 768
                      ? "text-left"
                      : "text-center flex items-center justify-center h-full"
                  }`}
                >
                  {step.content}
                </motion.p>
              ) : null}
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
