import { Heart, HeartPulse, Soup } from "lucide-react";
import React, { useState } from "react";

const getTwohealthLabels = (arr) => {
  return [arr[0], arr[1]];
};
const RecipeCard = ({ recipe, bg, badge }) => {
  const healthLabels = getTwohealthLabels(recipe.healthLabels);
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem("favorites")?.includes(recipe.label)
  );
  const addToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isRecipeAlreadyInFavorites = favorites.some(
      (fav) => fav.label === recipe.label
    );

    if (isRecipeAlreadyInFavorites) {
      favorites = favorites.filter((fav) => fav.label !== recipe.label);
      setIsFavorite(false);
    } else {
      favorites.push(recipe);
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  return (
    <a
      className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}
      href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
      target="_blank"
    >
      <div className="relative h-40">
        <img
          src={recipe.image}
          alt="recipe"
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-lg cursor-pointer p-2 flex items-center gap-1 text-sm">
          <Soup size={"16"} /> {recipe.yield} Servings
        </div>

        <div
          className="absolute top-2 right-2 bg-white rounded-full cursor-pointer p-2"
          onClick={(e) => {
            e.preventDefault();
            addToFavorites();
          }}
        >
          {!isFavorite && (
            <Heart
              size={20}
              className="hover:fill-red-500 hover:text-red-500"
            />
          )}
          {isFavorite && (
            <Heart size={20} className="fill-red-500 text-red-500" />
          )}
        </div>
      </div>

      <div className="flex mt-1">
        <p className="font-bold">{recipe.label}</p>
      </div>
      <p className="my-2">{recipe.cuisineType} Kitchen</p>

      <div className="flex gap-2 mt-auto">
        {healthLabels.map((label, index) => (
          <div
            key={index}
            className={`flex gap-1 ${badge} items-center p-1 rounded-lg`}
          >
            <HeartPulse size={"16"} />
            <span className="text-sm tracking-lighter font-semibold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </a>
  );
};

export default RecipeCard;
