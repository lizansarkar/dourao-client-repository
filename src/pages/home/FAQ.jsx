import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

// FAQ ডাটা একটি অ্যারেতে রাখা হলো
const faqData = [
  {
    id: 1,
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    id: 2,
    question: "Is it suitable for all ages and body types?",
    answer:
      "Generally, yes, but it is always best to check the product specifications for size guidance. Most correctors come in adjustable sizes to fit a wide range of body types, from adolescents to adults.",
  },
  {
    id: 3,
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "When used correctly and consistently, posture correctors can be highly effective. They train muscle memory, reminding you to keep your spine aligned, which can significantly reduce back pain caused by poor posture.",
  },
  {
    id: 4,
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Some advanced models include smart features like vibration alerts that activate when you slouch, prompting you to correct your posture instantly. Please refer to the specific product model to confirm this feature.",
  },
  {
    id: 5,
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You can sign up for our back-in-stock notifications using your email address. We will send you an automated email alert as soon as the item becomes available for purchase again.",
  },
];

// সিঙ্গেল FAQ আইটেমের জন্য কম্পোনেন্ট
const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0 bg-gray-100">
      <button
        className="flex justify-between items-center w-full p-4 text-left font-medium text-lg text-gray-800 focus:outline-none"
        onClick={onClick}
      >
        <span>{item.question}</span>
        <div className="p-1 rounded-full text-[#03373D]">
          {isOpen ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
        </div>
      </button>

      {/* কন্টেন্ট, ট্রানজিশন ব্যবহার করে হাইট কন্ট্রোল করা */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <p
          className={` text-base text-gray-600 bg-[#CAEB66] border-l-4 border-[#03373D] p-4 rounded-md shadow-inner px-20`}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
};

// মূল FAQ কম্পোনেন্ট
const FAQ = () => {
  const [openId, setOpenId] = useState(faqData[0].id); // প্রথমটি ডিফল্টভাবে খোলা থাকবে

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="section pt-16 pb-24 relative">
      {/* 1. সেকশন হেডার */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* 2. FAQ কন্টেইনার */}
      <div className="container max-w-4xl mx-auto px-10">
        <div className="bg-white rounded-xl shadow-lg border-opacity-30 flex flex-col gap-5">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onClick={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>

      {/* 3. ফুটার বাটন */}
      <div className="text-center mt-16">
        <button className="flex items-center mx-auto py-3 px-8 text-lg font-semibold bg-[#BDEE58] text-gray-900 rounded-lg shadow-xl hover:bg-opacity-90 transition-colors">
          See More FAQ's
          <span className="ml-2 p-1 bg-gray-900 rounded-full text-white">
            <BiChevronDown size={18} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FAQ;
