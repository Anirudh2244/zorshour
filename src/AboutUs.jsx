import { motion } from "framer-motion";
import Counter from "./Counter";
import ShimmerBorder from './ShimmerBorder';

export default function AboutUs() {
  const darkBg = "#080808";

  return (
    <section
      className="relative w-full text-white py-20
       px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: darkBg }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 border-t border-b border-white/10"
        />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        {/* Left: Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80"
            alt="Influencer marketing"
            className="w-full h-[400px] object-cover"
          />
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

          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent leading-tight">
            Illuminating Brands with Precision
          </h3>

          <p className="text-lg mb-6 leading-relaxed text-white/70 font-light">
            At <span className="font-semibold text-white">ZorShour</span>, we believe marketing should do more than just look good - <span className="font-semibold text-orange-400">it should work.</span> <br />
            By blending creativity with strategy, we combine <span className="font-medium text-white">data-driven precision</span> with <span className="font-medium text-white">compelling storytelling</span> to amplify your visibility and connect with the right audience. We transform bold ideas into measurable growth, ensuring every campaign shines as brightly as your ambition.
          </p>

          <a
            href="https://wa.me/919829707705?text=Hello%20ZorShour%20team..."
            target="_blank"
            rel="noopener noreferrer"
            className="self-start bg-white text-gray-950 font-semibold py-2.5 px-6 rounded-full shadow-lg hover:bg-orange-400 hover:text-white transition-colors duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <Counter title="Number of Campaigns Run" finalNumber={500} />
        <Counter title="Revenue Generated for Clients" finalNumber={2500000} />
        <Counter title="Trusted by Brands" finalNumber={50} />
      </div>
    </section>
  );
}
