import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRocket,
  FaStar,
  FaChartLine,
  FaBullhorn,
  FaUsers,
  FaLink,
  FaHandshake,
  FaChartBar,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Performance Marketing",
    heading: "Crafting Your Digital Roadmap",
    contentImage:
      "https://ik.imagekit.io/adsrc2244/Zorshour/performance-marketing.png?updatedAt=1758617432027",
    content: (
      <>
        <p className="text-neutral-300 text-l md:text-xl leading-relaxed text-center md:text-left mb-6">
          In the vast eCommerce galaxy, we help brands launch, grow, and scale
          to the top. Our focus is on visibility, trust, and customer experience
          — ensuring that every click moves you closer to sustainable growth.
        </p>
        <ul className="text-left space-y-4 text-neutral-300 text-l md:text-xl leading-relaxed">
          <li className="flex items-start">
            <FaRocket className="text-orange-400 mr-3 flex-shrink-0 mt-1 text-l" />
            <span>Rank higher and boost product visibility</span>
          </li>
          <li className="flex items-start">
            <FaStar className="text-orange-400 mr-3 flex-shrink-0 mt-1 text-l" />
            <span>Build trust and turn clicks into loyalty</span>
          </li>
          <li className="flex items-start">
            <FaChartLine className="text-orange-400 mr-3 flex-shrink-0 mt-1 text-l" />
            <span>Propel sales with measurable growth</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Affiliate Marketing",
    heading: "Expanding Your Reach, Amplifying Growth",
    contentImage:
      "https://ik.imagekit.io/adsrc2244/Zorshour/influemcer-makrt.png?updatedAt=1758617277122",
    content: (
      <>
        <p className="text-neutral-300 text-l md:text-xl leading-relaxed text-center md:text-left mb-6">
          In the interconnected eCommerce galaxy, affiliate marketing helps brands
          reach wider audiences and unlock scalable growth. By building trusted
          partnerships and optimizing performance, we ensure your brand connects
          further and converts faster.
        </p>
        <ul className="text-left space-y-4 text-neutral-300 text-l md:text-xl leading-relaxed">
          <li className="flex items-start">
            <FaUsers className="text-orange-400 mr-3 flex-shrink-0 mt-1 text-l" />
            <span>Expand reach with affiliates & influencers</span>
          </li>
          <li className="flex items-start">
            <FaLink className="text-orange-400 mr-3 flex-shrink-0 mt-1 text-l" />
            <span>Track, manage, and optimize campaigns</span>
          </li>
          <li className="flex items-start">
            <FaChartBar className="text-orange-400 mr-3 flex-shrink-0 mt-1 text-l" />
            <span>Drive scalable growth with partnerships</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Influencer Marketing",
    heading: "Creating Impact Through Influence",
    contentImage:
      "https://ik.imagekit.io/adsrc2244/Zorshour/influencer-new.png?updatedAt=1758617276748",
    content: (
      <>
        <p className="text-neutral-300 text-l md:text-xl leading-relaxed text-center md:text-left mb-6">
          In today’s eCommerce galaxy, influencer marketing bridges the gap
          between brands and customers. By collaborating with trusted voices,
          we build authentic connections that drive awareness, engagement,
          and conversions.
        </p>
        <ul className="text-left space-y-4 text-neutral-300 text-l md:text-xl leading-relaxed">
          <li className="flex items-start">
            <FaBullhorn className="text-orange-400 mr-3 flex-shrink-0 mt-1 text-l" />
            <span>Boost awareness with authentic voices</span>
          </li>
          <li className="flex items-start">
            <FaHandshake className="text-orange-400 mr-3 flex-shrink-0 mt-1 text-l" />
            <span>Build trust through genuine collaborations</span>
          </li>
          <li className="flex items-start">
            <FaChartLine className="text-orange-400 mr-3 flex-shrink-0 mt-1 text-l" />
            <span>Turn influence into measurable growth</span>
          </li>
        </ul>
      </>
    ),
  },
];

