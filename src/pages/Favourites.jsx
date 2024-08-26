import React from "react";
import RecipeCard from "../components/RecipeCard";
import { randomColor } from "../utils/randomColor";

const Favourites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="bg-[#faf9fb] flex-1  p-10 min-h-screen ">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-xl md:text-4xl my-4">My Favorites</p>
        {favorites.length === 0 && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <p className="text-lg font-bold text-center mt-4 text-red-400">
              You have no favorites yet!
            </p>
            ;
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.label} recipe={recipe} {...randomColor()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
