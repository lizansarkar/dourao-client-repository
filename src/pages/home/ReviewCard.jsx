import React from "react";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function ReviewCard({ review }) {
  const { userName, review: reviewText, user_photoURL, ratings, role } = review;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* কোট আইকন */}
      <div className="mb-4">
        <RiDoubleQuotesL className="w-10 h-10 text-teal-600 opacity-20" />
      </div>

      {/* রিভিউ টেক্সট */}
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 italic flex-grow">
        {reviewText}
      </p>

      {/* ডটেড লাইন */}
      <div className="border-t border-dashed border-gray-300 mb-6"></div>

      {/* ইউজার */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-600">
          <img
            src={user_photoURL}
            alt={userName}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{userName}</h3>
          <p className="text-xs text-gray-500 capitalize">{role.replace("_", " ")}</p>
        </div>
        <div className="ml-auto">
          <StarRating rating={Math.round(ratings)} />
        </div>
      </div>
    </div>
  );
}