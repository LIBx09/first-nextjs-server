import React from "react";

const getFoodById = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch food");
  }

  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.details;
};

const page = async ({ params }) => {
  const { id } = await params;
  console.log("fetching food with id:", id);

  const food = await getFoodById(id);
  if (!food) {
    return <p className="text-center text-red-500 mt-10">Food not found</p>;
  }
  console.log("where is the food", food);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-80 object-cover rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold">{food.title}</h1>

          <p className="mt-2 text-gray-600">Category: {food.category}</p>
          <p className="text-gray-600">Area: {food.area}</p>

          <p className="text-xl font-semibold mt-4">Price: ${food.price}</p>

          {food.video && (
            <a
              href={food.video}
              target="_blank"
              className="inline-block mt-4 text-blue-600 underline"
            >
              Watch Recipe Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
