import React, { useState } from "react";
// import { Heart, Star } from "lucide-react"; // আপনি চাইলে অন্য আইকনও ব্যবহার করতে পারেন

const ReviewCard = ({ rev }) => {
  const reviewData = rev;

  // চেক করছি ইউজার অলরেডি লাইক দিয়েছে কিনা
  const [isLiked, setIsLiked] = useState();
  const [likeCount, setLikeCount] = useState(reviewData.likes.length);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  // ডেট ফরম্যাট করার জন্য
  const formattedDate = new Date(reviewData.date).toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-2xl bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* User Info Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={reviewData.photo}
            alt={reviewData.user}
            className="w-12 h-12 rounded-full object-cover border-2 border-orange-100"
          />
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">
              {reviewData.user}
            </h3>
            <p className="text-xs text-gray-400">{formattedDate}</p>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full">
          <div className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-bold text-amber-700">
            {reviewData.rating}
          </span>
        </div>
      </div>

      {/* Review Text */}
      <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
        {reviewData.review}
      </p>

      <hr className="my-4 border-gray-100" />

      {/* Like Button Section */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 py-1.5 px-3 rounded-xl ${
            isLiked
              ? "text-red-500 bg-red-50"
              : "text-gray-500 hover:text-red-500 hover:bg-gray-50"
          }`}
        >
          <span>{isLiked ? "Liked" : "Like"}</span>
        </button>

        {/* Total Likes Count */}
        <span className="text-xs text-gray-400 font-medium">
          {likeCount} {likeCount === 1 ? "person" : "people"} liked this
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
