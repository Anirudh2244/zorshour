import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-white">MyApp</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white focus:outline-none text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-white hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
