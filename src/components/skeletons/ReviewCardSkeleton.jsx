import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="max-w-2xl bg-white border border-gray-100 rounded-2xl p-6 shadow-sm animate-pulse">
      {/* User Info Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar Skeleton */}
          <div className="w-12 h-12 rounded-full bg-gray-200" />

          {/* Name & Date Skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-28 bg-gray-200 rounded" />
            <div className="h-3 w-20 bg-gray-100 rounded" />
          </div>
        </div>

        {/* Rating Badge Skeleton */}
        <div className="h-7 w-12 bg-amber-50/50 rounded-full" />
      </div>

      {/* Review Text Skeleton */}
      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </div>

      <hr className="my-4 border-gray-100" />

      {/* Like Button Section Skeleton */}
      <div className="flex items-center justify-between">
        {/* Like Button Skeleton */}
        <div className="h-8 w-16 bg-gray-100 rounded-xl" />

        {/* Like Count Skeleton */}
        <div className="h-3 w-24 bg-gray-100 rounded" />
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
