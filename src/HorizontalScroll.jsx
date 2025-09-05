import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Digital Marketing Strategy",
    heading: "Crafting Your Digital Roadmap",
    desc: "We develop comprehensive digital marketing strategies tailored to your business goals, ensuring maximum reach and impact. From market research to competitor analysis, we lay the groundwork for your success.",
    color: "bg-[#0d1317]",
    contentImage:
      "https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Social Media Marketing",
    heading: "Engage, Grow, Convert",
    desc: "Our social media experts create compelling campaigns that build brand awareness, foster community engagement and drive conversions across all major platforms. Let us amplify your voice.",
    color: "bg-[#1a1a1a]",
    contentImage:
      "https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "SEO & Paid Ads",
    heading: "Dominate Search Results",
    desc: "Boost your online visibility with our cutting-edge SEO techniques and highly effective paid advertising campaigns. We drive targeted traffic to your site, ensuring higher rankings and better ROI.",
    color: "bg-[#191614]",
    contentImage:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    const slideTimer = setInterval(nextSlide, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="relative w-screen h-dvh overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.section
          key={currentSlide}
          className="absolute inset-0 flex flex-col"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x < -100 || velocity.x < -500) {
              nextSlide(); // swipe left → next
            } else if (offset.x > 100 || velocity.x > 500) {
              prevSlide(); // swipe right → previous
            }
          }}
        >
          {/* Top Section - 40% height */}
          <div className="w-full h-[40%] flex flex-col items-center justify-center p-8 text-white bg-black shadow-lg">
            <motion.img
              src={services[currentSlide].contentImage}
              alt={services[currentSlide].title}
              className="h-[30vh] object-contain shadow-lg rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          {/* Bottom Section - 60% height */}
          <div
            className={`w-full h-[60%] flex items-center justify-center p-8 text-white bg-gradient-to-br from-black to-neutral-900 shadow-lg`}
          >
            <motion.div
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={textStagger}
            >
              <motion.h1
                className="text-3xl font-bold"
                variants={textStagger}
                custom={1}
              >
                {services[currentSlide].title}
              </motion.h1>
              <motion.p
                className="mt-2 text-base"
                variants={textStagger}
                custom={2}
              >
                {services[currentSlide].desc}
              </motion.p>
            </motion.div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-transparent text-white focus:outline-none transition-opacity duration-300 hover:opacity-100 opacity-30"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-transparent text-white focus:outline-none transition-opacity duration-300 hover:opacity-100 opacity-30"
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

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${services.length * 200}vh` }}
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
              {/* Left Section (50% width) */}
              <motion.div
                className="w-1/2 flex flex-col items-center justify-center p-8 md:p-16 text-white bg-black shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={textStagger}
              >
                <motion.img
                  src={service.contentImage}
                  alt={service.title}
                  className="h-[60vh] object-contain shadow-lg rounded-lg" 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1.05 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </motion.div>

              {/* Right Section (50% width) */}
              <motion.div
                className={`w-1/2 flex items-center justify-center p-8 md:p-16 text-white bg-gradient-to-br from-black to-neutral-900 shadow-lg`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={textStagger}
              >
                <div className="text-center">
                  <motion.h1
                    className="text-5xl font-bold"
                    variants={textStagger}
                    custom={1}
                  >
                    {service.title}
                  </motion.h1>
                  <motion.p
                    className="mt-2 text-xl"
                    variants={textStagger}
                    custom={2}
                  >
                    {service.desc}
                  </motion.p>
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
  return isMobile ? <MobileCarousel /> : <DesktopScroll />;
}