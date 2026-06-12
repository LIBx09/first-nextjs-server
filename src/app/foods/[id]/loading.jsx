import React from "react";

const loading = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Image Skeleton */}
        <div className="w-full h-80 bg-gray-200 rounded-xl"></div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          {/* Title Skeleton */}
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>

          {/* Meta Info Skeletons */}
          <div className="space-y-2 mt-2">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>

          {/* Price Skeleton */}
          <div className="h-6 bg-gray-200 rounded w-1/4 mt-4"></div>

          {/* Button/Link Skeleton */}
          <div className="h-4 bg-gray-200 rounded w-2/5 mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
