import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import emailjs from "@emailjs/browser";

const QueryForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_pw9ki1c",
        "template_b0xm54d",
        form.current,
        "YEzJoiP1dz2k7lxfB"
      )
      .then(
        () => {
          setStatus("success");
          setIsSending(false);
          form.current.reset();
        },
        () => {
          setStatus("error");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="query"
      className="relative pb-20 bg-gradient-to-b from-black to-neutral-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center border border-neutral-700 rounded-3xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side - Icon */}
          <div className="md:w-[30%] w-full bg-black/60 flex justify-center items-center p-8">
            <div className="relative w-56 h-56 flex justify-center items-center">
              <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-orange-400/30 to-white/5 animate-pulse"></div>
              <Rocket className="w-32 h-32 text-orange-400/80 animate-bounce-slow" />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-[70%] w-full bg-black/60 p-4 space-y-6">
            <motion.h2
              className="text-3xl font-extrabold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Let’s Make It <span className="text-orange-400">Happen!</span>
            </motion.h2>

            {/* EmailJS Form */}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Enter your name or company"
                  className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-500 
                             focus:outline-none focus:ring-1 focus:ring-orange-400 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="Enter your email address"
                  className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-500 
                             focus:outline-none focus:ring-1 focus:ring-orange-400 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-500
                             focus:outline-none focus:ring-1 focus:ring-orange-400 transition duration-300"
                />
              </div>

              {/* Optional Message Field */}
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Enter your query or message"
                  className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-500
                             focus:outline-none focus:ring-1 focus:ring-orange-400 transition duration-300 resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-white text-black font-semibold py-3 px-6 rounded-xl
                             transition-all duration-500 ease-out 
                             hover:scale-[1.02] hover:text-white hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(251,146,60,0.25)] disabled:opacity-50"
                >
                  {isSending ? "Sending..." : "Submit Query"}
                </button>

                {status === "success" && (
                  <p className="mt-3 text-sm text-green-400 text-center">
                    ✅ Query sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-3 text-sm text-red-400 text-center">
                    ❌ Something went wrong. Please try again.
                  </p>
                )}

                <p className="mt-3 text-sm text-gray-400 text-center">
                  Or mail us at{" "}
                  <a
                    href="mailto:namit@zorshour.com"
                    className="text-orange-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    namit@zorshour.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QueryForm;