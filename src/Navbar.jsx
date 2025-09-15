import { useState, useEffect, useRef } from "react";
import { useSpring, animated, useTrail } from '@react-spring/web';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  // Detect scroll direction and hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slide animation for navbar
  const navSpring = useSpring({
    transform: showNavbar ? "translateY(0%)" : "translateY(-150%)",
    config: {
      tension: 150,
      friction: 50,
    },
  });

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
  ];

  const allMenuItems = [
    ...links.map(link => ({ type: 'link', ...link })),
    {
      name: 'Get in Touch',
      href: 'https://wa.me/919829707705?text=Hello%20ZorShour%20team%20%E2%80%93%20I%20am%20interested%20in%20discussing%20digital%20marketing%20services%20and%20exploring%20how%20we%20can%20grow%20my%20business.%20Could%20we%20schedule%20a%20call%3F',
      type: 'button',
      target: '_blank'
    }
  ];

  const trail = useTrail(allMenuItems.length, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0px)' : 'translateY(-20px)',
    config: { tension: 250, friction: 30 },
  });

  const menuSpring = useSpring({
    height: isOpen ? 'auto' : 0,
    opacity: isOpen ? 1 : 0,
    overflow: 'hidden',
    config: { tension: 250, friction: 30 },
    delay: isOpen ? 0 : 250,
  });

  return (
    <animated.nav
      style={{
        ...navSpring,
        boxShadow: 'inset 0 0 20px rgba(251, 146, 60, 0.2)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl 
                 z-50 bg-gray-950/50 border border-gray-800/50 
                 rounded-full"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://ik.imagekit.io/adsrc2244/Zorshour/Screenshot_2025-08-28_at_11.52.35_AM-removebg-preview.png?updatedAt=1756362288219"
              alt="ZorShour"
              className="h-12 w-auto"
            />
          </div>

          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            <a
              href="https://wa.me/919829707705?text=Hello%20ZorShour%20team%20%E2%80%93%20I%20am%20interested%20in%20discussing%20digital%20marketing%20services%20and%20exploring%20how%20we%20can%20grow%20my%20business.%20Could%20we%20schedule%20a%20call%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-white text-gray-950 font-semibold py-2.5 px-6 rounded-full shadow-lg hover:bg-orange-400 hover:text-white transition-colors duration-300"
            >
              Get in Touch
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-3xl md:text-4xl focus:outline-none transition-colors duration-300 ${
                isOpen ? "text-orange-400" : "text-white hover:text-orange-400"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>
    </animated.nav>
  );
}