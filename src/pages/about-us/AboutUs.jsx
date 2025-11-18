import React, { useState } from "react";
import Login from "../auth/Login";

// কন্টেন্টের ডেটা
const aboutContent = [
  {
    id: "story",
    title: "Story",
    text: `We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.`,
  },
  {
    id: "mission",
    title: "Mission",
    // আপনার ছবির মতো তিনটি প্যারাগ্রাফের কন্টেন্ট রিপিট করা হলো
    text: `Our mission is to bridge distances and connect businesses with their customers seamlessly. We are committed to leveraging technology to create the most transparent and reliable delivery network in the country, ensuring 100% customer satisfaction.

    We strive to simplify logistics, making it accessible even for small and medium-sized enterprises. Our commitment extends beyond just delivery; we aim to be a genuine partner in your growth, always delivering on our promise.

    The core of our mission is reliability. Every parcel, every delivery, is treated with the highest priority to ensure secure and timely arrival. We are constantly innovating to improve our service speed and reach.`,
  },
  {
    id: "success",
    title: "Success",
    text: `Our success is measured by the growth of our merchants and the smiles of their customers. We have successfully completed over 5 million deliveries, maintained a 99.5% on-time delivery rate, and built a network of over 10,000 trusted delivery agents nationwide. This milestone is a testament to our team's hard work and our clients' faith in us.`,
  },
  {
    id: "team",
    title: "Team & Others",
    text: `Our dedicated team comprises logistics experts, technology innovators, and customer service professionals who work tirelessly around the clock. We believe that our people are our greatest asset. Everyone, from our field agents to our executive team, shares a unified goal: to make your delivery experience effortless and reliable.`,
  },
];

const AboutUs = () => {
  // ডিফল্টভাবে 'Story' ট্যাবটি খোলা থাকবে
  const [activeTab, setActiveTab] = useState("story");

  // সক্রিয় কন্টেন্ট খুঁজে বের করা
  const activeContent = aboutContent.find((item) => item.id === activeTab);

  return (
    <div className="container py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. হেডিং এবং সাব-হেডিং */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1F544A] mb-4">
          About Us
        </h1>
        <p className="text-base text-gray-500 max-w-2xl leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* 2. ট্যাব নেভিগেশন */}
      <div className="border-b border-gray-200 mb-8 sm:mb-12">
        <nav className="-mb-px flex space-x-6 sm:space-x-10" aria-label="Tabs">
          {aboutContent.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                whitespace-nowrap pb-3 text-lg font-semibold transition-colors duration-200
                ${
                  // অ্যাকটিভ ট্যাবের স্টাইল: ছবির মতো মোটা সবুজ রঙ
                  tab.id === activeTab
                    ? "border-b-4 border-[#1F544A] text-[#1F544A]"
                    : "border-b-4 border-transparent text-gray-500 hover:text-gray-700" // ইন-অ্যাকটিভ ট্যাবের স্টাইল
                }
              `}
            >
              {tab.title}
            </button>
          ))}
        </nav>
      </div>

      {/* 3. কন্টেন্ট এরিয়া */}
      <div className="space-y-6 text-gray-700 max-w-5xl">
        {/* কন্টেন্ট টেক্সটটি প্যারাগ্রাফ অনুযায়ী ভাগ করে দেখানো হচ্ছে */}
        {activeContent.text.split("\n\n").map((paragraph, index) => (
          <p key={index} className="text-lg leading-relaxed">
            {paragraph.trim()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
