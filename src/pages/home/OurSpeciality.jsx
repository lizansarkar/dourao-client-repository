import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiPackage, BiShieldPlus, BiSupport } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

export default function OurSpeciality() {
  const features = [
    {
      icon: <BiPackage className="w-16 h-16 text-teal-600" />,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      icon: <BiShieldPlus className="w-16 h-16 text-teal-600" />,
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable processes guarantee safe and damage-free delivery every time.",
    },
    {
      icon: <BiSupport className="w-16 h-16 text-teal-600" />,
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or concerns—anytime you need us.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      gsap.fromTo(
        ".feature-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        }
      );
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="section py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-item flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 p-6 md:p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t border-blue-200"
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* আইকন */}
              <div className="flex-shrink-0 p-4 bg-teal-50 rounded-lg">
                {feature.icon}
              </div>

              {/* টেক্সট */}
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-semibold text-teal-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}