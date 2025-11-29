import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import { motion } from 'framer-motion';
import { FaMapPin, FaRunning } from 'react-icons/fa';

export default function ErrorPage() {
  const navigate = useNavigate();

  // কালার থিম
  const primaryColor = '#03373D'; // গাঢ় টিল
  const accentColor = '#CAEB66'; // লাইম গ্রিন

  // ৬. ৩ সেকেন্ড পর '/' রুট-এ স্বয়ংক্রিয়ভাবে রিডাইরেক্ট হবে
  useEffect(() => {
    // 3000 মিলিসেকেন্ড = 3 সেকেন্ড
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 30000);
    
    // কম্পোনেন্ট আনমাউন্ট হলে টাইমার পরিষ্কার করা (Cleanup)
    return () => clearTimeout(timer);
  }, [navigate]);

  // ফ্রেমার মোশন ভ্যারিয়েন্টস দৌড়ানোর প্রভাব তৈরির জন্য
  const runnerVariants = {
    // ডানে-বামে ক্রমাগত নড়াচড়ার প্রভাব
    animate: {
      x: ["-5%", "5%"],
      transition: {
        x: {
          yoyo: Infinity, // বারবার পুনরাবৃত্তি হবে
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    },
  };

  // রাস্তার জন্য অ্যানিমেশন: পথটি পিছনের দিকে চলতে থাকবে, যা একটি অবিরাম দৌড়ানোর প্রভাব তৈরি করবে
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
        className="max-w-xl w-full relative z-10"
      >
        
        {/* ৪. দৌড়ানোর থিম, আইকন এবং রাস্তা */}
        <div className="relative mb-8 pt-8">
          {/* চলমান মানুষ/ডেলিভারি পার্সনের আইকন */}
          <motion.div
            variants={runnerVariants}
            animate="animate"
            className="inline-block p-4 rounded-full shadow-2xl"
            style={{ backgroundColor: accentColor, boxShadow: `0 0 30px ${accentColor}55` }}
          >
            {/* 'Run'-কে 'Running' করা হলো */}
            <FaRunning className="w-16 h-16 sm:w-20 sm:h-20" style={{ color: primaryColor }} />
          </motion.div>

          {/* ডেস্টিনেশন পাওয়া যাচ্ছে না - ম্যাপ পিন অফ (Not Found) */}
          <FaMapPin 
            className="absolute right-1/4 top-0 w-12 h-12 text-red-500/80 sm:right-1/3"
            style={{ 
              filter: `drop-shadow(0 0 10px #ff0000)`,
              transform: 'rotate(15deg)'
            }}
          />

          {/* রাস্তা/পথ যা শেষ হচ্ছে না (ইনফিনিট স্ক্রল ইফেক্ট) */}
          <div className="w-full h-2 absolute bottom-[-10px] left-0 overflow-hidden">
            <motion.div
              variants={roadVariants}
              animate="animate"
              className="absolute top-0 h-full w-[200%] border-t-2 border-dashed"
              style={{ borderColor: accentColor }}
            />
          </div>
        </div>

        {/* টেক্সট কন্টেন্ট */}
        <h1 className="text-7xl sm:text-9xl font-extrabold" style={{ color: accentColor }}>
          404
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold mt-2 mb-4 text-white">
          ডেলিভারি পথ খুঁজে পাওয়া যাচ্ছে না!
        </h2>
        
        <p className="text-gray-300 text-lg mb-6">
          দুঃখিত! আপনার ডেলিভারি গন্তব্যে পৌঁছাতে ব্যর্থ। হয়তো লিঙ্কটি ভুল, অথবা পৃষ্ঠাটি সরানো হয়েছে।
        </p>

        {/* ৫. রিডাইরেক্ট মেসেজ এবং বাটন */}
        <p className="text-white font-semibold mb-6">
          স্বয়ংক্রিয়ভাবে <span className="text-xl font-extrabold" style={{ color: accentColor }}>3 সেকেন্ড</span> এর মধ্যে হোমপেজে ফিরছে...
        </p>

        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          style={{ backgroundColor: accentColor, color: primaryColor }}
        >
          এখনই ফিরে যান
        </Link>
      </motion.div>
    </div>
  );
}