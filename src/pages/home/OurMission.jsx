import React from 'react';

const OurMission = () => {
  return (
    <div className="relative overflow-hidden bg-[#03373D] sm:p-12 md:p-20 mx-auto my-10">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="#144C58" 
            fillOpacity="1" 
            d="M0,224L48,229.3C96,235,192,245,288,245.3C384,245,480,235,576,213.3C672,192,768,160,864,165.3C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            className='absolute top-0'
          ></path>
          {/* দ্বিতীয় ওয়েভ: ছবির মতো ডায়নামিক লুকের জন্য। */}
          <path 
            fill="#0A1A1D" 
            fillOpacity="1" 
            d="M0,192L48,192C96,192,192,192,288,181.3C384,171,480,149,576,144C672,139,768,149,864,170.7C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className='absolute bottom-0'
          ></path>
        </svg>
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* বাম দিকের কন্টেন্ট: টেক্সট এবং বাটন */}
        <div className="flex flex-col justify-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Merchant and Customer Satisfaction <br className='hidden md:block'/> is Our First Priority
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-xl">
            We offer the lowest delivery charge with the highest value along with 
            100% safety of your product. Pathao courier delivers your parcels in every 
            corner of Bangladesh right on time.
          </p>

          {/* বাটন কন্টেইনার */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="py-3 px-8 text-base font-semibold bg-[#BDEE58] text-[#0A1A1D] rounded-full hover:bg-opacity-90 transition-colors">
              Become a Merchant
            </button>
            <button className="py-3 px-8 text-base font-semibold border border-white text-white rounded-full hover:bg-white hover:text-[#0A1A1D] transition-colors">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* ডান দিকের কন্টেন্ট: ডায়াগ্রাম/প্যাকেজ ইমেজ (Tailwind Line Art) */}
        <div className="hidden lg:flex justify-center items-center">
            {/* ডায়াগ্রাম/লাইন আর্ট তৈরি করা - হুবহু ছবির মতো লাইন ব্যবহার করে */}
            <div className="relative w-[300px] h-[300px] transform scale-125">
                {/* বড় প্যাকেজ (নীচেরটা) */}
                <div className="absolute bottom-0 left-10 w-[200px] h-[150px] border-2 border-white rounded-lg">
                    {/* বাম দিকের ঢেউ */}
                    <div className="absolute -left-16 bottom-0 w-20 h-10 border-b border-l border-white rounded-bl-full"></div>
                    {/* ডান দিকের ঢেউ */}
                    <div className="absolute -right-16 bottom-10 w-20 h-10 border-b border-r border-white rounded-br-full"></div>
                </div>
                {/* ছোট প্যাকেজ (উপরেরটা) */}
                <div className="absolute top-10 right-10 w-[180px] h-[120px] border-2 border-white rounded-lg">
                    {/* টেপ/লেবেল */}
                    <div className="absolute top-1/2 left-0 w-full h-4 border-t border-b border-white"></div>
                    {/* ম্যাপ পিন */}
                    <div className="absolute -top-10 right-0 transform translate-x-1/2 -translate-y-full">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default OurMission;
