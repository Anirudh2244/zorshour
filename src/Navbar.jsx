import { useState } from "react";
import { useSpring, animated, useTrail } from '@react-spring/web';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
  ];

  const allMenuItems = [
    ...links.map(link => ({ type: 'link', ...link })),
    {
      name: 'Get in Touch',
      href: 'https://wa.me/918696871001?text=Hello%20ZorShour%20team%20%E2%80%93%20I%20am%20interested%20in%20discussing%20digital%20marketing%20services%20and%20exploring%20how%20we%20can%20grow%20my%20business.%20Could%20we%20schedule%20a%20call%3F',
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
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
            <a
              href="https://wa.me/918696871001?text=Hello%20ZorShour%20team%20%E2%80%93%20I%20am%20interested%20in%20discussing%20digital%20marketing%20services%20and%20exploring%20how%20we%20can%20grow%20my%20business.%20Could%20we%20schedule%20a%20call%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-white text-gray-950 font-semibold py-2.5 px-6 rounded-full shadow-lg hover:bg-orange-400 hover:text-white transition-colors duration-300"
            >
              Get in Touch
            </a>

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
        className="absolute top-20 left-0 w-full bg-gray-950"
      >
        <div className="px-4 pb-4 space-y-4">
          {trail.map((style, index) => {
            const item = allMenuItems[index];
            return item.type === 'link' ? (
              <animated.a
                key={item.name}
                href={item.href}
                style={style}
                className="block text-white text-xl font-medium hover:text-[#B7410E] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </animated.a>
            ) : (
              <animated.a
                key={item.name}
                href={item.href}
                target={item.target || "_self"}
                rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                style={style}
                className="block text-center mt-4 bg-white hover:bg-orange-400 hover:text-white text-gray-950 font-semibold py-2 px-6 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </animated.a>
            );
          })}
        </div>
      </animated.div>
    </nav>
  );
}
