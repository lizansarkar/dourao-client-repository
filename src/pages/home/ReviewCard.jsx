import React from "react";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <FaStar
          key={i}
          className={`w-4 h-4 ${
            i <= fullStars
              ? "fill-yellow-400 text-yellow-400"
              : i === fullStars + 1 && hasHalf
              ? "fill-yellow-400/50 text-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function ReviewCard({ review }) {
  const { userName, review: text, user_photoURL, ratings, role } = review;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 h-full flex flex-col">
      {/* কোট */}
      <RiDoubleQuotesL className="w-10 h-10 text-teal-600 opacity-20 mb-4" />

      {/* টেক্সট */}
      <p className="text-gray-700 text-sm md:text-base italic mb-6 flex-grow">
        {text}
      </p>

      {/* ডটেড লাইন */}
      <div className="border-t border-dashed border-gray-300 mb-6"></div>

      {/* ইউজার */}
      <div className="flex items-center gap-3">
        <img
          src={user_photoURL}
          alt={userName}
          className="w-12 h-12 rounded-full object-cover border-2 border-teal-600"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{userName}</h3>
          <p className="text-xs text-gray-500 capitalize">{role.replace("_", " ")}</p>
        </div>
        <div className="ml-auto">
          <StarRating rating={ratings} />
        </div>
      </div>
    </div>
  );
}