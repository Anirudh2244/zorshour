"use client";
import { motion } from "framer-motion";
import Counter from "./Counter";

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const smoothScrollTo = (targetY, duration = 1000) => {
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
    }
  };

  requestAnimationFrame(step);
};

export default function AboutUs() {
  const darkBg = "#080808";

  // button click and smooth scroll
  const handleScrollToPhilosophy = () => {
    const el = document.getElementById("philosophy");
    if (el) {
      const targetY = el.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(targetY, 1000);
    }
  };

  return (
    <section
      id="aboutus"
      className="relative w-full text-white py-20 px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: darkBg }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute inset-0 border-t border-b border-white/10" />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        {/* Left: Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg relative"> {/* Add relative here */}
          <motion.video
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src="https://ik.imagekit.io/adsrc2244/Zorshour/herosection.mp4?updatedAt=1758626177129"
            poster="your-video-thumbnail.jpg"
            alt="Cosmic video"
            className="w-full h-auto max-h-[400px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* black filter */}
          <div className="absolute inset-0 bg-black opacity-15 rounded-2xl"></div> 
        </div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-2xl flex flex-col justify-center w-full md:w-auto p-0 md:px-8"
          style={{ backgroundColor: darkBg }}
        >
          <p className="self-start mb-2 text-xl text-white/50 tracking-wide font-medium">
            About Us
          </p>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-orange-300 via-orange-200 to-orange-300 bg-clip-text text-transparent leading-tight">
            Illuminating Brands with Precision
          </h3>
          <p className="text-lg mb-6 leading-relaxed text-white/70 font-light">
            At{" "}
            ZorShour, we
            believe marketing should do more than just look good -{" "}
            it should work.
            <br />
            By blending creativity with strategy, we combine{" "}
            data-driven precision{" "}
            with{" "}
            compelling storytelling{" "}
            to amplify your visibility and connect with the right audience. We
            transform bold ideas into measurable growth, ensuring every campaign
            shines as brightly as your ambition.
          </p>
          <button
            onClick={handleScrollToPhilosophy}
            className="self-start cursor-pointer bg-white text-gray-950 font-semibold py-2.5 px-6 rounded-full shadow-lg hover:bg-orange-400 hover:text-white transition-colors duration-300"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <Counter title="Number of Campaigns Run" finalNumber={500} />
        <Counter title="Revenue Generated for Clients" finalNumber={25000000} />
        <Counter title="Trusted by Brands" finalNumber={50} />
      </div>
    </section>
  );
}