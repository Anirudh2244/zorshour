import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  {
    title: "Digital Marketing Strategy",
    heading: "Crafting Your Digital Roadmap",
    desc: "We develop comprehensive digital marketing strategies tailored to your business goals, ensuring maximum reach and impact. From market research to competitor analysis, we lay the groundwork for your success.",
    color: "bg-[#0d1317]", // Very dark blue, almost black
    contentImage: "https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Social Media Marketing",
    heading: "Engage, Grow, Convert",
    desc: "Our social media experts create compelling campaigns that build brand awareness, foster community engagement and drive conversions across all major platforms. Let us amplify your voice.",
    color: "bg-[#1a1a1a]", // A very dark gray that is visibly distinct from black
    contentImage: "https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "SEO & Paid Ads",
    heading: "Dominate Search Results",
    desc: "Boost your online visibility with our cutting-edge SEO techniques and highly effective paid advertising campaigns. We drive targeted traffic to your site, ensuring higher rankings and better ROI.",
    color: "bg-[#191614]", // A very dark brown, almost black
    contentImage: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const MobileCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // A new array with a duplicate of the first slide at the end
  const infiniteServices = [...services, services[0]];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + infiniteServices.length));
  };
  
  // Handles the seamless loop
  useEffect(() => {
    if (currentSlide === infiniteServices.length -1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 700); // Duration matches CSS transition duration
    }
  }, [currentSlide, infiniteServices.length]);

  useEffect(() => {
    const slideTimer = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="relative w-screen h-dvh overflow-hidden">
      <div
        className={`flex h-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {infiniteServices.map((service, idx) => (
          <section
            key={idx}
            className="flex-shrink-0 w-screen h-dvh flex flex-col"
          >
            {/* Left Section (Top on mobile) */}
            <div
              className="w-full h-1/2 flex flex-col items-center justify-center p-8 text-white"
              style={{ backgroundColor: 'rgba(17, 17, 17, 1)' }}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src={service.contentImage}
                  alt={service.title}
                  className="h-[30vh] object-contain rounded-lg shadow-lg"
                />
                <h2 className="text-2xl mt-4 font-bold">{service.heading}</h2>
              </div>
            </div>

            {/* Right Section (Bottom on mobile) */}
            <div
              className={`w-full h-1/2 flex items-center justify-center p-8 text-white ${service.color}`}
            >
              <div className="text-center">
                <h1 className="text-3xl font-bold">{service.title}</h1>
                <p className="mt-2 text-base">{service.desc}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-transparent text-white focus:outline-none transition-opacity duration-300 hover:opacity-100 opacity-30 animate-subtle-scale"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-transparent text-white focus:outline-none transition-opacity duration-300 hover:opacity-100 opacity-30 animate-subtle-scale"
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
        Math.max(0, (scrollY - containerTop) / (containerHeight - window.innerHeight))
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
              className="flex-shrink-0 w-screen h-screen flex md:flex-row"
            >
              {/* Left Section (Top on mobile, left on desktop) */}
              <div
                className="w-1/2 flex flex-col items-center justify-center p-8 md:p-16 text-white"
                style={{ backgroundColor: 'rgba(17, 17, 17, 1)' }}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src={service.contentImage}
                    alt={service.title}
                    className="h-[60vh] object-contain rounded-lg shadow-lg"
                  />
                  <h2 className="text-4xl mt-4 font-bold">{service.heading}</h2>
                </div>
              </div>

              {/* Right Section (Bottom on mobile, right on desktop) */}
              <div
                className={`w-1/2 flex items-center justify-center p-8 md:p-16 text-white ${service.color}`}
              >
                <div className="text-center">
                  <h1 className="text-5xl font-bold">{service.title}</h1>
                  <p className="mt-2 text-xl">{service.desc}</p>
                </div>
              </div>
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