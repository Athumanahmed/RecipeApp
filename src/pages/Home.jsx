import {  Search  } from "lucide-react";
import React from "react";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  return (
    <div className="bg-[#fef9fc] p-10 flex-1">
      <div className="h-screen mx-auto">
        <form>
          <label className="input shadow-sm flex items-center gap-2">
            <Search size={"30"} />
            <input
              type="text"
              className="text-md md:text-lg grow"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>
        <p className="font-bold text-lg md:text-4xl mt-4">
          Recommended Recipes
        </p>
        <p className="text-slate-500   ml-1 my-2 text-lg">Popular Recipes</p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3">
          {/* recipes */}
          <RecipeCard />

          {/* recipes */}
        </div>
      </div>
    </div>
  );
};

export default Home;
