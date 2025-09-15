import { useState, useEffect, useRef } from "react";
import { useSpring, animated, useTrail } from "@react-spring/web";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // scrolling down → hide
      } else {
        setShowNavbar(true); // scrolling up → show
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar slide animation
  const navSpring = useSpring({
    transform: showNavbar ? "translateY(0%)" : "translateY(-120%)",
    config: { tension: 250, friction: 30 },
  });

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
  ];

  const allMenuItems = [
    ...links.map((link) => ({ type: "link", ...link })),
    {
      name: "Get in Touch",
      href: "https://wa.me/919829707705?text=Hello%20ZorShour%20team%20%E2%80%93%20I%20am%20interested%20in%20discussing%20digital%20marketing%20services%20and%20exploring%20how%20we%20can%20grow%20my%20business.%20Could%20we%20schedule%20a%20call%3F",
      type: "button",
      target: "_blank",
    },
  ];

  const trail = useTrail(allMenuItems.length, {
    from: { opacity: 0, transform: "translateY(-20px)" },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0px)" : "translateY(-20px)",
    config: { tension: 250, friction: 30 },
  });

  const menuSpring = useSpring({
    height: isOpen ? "auto" : 0,
    opacity: isOpen ? 1 : 0,
    overflow: "hidden",
    config: { tension: 250, friction: 30 },
    delay: isOpen ? 0 : 250,
  });

  return (
    <animated.nav
      style={{
        ...navSpring,
        boxShadow: "inset 0 0 10px rgba(251,146,60,0.25)", 
      }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50
                 bg-stone-950/40 backdrop-blur-sm 
                 rounded-2xl" 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://ik.imagekit.io/adsrc2244/Zorshour/Screenshot_2025-08-28_at_11.52.35_AM-removebg-preview.png?updatedAt=1756362288219"
              alt="ZorShour"
              className="h-12 w-auto"
            />
          </div>

          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            {/* Desktop Get in Touch */}
            <a
              href="https://wa.me/919829707705?text=Hello%20ZorShour%20team..."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-white text-gray-950 font-semibold py-2.5 px-6 rounded-full shadow-lg hover:bg-orange-400 hover:text-white transition-colors duration-300"
            >
              Get in Touch
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-3xl md:text-4xl focus:outline-none transition-colors duration-300 ${isOpen ? "text-orange-400" : "text-white hover:text-orange-400"
                }`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <animated.div
        style={menuSpring}
        className="absolute text-right bg-stone-950/90 backdrop-blur-sm top-20 left-0 w-full bg-gray-950 rounded-b-2xl shadow-lg"
      >
        <div className="px-4 pb-4 space-y-0">
          {trail.map((style, index) => {
            const item = allMenuItems[index];

            if (item.type === "link") {
              return (
                <animated.a
                  key={item.name}
                  href={item.href}
                  style={style}
                  className="block text-white text-xl font-medium hover:text-orange-400 transition-colors duration-300 py-2 border-b border-neutral-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </animated.a>
              );
            }
            if (item.type === "button") {
              return (
                <animated.a
                  key={item.name}
                  href={item.href}
                  target={item.target || "_self"}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  style={style}
                  className="block md:hidden text-center mt-2 bg-white hover:bg-orange-400 hover:text-white text-gray-950 font-semibold py-2 px-6 rounded-full transition-colors duration-300 border-b border-neutral-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </animated.a>
              );
            }

            return null;
          })}
        </div>
      </animated.div>
    </animated.nav>
  );
}
