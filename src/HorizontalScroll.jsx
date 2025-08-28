import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Digital Marketing Strategy",
    heading: "Crafting Your Digital Roadmap",
    desc: "We develop comprehensive digital marketing strategies tailored to your business goals, ensuring maximum reach and impact. From market research to competitor analysis, we lay the groundwork for your success.",
    color: "bg-yellow-400",
    img: "https://images.pexels.com/photos/942331/pexels-photo-942331.jpeg",
    contentImage: "https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Social Media Marketing",
    heading: "Engage, Grow, Convert",
    desc: "Our social media experts create compelling campaigns that build brand awareness, foster community engagement and drive conversions across all major platforms. Let us amplify your voice.",
    color: "bg-cyan-500",
    img: "https://images.pexels.com/photos/4549411/pexels-photo-4549411.jpeg",
    contentImage: "https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "SEO & Paid Ads",
    heading: "Dominate Search Results",
    desc: "Boost your online visibility with our cutting-edge SEO techniques and highly effective paid advertising campaigns. We drive targeted traffic to your site, ensuring higher rankings and better ROI.",
    color: "bg-pink-500",
    img: "https://images.pexels.com/photos/16772285/pexels-photo-16772285.jpeg",
    contentImage: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function HorizontalScroll() {
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
              className="flex-shrink-0 w-screen h-screen flex flex-col md:flex-row"
            >
              {/* Left Section (Top on mobile, left on desktop) */}
              <div
                className="w-full h-1/2 md:h-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-16 text-white"
                style={{ backgroundColor: 'rgba(17, 17, 17, 1)' }}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src={service.contentImage}
                    alt={service.title}
                    className="h-[30vh] md:h-[60vh] object-contain rounded-lg shadow-lg"
                  />
                  <h2 className="text-2xl mt-4 font-bold md:text-4xl">{service.heading}</h2>
                </div>
              </div>

              {/* Right Section (Bottom on mobile, right on desktop) */}
              <div
                className={`w-full h-1/2 md:h-full md:w-1/2 flex items-center justify-center p-8 md:p-16 text-white ${service.color}`}
              >
                <div className="text-center">
                  <h1 className="text-3xl font-bold md:text-5xl">{service.title}</h1>
                  <p className="mt-2 text-base md:text-xl">{service.desc}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}