const FoodCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
      <div className="h-56 w-full animate-pulse bg-gray-200"></div>

      <div className="space-y-4 p-5">
        <div className="flex justify-between">
          <div className="h-6 w-20 animate-pulse rounded bg-gray-200"></div>
          <div className="h-6 w-16 animate-pulse rounded bg-gray-200"></div>
        </div>

        <div className="h-6 w-full animate-pulse rounded bg-gray-200"></div>

        <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200"></div>

        <div className="flex gap-3 pt-2">
          <div className="h-10 flex-1 animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-10 flex-1 animate-pulse rounded-lg bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
