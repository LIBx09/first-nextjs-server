import FoodCard from "@/components/cards/FoodCards";
import React from "react";

const getFoods = async () => {
  try {
    const res = await fetch(
      " https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
    );
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data.foods;
  } catch (error) {
    alert("Failed to fetch foods");
  }
};

const Foods = async () => {
  const foods = await getFoods();
  return (
    <div>
      <h2 className="text-4xl mt-5 font-bold mb-4">
        Total <span className="text-amber-500">{foods.length}</span> Foods
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
