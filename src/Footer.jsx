export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left side */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} ZorShour. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
