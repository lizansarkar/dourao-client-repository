import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// আপনার ব্র্যান্ডিং কালার
const PRIMARY_GREEN = "#BDEE58"; // Main branding color
const ACCENT_GREEN = "#CAEB66"; // Accent color

// === অ্যানিমেশন ভ্যারিয়েন্টস ===

// ট্র‍্যাভেল ভ্যারিয়েন্ট
const travelVariants = {
    animate: {
        x: ["-10%", "200%"], // ট্রাকটিকে স্ক্রিনের ডানদিকে পুরোপুরি বের করে দেওয়া হলো
        transition: {
            x: {
                duration: 5, // ভ্রমণের সময়কাল আরও বাড়ানো হলো
                ease: "linear", // পুরো রাস্তায় মসৃণভাবে চলার জন্য linear ব্যবহার করা হলো
                repeat: Infinity,
                repeatType: "loop", // লুপ হবে, রিভার্স হবে না
            }
        }
    }
};

// প্যাকেজের হালকা বাউন্স (ট্রাকের উপর)
const packageBounce = {
    animate: {
        y: [0, -5, 0], 
        transition: {
            y: {
                duration: 0.5,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 0,
            }
        }
    }
};

// সারপ্রাইজ বাস্ট (Burst) ভ্যারিয়েন্ট
const surpriseVariants = {
    initial: { scale: 0.8, opacity: 0, rotate: -10 },
    in: { scale: 1, opacity: 1, rotate: 0, transition: { duration: 0.5, type: 'spring' } },
    out: { scale: 0, opacity: 0, transition: { duration: 0.3 } },
};

// লাইট ফ্লিকারিং ভ্যারিয়েন্ট
const lightFlicker = {
    flicker: {
        opacity: [0.8, 1, 0.9, 1, 0.8],
        transition: {
            duration: 0.5,
            repeat: Infinity,
        }
    }
};

// === ছোট কম্পোনেন্টসমূহ ===

// গোলাপ ফুল SVG 
const RoseFlower = () => (
    <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className="w-10 h-10 sm:w-12 sm:h-12 text-red-500 transform rotate-12"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        variants={surpriseVariants}
        initial="initial"
        animate="in"
        exit="out"
    >
        {/* Rose Bud/Petals (Red) */}
        <path fill="#EF4444" stroke="#B91C1C" d="M12 2C9.24 2 7 4.24 7 7c0 2.89 2.12 5.02 5 8.78 2.88-3.76 5-5.89 5-8.78 0-2.76-2.24-5-5-5z"/>
        
        {/* Stem (Green) */}
        <line x1="12" y1="16" x2="12" y2="22" stroke={ACCENT_GREEN} strokeWidth="2" />
        <path d="M10 18h4" stroke={ACCENT_GREEN} strokeWidth="2" strokeLinecap="round"/>
        
        {/* Leaf (Green) */}
        <path fill={PRIMARY_GREEN} stroke="#4ADE80" d="M14 17l-3 3 4 1-1-4z" /> 
    </motion.svg>
);

// প্যাকেজ আইকন (বক্স)
const PackageIcon = () => (
    <motion.div 
        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center relative"
        variants={surpriseVariants}
        initial="initial"
        animate="in"
        exit="out"
    >
        {/* প্যাকেজের বক্স */}
        <div className={`w-full h-full rounded-lg shadow-lg bg-white border-2 border-gray-300`} />
        {/* প্যাকেজের ফিতা */}
        <div className="absolute inset-x-0 top-1/2 h-1 bg-gray-500 transform -translate-y-1/2 rounded-full" />
        <div className="absolute inset-y-0 left-1/2 w-1 bg-gray-500 transform -translate-x-1/2 rounded-full" />
    </motion.div>
);