// Text stagger animation
const textStagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const MobileCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const slideTimer = setInterval(nextSlide, 10000);
    return () => clearInterval(slideTimer);
  }, []);

  const renderTitleWithOrangeFirstWord = (title) => {
    const words = title.split(" ");
    return (
      <>
        <span className="text-orange-400">{words[0]}</span>{" "}
        {words.slice(1).join(" ")}
      </>
    );
  };

  return (
    <div className="relative w-screen min-h-screen flex flex-col overflow-hidden mt-8">
      <AnimatePresence mode="wait">
        <motion.section
          key={currentSlide}
          className="flex flex-col flex-grow"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Top Section */}
          <div className="w-full flex-shrink-0 flex items-center justify-center py-12 px-6 md:px-12 bg-black shadow-lg">
            <motion.img
              src={services[currentSlide].contentImage}
              alt={services[currentSlide].title}
              className="w-full h-auto max-h-[30vh] object-contain shadow-lg rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          {/* Bottom Section */}
          <div className="w-full flex-grow flex items-center justify-center py-10 px-6 md:px-12 relative overflow-hidden bg-black shadow-lg">
            <div
              className="absolute inset-0 z-0"
              style={{ background: "radial-gradient(circle at bottom right, rgba(251,146,60,0.20) 0%, rgba(17,17,17,0) 50%)" }}
            />

            {/* Content */}
            <motion.div
              className="relative z-10 text-center max-w-xl"
              initial="hidden"
              animate="visible"
              variants={textStagger}
            >
              <motion.h1
                className="text-3xl md:text-4xl font-extrabold mb-4"
                variants={textStagger}
                custom={1}
              >
                {renderTitleWithOrangeFirstWord(services[currentSlide].title)}
              </motion.h1>
              <motion.div variants={textStagger} custom={2}>
                {services[currentSlide].content}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-transparent text-white hover:opacity-100 opacity-40 transition z-10"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-transparent text-white hover:opacity-100 opacity-40 transition z-10"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

const DesktopScroll = () => {
  const containerRef = useRef();
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY;

      const progress = Math.min(
        1,
        Math.max(
          0,
          (scrollY - containerTop) / (containerHeight - window.innerHeight)
        )
      );

      const totalScrollWidth = (services.length - 1) * window.innerWidth;
      setScrollX(progress * totalScrollWidth);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderTitleWithOrangeFirstWord = (title) => {
    const words = title.split(" ");
    return (
      <>
        <span className="text-orange-400">{words[0]}</span>{" "}
        {words.slice(1).join(" ")}
      </>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${services.length * 180}vh` }}
    >
      <div className="sticky top-0 h-screen flex overflow-hidden">
        <div
          className="flex h-full transition-transform ease-out"
          style={{ transform: `translateX(-${scrollX}px)` }}
        >
          {services.map((service, idx) => (
            <section
              key={idx}
              className="flex-shrink-0 w-screen h-full flex md:flex-row"
            >
              {/* Left Section (Image) */}
              <motion.div
                className="w-1/2 flex flex-col items-center justify-center py-20 px-6 md:px-12 bg-black"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={textStagger}
              >
                {/* Parent container with fixed size */}
                <div className="w-full h-[65vh] flex items-center justify-center shadow-lg rounded-2xl overflow-hidden">
                  <motion.img
                    src={service.contentImage}
                    alt={service.title}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1.05 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>

              {/* Right Section (Content) */}
              <motion.div
                className="w-1/2 flex items-center justify-center py-20 px-6 md:px-12 relative overflow-hidden bg-black"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={textStagger}
              >
                <div
                  className="absolute inset-0 z-0"
                  style={{ background: "radial-gradient(circle at bottom right, rgba(251,146,60,0.20) 0%, rgba(17,17,17,0) 50%)" }}
                />

                {/* Content */}
                <div className="relative z-10 max-w-xl text-center md:text-left">
                  <motion.h1
                    className="text-3xl md:text-4xl font-extrabold mb-6"
                    variants={textStagger}
                    custom={1}
                  >
                    {renderTitleWithOrangeFirstWord(service.title)}
                  </motion.h1>
                  <motion.div
                    className="text-lg md:text-xl leading-relaxed text-neutral-300"
                    variants={textStagger}
                    custom={2}
                  >
                    {service.content}
                  </motion.div>
                </div>
              </motion.div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function HorizontalScroll() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <section id="services">
      <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center pt-20">Our <span className="text-orange-400">Services</span></p>
      {isMobile ? <MobileCarousel /> : <DesktopScroll />}
    </section>
  );
}