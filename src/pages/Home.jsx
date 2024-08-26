import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { randomColor } from "../utils/randomColor";
const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const Home = () => {
  // creating recipes state now
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);

    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
      );

      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  //   display recipes when page loads
  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value);
  };
  return (
    <div className="bg-[#fef9fc] p-10 flex-1">
      <div className="h-screen mx-auto">
        <form onSubmit={handleSearch}>
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

          {!loading &&
            recipes.map(({ recipe }, index) => (
              <RecipeCard key={index} recipe={recipe} {...randomColor()} />
            ))}
          {loading &&
            [...Array(12)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                <div className="skeleton h-32 w-full"></div>
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            ))}

          {/* recipes */}
        </div>
      </div>
    </div>
  );
};

export default Home;
