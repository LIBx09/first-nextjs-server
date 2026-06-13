"use client";

import ReviewCard from "@/components/cards/ReviewCards";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ReviewLoading />;
  }

  return (
    <div>
      <h2 className="text-4xl mt-5 font-bold mb-4">
        Total <span className="text-amber-500">{reviews.length}</span> Reviews
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((rev) => (
          <ReviewCard key={rev.id} rev={rev} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
