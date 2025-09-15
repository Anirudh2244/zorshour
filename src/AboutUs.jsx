import { motion } from "framer-motion";
import Counter from "./Counter"; // Import the new component
import ShimmerBorder from './ShimmerBorder'; // Import ShimmerBorder

export default function AboutUs() {
  const darkBg = "#080808";

  return (
    <section
      className="relative w-full text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: darkBg }}
    >
      {/* Subtle star border */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 border border-white/10 rounded-2xl"
          // animate={{ opacity: [0.3, 0.6, 0.3] }}
          // transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <motion.img
            whileHover={{ scale: 1.1 }}
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
          className="rounded-2xl shadow-lg p-8 flex flex-col justify-center"
          style={{ backgroundColor: darkBg }}
        >
          {/* About Us Badge */}
          <span
            className="self-start mb-4 text-sm font-medium px-4 py-1 rounded-full"
            style={{ backgroundColor: darkBg, border: "1px solid #ffffff40" }}
          >
            About Us
          </span>

          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-orange-400/80">
            Illuminating Brands with Precision
          </h3>
          <p className="text-lg mb-6 leading-relaxed text-white/60">
            At ZorShour, we believe marketing should do more than look good - IT SHOULD WORK. <br />
            By blending creativity with strategy, we bring data-driven precision together with compelling storytelling to amplify your visibility and connect you with the right audience. We transform bold ideas into measurable growth,
            Ensuring every campaign shines as brightly as your ambition.
          </p>

          <ShimmerBorder shimmerStyle="container" className="self-start px-6 py-3 rounded-xl">
            <span className="font-medium">Learn More</span>
          </ShimmerBorder>
        </motion.div>
      </div>

      {/* New section for the three counters */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <Counter title="Number of Campaigns Run" finalNumber={500} />
        <Counter title="Revenue Generated for Clients" finalNumber={2500000} />
        <Counter title="Trusted by Brands" finalNumber={50} />
      </div>
    </section>
  );
}