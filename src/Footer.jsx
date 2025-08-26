export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side */}
        <p>© {new Date().getFullYear()} MyApp</p>

        {/* Right side */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
