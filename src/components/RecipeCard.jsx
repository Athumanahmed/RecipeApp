import { Heart, HeartPulse, Soup } from "lucide-react";
import React from "react";

const RecipeCard = () => {
  return (
    <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative">
      <a href="#" className="relative h-40">
        <img
          src="/1.jpg"
          alt="recipe"
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-lg cursor-pointer p-2 flex items-center gap-1 text-sm">
          <Soup size={"16"} /> 4 Servings
        </div>

        <div className="absolute top-2 right-2 bg-white rounded-full cursor-pointer p-2">
          <Heart
            size={"20"}
            className="hover:fill-red-600 hover:text-red-600"
          />
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-bold">Roasted Chicken</p>
      </div>
      <p className="my-2">Turkish Kitchen</p>

      <div className="flex gap-2 mt-auto">
        <div className="flex gap-1 bg-[#d6f495] items-center p-1 rounded-lg">
          <HeartPulse size={"16"} />
          <span className="text-sm tracking-lighter font-semibold">
            Gluten-free
          </span>
        </div>
        <div className="flex gap-1 bg-[#d6f495] items-center p-1 rounded-lg">
          <HeartPulse size={"16"} />
          <span className="text-sm tracking-lighter font-semibold">
            Heart-Healthy
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