// ডেলিভারি ট্রাক কম্পোনেন্ট (পরিবর্তন করা হলো)
const DeliveryTruck = ({ children }) => (
    <div className="relative flex items-end">
        
        {/* প্যাকেজ (কার্গো এরিয়ার উপরে) */}
        <motion.div 
            className="absolute -top-10 left-6 z-40" // প্যাকেজকে কার্গো এরিয়ার উপরে তুলে দেওয়া হলো
            variants={packageBounce}
            animate="animate"
        >
            {children} 
        </motion.div>

        {/* Cargo Area / Package Carrier (আপনার ব্র্যান্ডিং কালার) */}
        <div className={`h-12 w-24 bg-[#0072f5] shadow-2xl border-t-4 border-gray-700 z-30 rounded-t-lg`}>
            {/* প্যাকেজ এখন উপরে আছে, তাই ভেতরে p-2 বা flex নেই */}
        </div>
        
        {/* Cabin (Front) */}
        <div className={`relative h-10 w-10 bg-gray-700 rounded-tr-lg rounded-tl-sm shadow-xl border-t-4 border-gray-700 z-30`}>
             {/* Window (ছোট জানালা) */}
            <div className="absolute top-2 right-2 w-6 h-4 bg-blue-300 rounded-sm border border-gray-500"/>
            
            {/* Headlight (লাইট ইফেক্ট) */}
            <motion.div 
                className="absolute -right-1 bottom-3 w-1 h-3 bg-yellow-400 rounded-sm z-20"
                variants={lightFlicker}
                animate="flicker"
            />
        </div>
        
        {/* Wheels (চাকা - ট্রাকের নিচে) */}
        {/* পিছনের চাকা */}
        <div className={`absolute -bottom-2 left-2 w-5 h-5 rounded-full bg-gray-900 border-2 border-white shadow-lg z-40`} />
        {/* সামনের চাকা */}
        <div className={`absolute -bottom-2 right-7 w-5 h-5 rounded-full bg-gray-900 border-2 border-white shadow-lg z-40`} />
    </div>
);


const Loading = () => {
    // isSurprise স্টেটটি প্যাকেজ নাকি গোলাপ ফুল দেখাবে তা নিয়ন্ত্রণ করে
    const [isSurprise, setIsSurprise] = useState(false);

    useEffect(() => {
        // প্রতি 3 সেকেন্ড পর পর isSurprise স্টেটটি টগল করবে
        const interval = setInterval(() => {
            setIsSurprise(prev => !prev);
        }, 3000); 

        // Cleanup function
        return () => clearInterval(interval);
    }, []); // শুধু একবার রান হবে

    // প্রোগ্রেস বারের জন্য আলাদা স্টেট
    // এটি এখন ট্রাকের লুপের সাথে সিঙ্ক হবে না, শুধুমাত্র লোডিং ইন্ডিকেটর হিসেবে কাজ করবে
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // প্রোগ্রেস বার অ্যানিমেশনের জন্য
        const progressInterval = setInterval(() => {
            setProgress(prev => (prev >= 100 ? 0 : prev + 1));
        }, 25); 

        return () => clearInterval(progressInterval);
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gray-50 min-h-screen rele">
            
            {/* লোডিং এর মূল কন্টেইনার */}
            <div className="w-full relative">
                {/* === ট্র‍্যাভেলিং আইকন এবং রাস্তা === */}
                <div className="relative h-60 sm:h-60 overflow-hidden">
                    
                    {/* রাস্তা বা বেসলাইন */}
                    {/* রাস্তাটিকে ড্যাশ ইফেক্ট দেওয়া হলো যাতে মনে হয় এটি চলছে */}
                    <motion.div 
                        className={`absolute bottom-4 w-full h-1 bg-gray-300 rounded-full`} 
                        initial={{ backgroundPositionX: '0%' }}
                        animate={{ backgroundPositionX: '-100%' }}
                        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                        style={{
                            backgroundImage: 'linear-gradient(to right, transparent 50%, #4B5563 50%)',
                            backgroundSize: '20px 100%'
                        }}
                    />
                    
                    {/* চলন্ত ডেলিভারি ট্রাক */}
                    <motion.div 
                        className="absolute bottom-4 h-28 flex items-end"
                        variants={travelVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <DeliveryTruck>
                             {/* AnimatePresence ব্যবহার করে কন্টেন্ট পরিবর্তন এবং বাস্ট ইফেক্ট */}
                            <AnimatePresence mode="wait">
                                {isSurprise ? (
                                    <RoseFlower />
                                ) : (
                                    <PackageIcon />
                                )}
                            </AnimatePresence>
                        </DeliveryTruck>
                    </motion.div>
                </div>
            </div>
            
            {/* ব্যাকগ্রাউন্ড প্যাটার্ন বা ডেকোরেশন */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dot-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill={ACCENT_GREEN} />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                </svg>
            </div>
        </div>
    );
}

export default Loading;