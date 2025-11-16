import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHandshake, FaMoneyBillWave, FaHubspot, FaBuilding } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  handshake: <FaHandshake className="w-10 h-10 text-green-600" />,
  cash: <FaMoneyBillWave className="w-10 h-10 text-green-600" />,
  hub: <FaHubspot className="w-10 h-10 text-green-600" />,
  corporate: <FaBuilding className="w-10 h-10 text-green-600" />
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function HowWork({ data }) {
  const works = data;
  console.log(works);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
      // GSAP দিয়ে কার্ডগুলোকে স্ট্যাগার অ্যানিমেশন
      gsap.fromTo(
        ".how-work-card",
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          }
        }
      );
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="section bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container">
        {/* হেডিং অ্যানিমেশন */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-16"
        >
          How it Works
        </motion.h2>

        {/* কার্ড গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {works.map((item, index) => (
            <motion.div
              key={item.id}
              className={`how-work-card bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group cursor-pointer transform hover:-translate-y-3`}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ 
                scale: 1.05, 
                rotate: index % 2 === 0 ? 2 : -2,
                transition: { duration: 0.3 }
              }}
              style={{ originY: 1 }}
            >
              {/* আইকন কন্টেইনার */}
              <div className="flex justify-center mb-5">
                <div className="p-4 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl group-hover:from-green-200 group-hover:to-teal-200 transition-all duration-500">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      transition: { repeat: Infinity, duration: 3 }
                    }}
                  >
                    {iconMap[item.icon]}
                  </motion.div>
                </div>
              </div>

              {/* টাইটেল */}
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-green-600 transition-colors">
                {item.title}
              </h3>

              {/* ডেসক্রিপশন */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
                {item.description}
              </p>

              {/* হোভারে ছোট অ্যারো */}
              <motion.div
                className="mt-4 flex justify-center opacity-0 group-hover:opacity-100"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}