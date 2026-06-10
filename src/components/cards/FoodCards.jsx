import Link from "next/link";

const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food;

  return (
    <div className="overflow-hidden rounded-2xl border  border-green-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img src={foodImg} alt={title} className="h-56 w-full object-cover" />
      <div className="p-5">
        <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
          {category}
        </span>

        <h2 className="mt-3 line-clamp-2 text-xl font-bold text-gray-800">
          {title}
        </h2>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-2xl font-bold text-green-600">${price}</p>
        </div>

        <div className="mt-5 flex gap-3">
          <button className="flex-1 rounded-lg bg-orange-500 px-4 py-2 font-medium text-white transition hover:bg-orange-600">
            Add To Cart
          </button>

          <Link
            href={`/foods/${id}`}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-center font-medium text-gray-700 transition hover:bg-gray-100"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
