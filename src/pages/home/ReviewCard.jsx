import React from "react";
import { RiQuoteText } from "react-icons/ri";

export default function ReviewCard({ review }) {
    const { userName, review: reviewText,  user_photoURL: userImg, ratings } = review;
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      {/* কোট আইকন */}
      <div className="mb-5">
        <RiQuoteText></RiQuoteText>
      </div>

      {/* কোট টেক্সট */}
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 italic">
        {reviewText}
      </p>

      {/* ডটেড লাইন */}
      <div className="border-t border-dashed border-gray-300 mb-6"></div>

      {/* প্রোফাইল */}
      <div className="flex items-center gap-4">
        {/* সার্কেল */}
        <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
          <img src={userImg} alt="" />
        </div>

        {/* নাম + পজিশন */}
        <div>
          <h3 className="font-semibold text-gray-800 text-base">{userName}</h3>
          <p className="text-sm text-gray-500">{ratings}</p>
        </div>
      </div>
    </div>
  );
}