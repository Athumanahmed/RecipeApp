import React from "react";
import RecipeCard from "../components/RecipeCard";

const Favourites = () => {
  const fav = false;
  return (
    <div className="bg-[#faf9fb] flex-1  p-10 min-h-screen ">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-xl md:text-4xl my-4">My Favorites</p>

        {!fav && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <p className="text-lg font-bold text-center mt-4 text-red-400">
              You have no favorites yet!
            </p>
          </div>
        )}

        {fav && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RecipeCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
