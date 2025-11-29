import React from 'react';
import { Link } from 'react-router'; 
import { motion } from 'framer-motion';
import { Lock, PersonStanding } from 'lucide-react'; 

const MotionPersonIcon = motion(PersonStanding);
const MotionLockIcon = motion(Lock);

export default function Forbidden() {
  const primaryColor = '#03373D';
  const accentColor = '#CAEB66';

  const personBounceVariants = {
      animate: {
          x: [0, 5, -5, 5, -5, 0], 
          y: [0, -3, 0, -2, 0], 
          transition: {
              x: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 0.4, repeat: Infinity, ease: "easeInOut" },
          },
      },
  };

  // ২. Lock icon-এর পালসিং/ওয়ার্নিং অ্যানিমেশন
  const lockPulseVariants = {
      animate: {
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0],
          transition: {
              scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          },
      }
  };

  const roadVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 text-center font-[Inter] overflow-hidden"
      style={{ backgroundColor: primaryColor }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full relative z-10 p-6 rounded-xl"
      >
        
        <div className="relative mb-8 pt-8 flex justify-center items-end h-40">
            
            {/* ১. বড় Lock আইকন (বাধা) */}
            <MotionLockIcon 
                variants={lockPulseVariants}
                animate="animate"
                className="w-24 h-24 absolute z-20"
                style={{ color: accentColor, top: '10px' }}
            />
            
            {/* ২. বাধা পাওয়া মানুষ (Person Bouncing) */}
            <motion.div
                variants={personBounceVariants}
                initial={{x: 0}}
                animate="animate"
                className="inline-block p-3 rounded-full absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 shadow-xl"
                style={{ backgroundColor: 'white', border: `3px solid ${accentColor}` }}
            >
                <PersonStanding className="w-12 h-12" style={{ color: primaryColor }} />
            </motion.div>

            {/* ৩. রাস্তা যা চলছে, কিন্তু মানুষ যেতে পারছে না */}
            <div className="w-full h-2 absolute bottom-0 left-0 overflow-hidden">
                <motion.div
                variants={roadVariants}
                animate="animate"
                className="absolute top-0 h-full w-[200%] border-t-4 border-dashed"
                style={{ borderColor: accentColor }}
                />
            </div>

            {/* ৪. বাধার রেখা */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute bottom-0 h-full w-0.5 z-40 bg-red-600 shadow-2xl" 
                style={{ right: '50%', transform: 'translateX(50%)', boxShadow: `0 0 15px 5px red` }}
            />

        </div>
        
        {/* টেক্সট কন্টেন্ট */}
        <h1 className="text-7xl sm:text-9xl font-extrabold text-red-600" style={{ textShadow: `0 0 10px rgba(255, 0, 0, 0.5)` }}>
          403
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold mt-2 mb-4 text-white">
          প্রবেশাধিকার নিষিদ্ধ
        </h2>
        
        <p className="text-gray-300 text-lg mb-6">
          দুঃখিত! এই পৃষ্ঠায় প্রবেশ করার অনুমতি আপনার নেই। আপনার অ্যাকাউন্টের স্ট্যাটাস চেক করুন অথবা সঠিক ইউজার হিসেবে লগইন করুন।
        </p>

        {/* বাটন */}
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          style={{ backgroundColor: accentColor, color: primaryColor }}
        >
          হোমপেজে ফিরে যান
        </Link>
      </motion.div>
    </div>
  );
}